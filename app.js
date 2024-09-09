const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRouter.js");
const userRouter = require("./routes/userRouter.js");
const morgan = require('morgan');

// Middleware to parse JSON
app.use(express.json());

// Morgan middleware
app.use(morgan('tiny'));

//Use the tourRouter
app.use("/api/tours", tourRouter)
app.use("/api/users", userRouter)


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});