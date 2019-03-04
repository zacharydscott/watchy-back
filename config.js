const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  un: process.env.frm_un,
  ps: process.env.frm_ps,
  rds: process.env.rds
};
