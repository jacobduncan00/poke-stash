import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const CreateUserInput = new GraphQLInputObjectType({
  name: "LoginUserInput",
  description: "Login user input",
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: "username",
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
