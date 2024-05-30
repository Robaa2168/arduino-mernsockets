const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://planetmoses12:Lahaja40@ipinfoclone.awzagna.mongodb.net/ipinfoclone?retryWrites=true&w=majority&appName=ipinfoclone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
