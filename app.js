const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRoutes.js");


// Middleware to parse JSON
app.use(express.json());

//Use the tourRouter
app.use("/tours", tourRouter)


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});