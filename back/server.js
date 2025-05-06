require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const requestsRouter = require("./routes/AssistanceRequest");
const authRouter = require("./routes/auth");
const seedAdmin = require("./seeders/seedAdmin");
const seedUser = require("./seeders/seedUser");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use("/api/requests", requestsRouter);
app.use("/api/auth", authRouter);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/assistance_requests", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    seedAdmin();
    seedUser();
  })
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
