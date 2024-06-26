// controllers/projectController.js
import { Issue } from "./Issue.js";
import {Project} from "./Project.js";

export const createProject = async (req, res) => {
  try {
    console.log("Request body:", req.body); 
    const newProject = req.body;
    await Project.create(newProject);
    // await project.save();
    res.redirect("/projects");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.render("projects", { projects });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getProjectDetail = async (req, res) => {
  try {
      const projectId = req.params.id;
      const project = await Project.findById(projectId);
      const issues = await Issue.find({ projectId });

      if (!project) {
          return res.status(404).send('Project not found');
      }

      res.render('projectDetail', { project, issues });
  } catch (error) {
      res.status(500).send(error.message);
  }
};
export const getCreateProjectForm = (req, res) => {
  res.render('createProject');
};
