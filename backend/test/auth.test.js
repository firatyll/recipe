const request = require('supertest');
const app = require('../index');
const User = require('../database/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

jest.mock('../database/models/user');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('Auth Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('POST /api/auth/login', () => {
        it('should return 400 if user does not exist', async () => {
            User.findOne.mockResolvedValue(null);

            const res = await request(app)
                .post('/api/auth/login')
                .send({ email: 'test@example.com', password: 'password123' });

            expect(res.status).toBe(400);
            expect(res.body.message).toBe('Invalid credentials');
        });

        it('should return 400 if password does not match', async () => {
            const user = { email: 'test@example.com', password: 'hashedpassword' };
            User.findOne.mockResolvedValue(user);
            bcrypt.compare.mockResolvedValue(false);

            const res = await request(app)
                .post('/api/auth/login')
                .send({ email: 'test@example.com', password: 'password123' });

            expect(res.status).toBe(400);
            expect(res.body.message).toBe('Invalid credentials');
        });

        it('should return 200 and a token if credentials are valid', async () => {
            const user = { email: 'test@example.com', username: 'testuser', password: 'hashedpassword' };
            User.findOne.mockResolvedValue(user);
            bcrypt.compare.mockResolvedValue(true);
            jwt.sign.mockReturnValue('validtoken');

            const res = await request(app)
                .post('/api/auth/login')
                .send({ email: 'test@example.com', password: 'password123' });

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Login successful');
            expect(res.body.token).toBe('validtoken');
        });
    });

    describe('POST /api/auth/register', () => {
        it('should return 400 if user with email or username already exists', async () => {
            User.findOne.mockResolvedValue({ email: 'test@example.com' });

            const res = await request(app)
                .post('/api/auth/register')
                .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });

            expect(res.status).toBe(400);
            expect(res.body.message).toBe('User with this email already exists');
        });

        it('should return 201 if registration is successful', async () => {
            User.findOne.mockResolvedValue(null);
            bcrypt.hash.mockResolvedValue('hashedpassword');
            User.prototype.save.mockResolvedValue();

            const res = await request(app)
                .post('/api/auth/register')
                .send({ username: 'newuser', email: 'new@example.com', password: 'password123' });

            expect(res.status).toBe(201);
            expect(res.body.message).toBe('Register successful');
        });
    });

    describe('GET /api/auth/profile', () => {
        it('should return 404 if user is not found', async () => {
            User.findOne.mockImplementation(() => ({
                select: jest.fn().mockResolvedValue(null)
            }));
            jwt.verify.mockReturnValue({ userMail: 'test@example.com' });

            const res = await request(app)
                .get('/api/auth/profile')
                .set('Authorization', 'Bearer validtoken');

            expect(res.status).toBe(404);
            expect(res.body.message).toBe('User not found');
        });

        it('should return 200 and the user profile if user is found', async () => {
            const user = { email: 'test@example.com', username: 'testuser' };
            User.findOne.mockImplementation(() => ({
                select: jest.fn().mockResolvedValue(user)
            }));
            jwt.verify.mockReturnValue({ userMail: 'test@example.com' });

            const res = await request(app)
                .get('/api/auth/profile')
                .set('Authorization', 'Bearer validtoken');

            expect(res.status).toBe(200);
            expect(res.body.user.email).toBe('test@example.com');
            expect(res.body.user.username).toBe('testuser');
        });
    });
});
