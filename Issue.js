import { getClient } from './db.js';
import { ObjectId } from 'mongodb';

const dbName = "issueTrack";
const collectionName = "issues";

export const Issue = {
  create: async (issue) => {
    const client = getClient();
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.insertOne(issue);
    return result;
  },

  find: async (query = {}) => {
    const client = getClient();
    const collection = client.db(dbName).collection(collectionName);
    const issues = await collection.find(query).toArray();
    return issues;
  },

  findById: async (id) => {
    const client = getClient();
    const collection = client.db(dbName).collection(collectionName);
    const issue = await collection.findOne({ _id: new ObjectId(id) });
    return issue;
  },

  update: async (id, update) => {
    const client = getClient();
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: update });
    return result;
  },

  delete: async (id) => {
    const client = getClient();
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result;
  }
};
