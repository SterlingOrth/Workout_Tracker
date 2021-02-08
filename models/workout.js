const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter your name",
      },
      type: {
        type: String,
        trim: true,
        required: "Type of exercise",
      },
      weight: {
        type: Number,
        required: "Enter the weight",
      },
      sets: {
        type: Number,
        required: "Amount of sets",
      },
      reps: {
        type: Number,
        required: "Number of reps",
      },
      duration: {
        type: Number,
        required: "Time taken",
      },
      distance: {
        type: String,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
