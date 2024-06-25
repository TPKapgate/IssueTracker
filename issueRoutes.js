// routes/issueRoutes.js
import express from 'express';
import { getIssues, getCreateIssueForm, createIssue } from './issueController.js';

const router = express.Router();


router.get('/:projectId', getIssues);
router.get('/create/:projectId', getCreateIssueForm);
router.post('/create/:projectId', createIssue);

export default router;
