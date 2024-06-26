// controllers/issueController.js
// import  from '../models/issueModel.js';

import { Issue } from "./Issue.js";
import { ObjectId } from 'mongodb';

// Get all issues for a project
export const getIssues = async (req, res) => {
    try {
      const { projectId } = req.params;
      const issues = await Issue.find({ projectId: new ObjectId(projectId) });
      res.render('issues', { issues, projectId });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  // Render the create issue form
  export const getCreateIssueForm = (req, res) => {
    const { projectId } = req.params;
    res.render('createIssue', { projectId });
  };
  
  // Create a new issue
  export const createIssue = async (req, res) => {
    try {
      const { projectId } = req.params;
      const { title, description, labels, author } = req.body;
      const newIssue = {
        projectId: new ObjectId(projectId),
        title,
        description,
        labels,
        author,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      await Issue.create(newIssue);
      res.redirect(`/issues/${projectId}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
