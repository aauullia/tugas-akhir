const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require("./route/user");

//use routerr
app.use("/user", userRouter);

app.listen(8000, () => {
    console.log("Run: 8000");
});