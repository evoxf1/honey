const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Collection Name
const collectionName = 'candidates';

// Helper function to connect to MongoDB
async function connectToMongoDB() {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return collection;
}

// POST route to handle candidate sign-ups
router.post('/', async (req, res) => {
  try {
    const candidate = req.body;
    const collection = await connectToMongoDB();
    await collection.insertOne(candidate);
    res.status(201).json({ message: 'Candidate sign-up successful' });
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// GET route to retrieve all candidates
router.get('/', async (req, res) => {
  try {
    const collection = await connectToMongoDB();
    const candidates = await collection.find().toArray();
    res.status(200).json(candidates);
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
