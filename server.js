
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'
import { DatabaseMoedas } from './database.js';

const server = fastify();
const database = new DatabaseMoedas;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/Moedas', async (request, reply) => {
    const body = request.body;
    await database.createMoeda(body);
    return 201
})


// READ
server.get('/', () => {
    return 'sesh';
});

server.get('/Moedas', () => {
    return 'sesh hollowaterboyz';
});


// UPDATE


// DELETE


server.listen({
    port: 3333
});
