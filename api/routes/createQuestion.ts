import { FastifyInstance } from 'fastify';

export async function createQuestion(app: FastifyInstance) {
  app.post('/question', async (request, reply) => {
    const teste = 'Question';

    return teste;
  });
}
