const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        fullname: { type: String, require: true },
        username: {
            type: String,
            require: true,
            min: 3,
            max: 50,
            unique: true,
        },
        email: { type: String, require: true, min: 3, max: 50, unique: true },
        password: { type: String, require: true, min: 5 },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
