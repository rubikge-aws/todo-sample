const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

// MongoDB connection configuration
const url = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;
const client = new MongoClient(url);

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

// Routes
app.get('/todos', async (req, res) => {
    const { user } = req.query;

    if (!user) {
        return res.status(400).json({ error: 'User parameter is required' });
    }

    try {
        const db = client.db(dbName);
        const collection = db.collection('users');
        const userData = await collection.findOne({ name: user });
        res.json(userData?.todos || []);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});

app.post('/todos', async (req, res) => {
    const { user } = req.query;
    const todos = req.body;

    if (!user) {
        return res.status(400).json({ error: 'User parameter is required' });
    }

    try {
        const db = client.db(dbName);
        const collection = db.collection('users');
        
        await collection.updateOne(
            { name: user },
            { $set: { todos } },
            { upsert: true }
        );

        res.json({ message: 'Todos updated successfully' });
    } catch (error) {
        console.error('Error updating todos:', error);
        res.status(500).json({ error: 'Failed to update todos' });
    }
});

// Initialize server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}); 