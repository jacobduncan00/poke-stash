import { GraphQLList } from "graphql";
import User from "../../typedefs/GqlUser";
import { User as UserType } from "@prisma/client";
import { IApolloServerContext } from "../../../../interfaces/IApolloServerContext";
import { getAllUsers } from "../../../../data/userService";

const getAllUsersQuery = {
  type: GraphQLList(User),
  resolve: async (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<UserType[]> => {
    return getAllUsers();
  },
};

export default getAllUsersQuery;
