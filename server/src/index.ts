import { ApolloServer } from "apollo-server";
import schema from "./graphql/schema/schema";
import { performAstCodegen } from "./codegen";
import { IApolloServerContext } from "./interfaces/IApolloServerContext";
import prisma from "./prisma/client";

const startServer = () => {
  performAstCodegen();

  const context: IApolloServerContext = {
    prisma,
  };

  const server: ApolloServer = new ApolloServer({
    schema,
    context,
  });

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer();
