import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from "graphql";

const User = new GraphQLObjectType({
  name: "User",
  description: "A User",
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: "id of user",
    },
    email: {
      type: GraphQLString,
      description: "email of user",
    },
    username: {
      type: GraphQLString,
      description: "name of user",
    },
    password: {
      type: GraphQLString,
      description: "users password",
    },
    token: {
      type: GraphQLString,
      description: "jwt token",
    },
  },
});

export default User;
