const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const MONGO_URL = 'mongodb://0.0.0.0:27017/dear-santa';

mongoose.connect(MONGO_URL)
  .then(response => console.log(`Connected to the database ${response.connection.name}`))
  .catch(err => console.error(err))