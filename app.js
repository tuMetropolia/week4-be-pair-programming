const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRouter.js");
const userRouter = require("./routes/userRouter.js");


// Middleware to parse JSON
app.use(express.json());

//Use the tourRouter
app.use("/tours", tourRouter)
app.use("/users", userRouter)


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});