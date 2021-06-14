'use strict';

const { ObjectID } = require('mongodb');

const connectToDatabase = require('./db');

module.exports = {
  courses: async () => {
    let db, courses;

    try {
      db = await connectToDatabase();
      courses = await db.collection('courses').find().toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  course: async (_, { id }) => {
    let db, course;

    try {
      db = await connectToDatabase();
      course = await db.collection('courses').findOne({ _id: ObjectID(id) });
    } catch (error) {
      console.error(error);
    }

    return course;
  },
  students: async () => {
    let db, students;

    try {
      db = await connectToDatabase();
      students = await db.collection('students').find().toArray();
    } catch (error) {
      console.error(error);
    }

    return students;
  },
  student: async (_, { id }) => {
    let db, student;

    try {
      db = await connectToDatabase();
      student = await db.collection('students').findOne({ _id: ObjectID(id) });
    } catch (error) {
      console.error(error);
    }

    return student;
  },
};
