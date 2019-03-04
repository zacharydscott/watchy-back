const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.frm_un);
console.log(process.env.frm_ps);
console.log(process.env.rds);
module.exports = {
  un: process.env.frm_un,
  ps: process.env.frm_ps,
  rds: process.env.rds
};
