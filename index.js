const express = require("express");
const connectDB = require("./database.js");
const cors = require('cors');
const User = require('./userModel');
const Feed = require('./feedModel');

const app = express();

// Middleware setup
app.use(cors({
    origin: 'https://software-app-client.vercel.app', // Ensure this matches the origin of your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
}));
app.use(express.json()); // Middleware for parsing JSON bodies

// Connect to the database
connectDB();

// Routes
app.get('/', async (req, res) => {
    res.json("Backend work");
});

app.post('/user-save', async (req, res) => {
    let { first_name, last_name, email, city, state, zipCode } = req.body;
    try {
        let result = new User({
            first_name: first_name,
            last_name: last_name,
            email: email,
            city: city,
            state: state,
            zip: zipCode,
        });
        await result.save();
        console.log(result);
        console.log('Data saved');
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving user data");
    }
});

app.post('/feed-save', async (req, res) => {
    let { name, email, subject, message } = req.body;
    try {
        let result = new Feed({
            name: name,
            email: email,
            subject: subject,
            message: message,
        });
        await result.save();
        console.log(result);
        console.log('Data saved');
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving feed data");
    }
});

app.get('/api-user', async (req, res) => {
    try {
        let users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving users");
    }
});

app.get('/api-feed', async (req, res) => {
    try {
        let feeds = await Feed.find();
        res.json(feeds);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving feeds");
    }
});

// Start the server
app.listen(8000, () => {
    console.log("Server running on port 8000");
});