const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Simple in-memory database
const todos = {
    "user1": [
        { title: "Complete project documentation", completed: false },
        { title: "Review pull requests", completed: false },
        { title: "Update dependencies", completed: false }
    ],
    "user2": [
        { title: "Buy groceries", completed: true },
        { title: "Schedule meeting", completed: false }
    ]
};

// Get todos list by user
app.get("/todos", (req, res) => {
    const { user } = req.query;
    if (!user) {
        return res.status(400).json({ error: "User parameter is required" });
    }
    res.json(todos[user] || []);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
