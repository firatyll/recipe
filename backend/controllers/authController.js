const User = require('../database/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userMail: user.email, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ message: 'Login successful', token: token });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error, please try again later.' });
    }
};

exports.postRegister = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await User.findOne({
            $or: [
                { email: email },
                { username: username }
            ]
        });

        if (userExists) {
            if (userExists.email === email) {
                return res.status(400).json({ message: 'User with this email already exists' });
            }
            if (userExists.username === username) {
                return res.status(400).json({ message: 'Username already taken' });
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username: username,
            email: email,
            password: hashedPassword,
        });

        await user.save();

        return res.status(201).json({ message: 'Register successful' });
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ message: 'Server error, please try again later.' });
    }
};

exports.getProfile = async (req, res) => {
    const decodedToken = req.user;
    try {
        const user = await User.findOne({ email: decodedToken.userMail }).select('-password -_id -__v');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return res.status(500).json({ message: 'Server error, please try again later.' });
    }
};
