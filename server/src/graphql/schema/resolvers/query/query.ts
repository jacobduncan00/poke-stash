import { GraphQLObjectType } from "graphql";
import getAllUsersQuery from "./getAllUsersQuery";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: getAllUsersQuery,
  },
});

export default query;
