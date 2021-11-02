import { GraphQLObjectType } from "graphql";
import createUserMutation from "./createUserMutation";
import loginUserMutation from "./loginUserMutation";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUserMutation,
    loginUser: loginUserMutation,
  },
});

export default mutation;
