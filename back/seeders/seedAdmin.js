// seedAdmin.js
const User = require("../models/User");

const seedAdmin = async () => {
  const existingAdmin = await User.findOne({ role: "admin" });
  if (!existingAdmin) {
    await User.create({
      email: "admin@admin.com",
      password: "admin123",
      role: "admin",
    });
    console.log("Admin user created");
  } else {
    console.log("Admin user already exists");
  }
};

module.exports = seedAdmin;
