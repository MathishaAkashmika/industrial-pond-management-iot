const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000; // You can use any port that is free on your server

// MongoDB URL and database configuration
const mongoUrl = 'mongodb+srv://mathisha:FlGxk3PKNy8MrvKo@userdataiot.e0w96vl.mongodb.net/'; // Replace with your MongoDB connection string
const dbName = 'userdataiot'; // Replace with your database name
const collectionName = 'sensordata'; // Replace with your collection name

app.use(bodyParser.json());

app.post('/api/data', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    await collection.insertOne(req.body); // Insert the data into the MongoDB collection
    res.status(200).send('Data inserted into MongoDB');
    
    client.close();
  } catch (error) {
    console.error('Failed to insert data into MongoDB', error);
    res.status(500).send('Error inserting data into MongoDB');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});