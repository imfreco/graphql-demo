'use strict';

const { ObjectID } = require('mongodb');

const connectToDatabase = require('./db');

module.exports = {
  Query: {
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
        course = await db
          .collection('courses')
          .findOne({ _id: ObjectID(id) });
      } catch (error) {
        console.error(error);
      }

      return course;
    },
  },
};
