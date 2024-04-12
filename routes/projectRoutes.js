const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Proje oluşturma endpoint'i
router.post('/projects', async (req, res) => {
  try {
    const newProject = new Project({
      youAre: req.body.youAre,
      youHave: req.body.youHave,
      typeOfProject: req.body.typeOfProject,
      budget: req.body.budget
    });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Projeleri listeleme endpoint'i
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Proje detayı endpoint'i
router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
