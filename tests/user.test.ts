import 'ts-jest'
import app from '../src/app'
import supertest from 'supertest'
import connectDatabase from '../src/database'


describe("/users", () => {
    beforeAll(async () => {
        const connection = await connectDatabase()
        await connection.runMigrations()
    })

    it('Criação de um novo usuário', async () => {
        const response = await supertest(app).post('/users').send({
            email: 'user@example.com',
            name: 'User Example'
        })

        expect(response.status).toBe(201)
    })
})