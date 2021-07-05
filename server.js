const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json({ extended: false }));
// DB connection
require("./db/connection");

// importing routes
const registerRoute = require("./Routes/Register");
const roleRoute = require("./Routes/api/addRole");

// Routes server calls
app.use("/register", registerRoute);
app.use("/role", roleRoute);

app.get("/", (req, res) => {
  res.send("hello from 3000 server");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
