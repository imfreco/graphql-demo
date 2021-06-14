'use strict';

const connectToDatabase = require('./db');

module.exports = {
  createCourse: async (root, { input }) => {
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
};
