
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const droneSchema = new Schema(
  {
    // unless you are defining more than the "type" property, you don't have to use {} (see below)
    // firstName: {type: String, require: true}
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
);

// const Book = model('Book', bookSchema);
// module.exports = Book;

module.exports = model("Drone", droneSchema);