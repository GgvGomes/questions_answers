import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

export async function createQuestion(app: FastifyInstance) {
  app.post('/question', async (request, reply) => {
    const bodySchema = z.object({
      question: z.string(),
      reciverId: z.string().uuid(),
      transmitter: z.string(),
    });

    try {
      const { question, reciverId, transmitter } = bodySchema.parse(request.body);

      prisma.questions.create({
        data: {
          question,
          reciverId,
          transmitter,
        },
      });

      return { success: 'Question created' };
    } catch (error) {
      reply.status(400).send({ error: 'Invalid request body' });
      return;
    }
  });
}
