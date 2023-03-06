const express = require("express");
const {
  editThing,
  createThing,
  updateThing,
  deleteThing,
  showThings,
} = require("../controllers/stuff");
const router = express.Router();

router.post("/", createThing);

router.get("/:id", editThing);

router.put("/:id", updateThing);

router.delete("/:id", deleteThing);

router.get("/", showThings);

module.exports = router;
