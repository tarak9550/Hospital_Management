const { OPDVisit } = require("../models");

// Get All OPD Visits (No Timestamps)
exports.getAllOPDVisits = async (req, res) => {
  try {
    const opdVisits = await OPDVisit.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(opdVisits);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch OPD visits" });
  }
};

// Get a Single OPD Visit by ID
exports.getOPDVisitById = async (req, res) => {
  try {
    const opdVisit = await OPDVisit.findByPk(req.params.id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (!opdVisit) return res.status(404).json({ error: "OPD visit not found" });
    res.json(opdVisit);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch OPD visit" });
  }
};

// Create an OPD Visit
exports.createOPDVisit = async (req, res) => {
  try {
    const { patient_id, doctor_name, symptoms, diagnosis } = req.body;
    const newOPDVisit = await OPDVisit.create({ patient_id, doctor_name, symptoms, diagnosis });
    res.status(201).json(newOPDVisit);
  } catch (error) {
    res.status(500).json({ error: "Failed to create OPD visit" });
  }
};

// Update an OPD Visit
exports.updateOPDVisit = async (req, res) => {
  try {
    const { doctor_name, symptoms, diagnosis } = req.body;
    const opdVisit = await OPDVisit.findByPk(req.params.id);
    if (!opdVisit) return res.status(404).json({ error: "OPD visit not found" });

    await opdVisit.update({ doctor_name, symptoms, diagnosis });
    res.json(opdVisit);
  } catch (error) {
    res.status(500).json({ error: "Failed to update OPD visit" });
  }
};

// Delete an OPD Visit
exports.deleteOPDVisit = async (req, res) => {
  try {
    const opdVisit = await OPDVisit.findByPk(req.params.id);
    if (!opdVisit) return res.status(404).json({ error: "OPD visit not found" });

    await opdVisit.destroy();
    res.json({ message: "OPD visit deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete OPD visit" });
  }
};
