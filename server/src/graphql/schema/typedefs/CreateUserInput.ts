import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const CreateUserInput = new GraphQLInputObjectType({
  name: "CreateUserInput",
  description: "Create user input",
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: "users name",
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "users email",
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: "hashed password",
    },
    token: {
      type: new GraphQLNonNull(GraphQLString),
      description: "jwt token",
    },
  },
});

export default CreateUserInput;
