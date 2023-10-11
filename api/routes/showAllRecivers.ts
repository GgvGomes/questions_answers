import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function showallRecivers(app: FastifyInstance) {
  app.get('/recivers', async (request, reply) => {
    return await prisma.recivers.findMany();
  });
}
