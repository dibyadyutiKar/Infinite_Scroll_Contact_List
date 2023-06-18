const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 400;

app.use(express.json());

var cors = require("cors");

app.use(cors());

const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT} `);
});
