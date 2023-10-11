import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

export async function changeViewQuestion(app: FastifyInstance) {
  app.post('/view/:questionId', async (request, reply) => {
    const paramsSchema = z.object({
      questionId: z.string(),
    });

    const bodySchema = z.object({
      viewed: z.boolean(),
    });

    const { questionId } = paramsSchema.parse(request.params);
    const { viewed } = bodySchema.parse(request.body);
    await prisma.questions.update({
      where: { id: questionId },
      data: { viewed },
    });

    return { success: 'Question changed' };
  });
}
