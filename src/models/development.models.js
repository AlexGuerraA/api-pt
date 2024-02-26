const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
    hability:{
        type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Dev", DevSchema);