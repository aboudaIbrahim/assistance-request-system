// seedAdmin.js
const User = require("../models/User");

const seedUser = async () => {
  const existingUser = await User.findOne({
    role: "user",
    email: "user@user.com",
  });
  if (!existingUser) {
    await User.create({
      email: "user@user.com",
      password: "user1234",
      role: "user",
    });
    console.log("user created");
  } else {
    console.log("user already exists");
  }
};

module.exports = seedUser;
