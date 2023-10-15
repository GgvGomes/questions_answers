// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '@prisma/client/edge';

declare global {
  var prisma: PrismaClient | undefined
}

let prisma: PrismaClient;

// https://github.com/prisma/prisma/discussions/12170
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;