const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const JWT_SECRET = 'your_jwt_secret'; // Replace with a strong secret

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// User Registration
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send('Invalid username or password');
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(400).send('Error logging in');
    }
});

// Housing Listings Endpoint
app.get('/api/listings', (req, res) => {
    const listings = [
        { id: 1, name: 'Affordable Apartment', location: '22030', price: 900, ecoFriendly: false },
        { id: 2, name: 'Eco-Friendly House', location: '22031', price: 1500, ecoFriendly: true },
        { id: 3, name: 'Cozy Cottage', location: '22030', price: 1300, ecoFriendly: true },
        { id: 4, name: 'Budget Studio', location: '22032', price: 800, ecoFriendly: false },
        { id: 5, name: 'Green Villa', location: '22030', price: 1600, ecoFriendly: true },
        { id: 6, name: 'Modern Condo', location: '22033', price: 1200, ecoFriendly: false },
        { id: 7, name: 'Suburban Home', location: '22030', price: 1400, ecoFriendly: false },
        { id: 8, name: 'Luxury Estate', location: '22034', price: 3000, ecoFriendly: true },
        { id: 9, name: 'Tiny House', location: '22030', price: 700, ecoFriendly: true },
        { id: 10, name: 'Family House', location: '22031', price: 1100, ecoFriendly: false },
        { id: 11, name: 'Downtown Loft', location: '22035', price: 2000, ecoFriendly: true },
        { id: 12, name: 'Charming Bungalow', location: '22030', price: 950, ecoFriendly: false },
        { id: 13, name: 'Eco Apartment', location: '22030', price: 1000, ecoFriendly: true },
        { id: 14, name: 'Rustic Farmhouse', location: '22036', price: 1300, ecoFriendly: false },
        { id: 15, name: 'Hillside Retreat', location: '22037', price: 2100, ecoFriendly: true },
        { id: 16, name: 'Urban Flat', location: '22030', price: 1150, ecoFriendly: true },
        { id: 17, name: 'Suburban Ranch', location: '22031', price: 1250, ecoFriendly: false },
        { id: 18, name: 'Seaside Cottage', location: '22039', price: 1800, ecoFriendly: true },
        { id: 19, name: 'City Penthouse', location: '22032', price: 2500, ecoFriendly: true },
        { id: 20, name: 'Historic Townhouse', location: '22030', price: 1450, ecoFriendly: false }
    ];
    res.json(listings);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});