const mongoose = require("mongoose");

require('dotenv').config();

const dbUrl = process.env.DB_URI;

mongoose.set('strictQuery', true);
const connect = async () => {
  await mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

const close = () => mongoose.connection.close();

module.exports = { connect, close, url: dbUrl };