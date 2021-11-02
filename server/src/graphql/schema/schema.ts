import { GraphQLSchema } from "graphql";
import query from "./resolvers/query/query";
import mutation from "./resolvers/mutation/mutation";

const schema: GraphQLSchema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
