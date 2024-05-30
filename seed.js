const mongoose = require('mongoose');
const State = require('./models/State'); // Adjust the path if necessary

const initialStates = [
  { value: 'light1', state: 1 },
  { value: 'light2', state: 1 },
  { value: 'light3', state: 1 },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://planetmoses12:Lahaja40@ipinfoclone.awzagna.mongodb.net/ipinfoclone?retryWrites=true&w=majority&appName=ipinfoclone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await State.deleteMany({}); // Clear existing data
    await State.insertMany(initialStates); // Insert initial states

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  }
};

seedDatabase();
