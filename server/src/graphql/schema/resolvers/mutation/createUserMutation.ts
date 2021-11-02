import { GraphQLNonNull } from "graphql";
import { createUser } from "../../../../data/userService";
import { IApolloServerContext } from "../../../../interfaces/IApolloServerContext";
import CreateUserInput from "../../typedefs/CreateUserInput";
import GqlUser from "../../typedefs/GqlUser";
import { User } from "@prisma/client";

const createUserMutation = {
  type: GqlUser,
  args: {
    input: {
      type: GraphQLNonNull(CreateUserInput),
      description: "User input to be created",
    },
  },
  resolve: async (
    _source: unknown,
    { input: { username, email, password } },
    _context: IApolloServerContext
  ): Promise<User> => {
    return createUser({ username, email, password });
  },
};

export default createUserMutation;
