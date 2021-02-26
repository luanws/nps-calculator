import 'ts-jest'
import app from '../src/app'
import supertest from 'supertest'
import connectDatabase from '../src/database'


describe("/surveys", () => {
    beforeAll(async () => {
        const connection = await connectDatabase()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = await connectDatabase()
        await connection.dropDatabase()
        await connection.close()
    })

    it('Criação de uma nova pesquisa', async () => {
        const response = await supertest(app).post('/surveys').send({
            title: 'Title example',
            description: 'Description example'
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id')
    })

    it('Deve ser capaz de obter todas as pesquisas', async () => {
        const response = await supertest(app).get('/surveys')
        expect(response.body.length).toBe(1)
    })
})