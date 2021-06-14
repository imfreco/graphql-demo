'use strict';

const { ObjectID } = require('mongodb');

const connectToDatabase = require('./db');
const errorHandler = require('./errorHandler');

module.exports = {
  Course: {
    students: async ({ students }) => {
      let db, studentsData, ids;
      try {
        db = await connectToDatabase();
        ids = students ? students.map((id) => ObjectID(id)) : [];
        studentsData =
          ids.length > 0
            ? await db
                .collection('students')
                .find({ _id: { $in: ids } })
                .toArray()
            : [];
      } catch (error) {
        errorHandler(error);
      }
      return studentsData;
    },
  },
};
