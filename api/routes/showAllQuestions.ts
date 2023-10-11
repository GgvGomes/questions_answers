import { FastifyInstance } from 'fastify';

export async function showAllQuestions(app: FastifyInstance) {
  app.get('/questions', async (request, reply) => {
    const teste = 'Return all QUestions';

    return teste;
  });
}
