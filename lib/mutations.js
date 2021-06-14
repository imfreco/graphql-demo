'use strict';

const { ObjectID } = require('mongodb');

const connectToDatabase = require('./db');
const { student: getStudent, course: getCourse } = require('./queries');

module.exports = {
  createCourse: async (_, { input }) => {
    const defaults = {
      description: '',
      topic: '',
    };
    const newCourse = Object.assign(defaults, input);
    let db, course;
    try {
      db = await connectToDatabase();
      course = await db.collection('courses').insertOne(newCourse);
      newCourse._id = course.insertedId;
    } catch (error) {
      console.error(error);
    }
    return newCourse;
  },
  updateCourse: async (_, { id, input }) => {
    let db, course;
    try {
      db = await connectToDatabase();
      await db
        .collection('courses')
        .updateOne({ _id: ObjectID(id) }, { $set: input });
      course = await getCourse(null, { id });
    } catch (error) {
      console.error(error);
    }
    return course;
  },
  createStudent: async (_, { input }) => {
    let db, student;
    try {
      db = await connectToDatabase();
      student = await db.collection('students').insertOne(input);
      input._id = student.insertedId;
    } catch (error) {
      console.error(error);
    }
    return input;
  },
  updateStudent: async (_, { id, input }) => {
    let db, student;
    try {
      db = await connectToDatabase();
      await db
        .collection('students')
        .updateOne({ _id: ObjectID(id) }, { $set: input });
      student = await getStudent(null, { id });
    } catch (error) {
      console.error(error);
    }
    return student;
  },
  addStudent: async (_, { courseId, studentId }) => {
    let db, course, student;
    try {
      db = await connectToDatabase();
      course = await getCourse(null, { id: courseId });
      student = await getStudent(null, { id: studentId });

      if (!course || !student)
        throw new Error('student or course does not exist');

      await db
        .collection('courses')
        .updateOne(
          { _id: ObjectID(courseId) },
          { $addToSet: { students: ObjectID(studentId) } }
        );
    } catch (error) {
      console.error(error);
    }
    return course;
  },
};
