// para alimentar o banco de dados
import prisma from "@/lib/prisma";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// "seed": "tsx prisma/seed.ts"

async function main() {
  await prisma.recivers.deleteMany();

  await prisma.recivers.create({
    data: {
        name: "Todos",
    },
  });

  await prisma.recivers.create({
    data: {
      name: "Mauro Henrique",
    },
  });

  await prisma.recivers.create({
    data: {
      name: "Pastor Gustavo Ribeiro",
    },
  });

  await prisma.recivers.create({
    data: {
      name: "Pastor Herley Rocha",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
