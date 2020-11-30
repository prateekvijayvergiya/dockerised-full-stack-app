const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const router = require("./routes/router");

app.use(cors())

mongoose
  .connect(`mongodb://host.docker.internal/PostsDB`, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("successfully connected to DB")
  })
  .catch((err) => {
    console.log('There is some error', err)
  })

const db = mongoose.connection;
db.on("error", console.error.bind);
db.once("open", function() {
  // we're connected!
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);

app.listen(3001, () => {
  console.log('Yipeee, I am running')
})