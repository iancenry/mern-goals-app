const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value'],
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

//export Goal model and its schema
module.exports = mongoose.model('Goal', goalSchema);
