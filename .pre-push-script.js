'use strict';

const replace = require('replace-in-file');
const moment = require('moment'); // require
const d = moment().format('DD-MMM-YYYY');

const options = {
  files: './src/config.js',
  from: /[0-9]{2}-[A-Za-z]{3}-[0-9]{4}/g,
  to: `${d}`,
};
try {
  replace.sync(options);
} catch (error) {
  console.error('Error occurred:', error);
  process.exit(1);
}
