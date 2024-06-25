// models/issueModel.js
import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    labels: [String],
    author: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Issue = mongoose.model('Issue', issueSchema);
// export default Issue;
