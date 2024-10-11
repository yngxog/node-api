import { sql } from './db.js'
import { randomUUID } from 'crypto'

export class DatabaseMoedas {
    async createMoeda(moeda) {
        const id = randomUUID();
        const name = moeda.name;
        const descricao = moeda.descricao;

        await sql`insert into moedas (id, name, descricao)
        values (${id}, ${name}, ${descricao})`
    }
}