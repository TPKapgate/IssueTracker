// controllers/issueController.js
// import  from '../models/issueModel.js';

import { Issue } from "./Issue.js";

// Get all issues for a project
export const getIssues = async (req, res) => {
    try {
        const { projectId } = req.params;
        const issues = await Issue.find({ projectId });
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
        const newIssue = new Issue({ projectId, title, description, labels, author });
        await newIssue.save();
        res.redirect(`/issues/${projectId}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

