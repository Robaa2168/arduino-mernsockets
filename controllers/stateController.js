const State = require('../models/State');

exports.getStates = async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateState = async (req, res) => {
  try {
    const { id, state } = req.body;
    const updatedState = await State.findByIdAndUpdate(id, { state }, { new: true });
    res.json(updatedState);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
