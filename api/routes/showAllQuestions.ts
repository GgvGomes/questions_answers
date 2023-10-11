import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function showAllQuestions(app: FastifyInstance) {
  app.get('/questions', async (request, reply) => {
    const prompts = await prisma.questions.findMany({
      include: {
        reciver: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        data: 'asc',
      },
    });

    return prompts;
  });
}
