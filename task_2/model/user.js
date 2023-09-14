const mongoose = require("mongoose");

// Define the schema for your model
const nameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Makes the 'name' field required
    },
  },
  { timestamps: true }
);

// Create the Mongoose model based on the schema
module.exports = mongoose.model("User", nameSchema);
