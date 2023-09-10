const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    user: {
      //the _id created in the db
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      //ObjectId to reference User Model; User associated with a goal
      ref: 'User',
    },
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
