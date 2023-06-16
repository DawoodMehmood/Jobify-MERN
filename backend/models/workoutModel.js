const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    applyLink: {
      type: String,
      required: true,
    },
    jobMode: {
      type: String,
      enum: ['Remote', 'Onsite', 'Hybrid'],
      required: true,
    },
    lastDateToApply: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);


