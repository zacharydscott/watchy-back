pgp = require('pg-promise')();
const { un, ps, rds } = require('../../config');
const db = pgp('postgres://' + un + ':' + ps + '@' + rds);

module.exports = db;
