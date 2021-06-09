const courses = [
  {
    _id: 'anyId',
    title: 'Fisica',
    teacher: 'Alexander',
    description: 'Física mecánica',
    topic: 'MRU',
  },
  {
    _id: 'anyId',
    title: 'Cálculo',
    teacher: 'Deisy',
    description: 'Integral',
    topic: 'Series',
  },
  {
    _id: 'anyId',
    title: 'Programación',
    teacher: 'Emmanuel',
    description: 'Análisis de algoritmos',
    topic: 'Complejidades',
  },
];

module.exports = {
  courses: () => courses,
};
