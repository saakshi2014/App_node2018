const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },


    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/
    },

    phone: {
  type: String,
  match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
  },



    password: {
   type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);


const User = mongoose.model("User", userSchema);


module.exports = User;
