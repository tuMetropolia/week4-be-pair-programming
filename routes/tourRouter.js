const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers");

// ROUTES

// GET /tours
router.get("/", getAllTours);

// GET /tours/:tourId
router.get("/:tourId", getTourById);

router.use(auth);

// POST /tours
router.post("/", createTour);

// PUT /tours/:tourId
router.put("/:tourId", updateTour);

// DELETE /tours/:tourId
router.delete("/:tourId", deleteTour);

module.exports = router;