const request = require('supertest');
const app = require('../dist/server');

let token = '';

describe('Register New User', () => {
    it('should create a new user', async () => {

        const res = await request(app)
            .post('/auth/login')
            .send({
                "username": "johnq",
                "password": "password"
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');

        token = res.body.token;

    })
});

describe('Register New User', () => {
    it('should create a new user', async () => {

        const res = await request(app)
            .post('/auth/register')
            .send({
                "username": "testuser",
                "name": "username",
                "email": "testuser@users.com",
                "password": "password"
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('status')
        expect(res.body.status).toEqual(true);

    })
});


describe('Create Product Endpoint', () => {
    it('should create a new product', async () => {

        const res = await request(app)
            .post('/productos')
            .set('Authorization', `Bearer ${token}`)
            .send({
                "Descripcion": "Noveno Producto",
                "Precio": "18.45",
                "Existencias": 1,
                "Id": 37
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('payload');

    })
})