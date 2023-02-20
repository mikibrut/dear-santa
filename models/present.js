const mongoose = require('mongoose');
const { Schema } = mongoose;

const presentSchema = new Schema({

  name: String,
  image: {
    type: String,
    default:'https://3.bp.blogspot.com/-1sHPtPrvJwU/Vm7Bp1X4ZFI/AAAAAAAACyg/GrmXlh4I5TA/s1600/regalo.png'
  },
  price: Number,
  recipient: String,
  description: String
});

const Present = mongoose.model('Present', presentSchema);

module.exports = Present;