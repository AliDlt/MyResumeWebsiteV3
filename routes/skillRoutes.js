const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");

// Create a new skill
router.post("/admin/addskill", skillController.createSkill);

// Fetch all skills
router.get("/admin/skills", skillController.getAllSkills);

// Update a skill by ID
router.put("/admin/skill/:id", skillController.updateSkill);

// Delete a skill by ID
router.delete("/admin/skill/:id", skillController.deleteSkill);

module.exports = router;
