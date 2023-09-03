const request = require('request');
const lineReader = require('line-reader');
const readline = require('readline');
const fs = require('fs');
const rp = require('request-promise-native');
const util = require('util');
const centerAlign = require('center-align');
const axios = require('axios');
const figlet = require('figlet');
const eachLinePromise = util.promisify(lineReader.eachLine);

module.exports = {
  request,
  lineReader,
  readline,
  axios,
  fs,
  centerAlign,
  rp,
  figlet,
  eachLinePromise,
};