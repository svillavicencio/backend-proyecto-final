const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
  console.log('db connected!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(
    'mongodb+srv://dbUser:kMT1dTfg3KvcoFXc@cluster0.s0lgj.mongodb.net/test?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
