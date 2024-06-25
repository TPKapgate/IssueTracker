// routes/projectRoutes.js
import express from "express";
import { createProject, getCreateProjectForm, getProjectDetail, getProjects } from "./projectController.js";
import { getCreateIssueForm } from "./issueController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/create", createProject);
router.get("/create", getCreateProjectForm)
router.get("/:projectId/issues/create", getCreateIssueForm);
router.get('/:id', getProjectDetail);

export default router;
