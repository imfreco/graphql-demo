'use strict';

const { ObjectID } = require('mongodb');

const connectToDatabase = require('./db');
const errorHandler = require('./errorHandler');

module.exports = {
  courses: async () => {
    let db, courses;

    try {
      db = await connectToDatabase();
      courses = await db.collection('courses').find().toArray();
    } catch (error) {
      errorHandler(error);
    }

    return courses;
  },
  course: async (_, { id }) => {
    let db, course;

    try {
      db = await connectToDatabase();
      course = await db.collection('courses').findOne({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }

    return course;
  },
  people: async () => {
    let db, students;

    try {
      db = await connectToDatabase();
      students = await db.collection('students').find().toArray();
    } catch (error) {
      errorHandler(error);
    }

    return students;
  },
  person: async (_, { id }) => {
    let db, student;

    try {
      db = await connectToDatabase();
      student = await db.collection('students').findOne({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }

    return student;
  },
};
