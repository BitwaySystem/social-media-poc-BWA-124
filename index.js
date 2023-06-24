const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

const dbMongoConnect = require("./src/config/dbConnect");
const userRoute = require("./src/routes/users");
const authRoute = require("./src/routes/auth");
const postRoute = require("./src/routes/posts");

// db config
dbMongoConnect.on("error", console.log.bind(console, "Connection error"));
dbMongoConnect.once("open", () => {
    console.log("Successfully connected to the database !!!");
});

dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
    console.log("Backend is running!");
});
