import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { showAllQuestions } from "./routes/showAllQuestions";
import { createQuestion } from "./routes/createQuestion";
import { showallRecivers } from "./routes/showAllRecivers";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
  // colocar a url do front
});

app.register(showAllQuestions);
app.register(createQuestion);
app.register(showallRecivers);

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
