const express = require("express");
const app = express();
const port = 5000;
const connectToDB = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, content-Type, Accept"
  );
  next();
});


connectToDB();
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(express.json());
app.use("/api", require("./Routes/SignUp"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
