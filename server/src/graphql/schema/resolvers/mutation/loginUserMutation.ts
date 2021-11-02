import { GraphQLNonNull } from "graphql";
import { loginUser } from "../../../../data/userService";
import { IApolloServerContext } from "../../../../interfaces/IApolloServerContext";
import LoginUserInput from "../../typedefs/LoginUserInput";
import GqlUser from "../../typedefs/GqlUser";
import { User } from "@prisma/client";

const loginUserMutation = {
  type: GqlUser,
  args: {
    input: {
      type: GraphQLNonNull(LoginUserInput),
      description: "Login user",
    },
  },
  resolve: async (
    _source: unknown,
    { input: { username, password } }: any,
    _context: IApolloServerContext
  ): Promise<User> => {
    return loginUser({ username, password });
  },
};

export default loginUserMutation;
