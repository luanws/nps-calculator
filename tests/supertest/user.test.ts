import 'ts-jest'
import app from '../../src/app'
import supertest from 'supertest'


describe("/users", () => {
    supertest(app).post('/users')
        .send({
            email: 'user@example.com',
            name: 'User Example'
        })
})