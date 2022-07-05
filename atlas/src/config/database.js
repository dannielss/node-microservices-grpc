const mongoose = require('mongoose');

async function initialize() {
  mongoose.connect('mongodb://db:27017/atlas');
}

initialize().then(() => console.log('Database connected!')).catch(err => console.log(err));
