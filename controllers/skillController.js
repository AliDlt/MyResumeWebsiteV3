const Skill = require("../models/Skill");

// Create a new skill
exports.createSkill = async (req, res) => {
  try {
    const { name, grade } = req.body;
    const skill = new Skill({ name, grade });
    const savedSkill = await skill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(500).json({ error: "Could not create skill" });
  }
};

// Fetch all skills
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch skills" });
  }
};

// Update a skill by ID
exports.updateSkill = async (req, res) => {
  try {
    const { name, grade } = req.body;
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      { name, grade },
      { new: true }
    );
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(500).json({ error: "Could not update skill" });
  }
};

// Delete a skill by ID
exports.deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Could not delete skill" });
  }
};
