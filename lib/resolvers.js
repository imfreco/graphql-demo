'use strict';

const courses = [
  {
    _id: '1',
    title: 'Fisica',
    teacher: 'Alexander',
    description: 'Física mecánica',
    topic: 'MRU',
  },
  {
    _id: '2',
    title: 'Cálculo',
    teacher: 'Deisy',
    description: 'Integral',
    topic: 'Series',
  },
  {
    _id: '3',
    title: 'Programación',
    teacher: 'Emmanuel',
    description: 'Análisis de algoritmos',
    topic: 'Complejidades',
  },
];

module.exports = {
  Query: {
    courses: () => courses,
    course: (_, args) => {
      const course = courses.find((course) => course._id === args.id);
      return course;
    },
  },
};
