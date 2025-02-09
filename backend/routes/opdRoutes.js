const express = require("express");
const router = express.Router();
const opdController = require("../controllers/opdController");

router.get("/", opdController.getAllOPDVisits);
router.get("/:id", opdController.getOPDVisitById);
router.post("/", opdController.createOPDVisit);
router.put("/:id", opdController.updateOPDVisit);
router.delete("/:id", opdController.deleteOPDVisit);

module.exports = router;
