'use strict';

function errorHandler(error) {
  console.error(error);
  throw new Error('Fail on server operation');
}

module.exports = errorHandler;