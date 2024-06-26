import { getClient } from './db.js';

const dbName = "issueTrack";
const collectionName = "projects";

export const Project = {
  create: async (project) => {
    const client = getClient();
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.insertOne(project);
    return result;
  },

  find: async (query = {}) => {
    const client = getClient();
    const collection = client.db(dbName).collection(collectionName);
    const projects = await collection.find(query).toArray();
    return projects;
  },

  findById: async (id) => {
    const client = getClient();
    const collection = client.db(dbName).collection(collectionName);
    const project = await collection.findOne({ _id: new ObjectId(id) });
    return project;
  },

  // Add other CRUD operations as needed
};
