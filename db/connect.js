const mongoose = require('mongoose');

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI);
};
// .then(() => console.log('CONNECTION TO DATABASE SUCCESSFUL....'))
// .catch((err) => console.log(err));

module.exports = connectDB;
