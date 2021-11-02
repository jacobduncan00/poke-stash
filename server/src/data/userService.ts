import { User } from "@prisma/client";
import prisma from "../prisma/client";
import { encryptPassword, checkEncryption } from "../../helpers/encrypt";
import jwt from "jsonwebtoken";

const expiresIn = "1 day";

export const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

type CreateUserProps = {
  username: string;
  email: string;
  password: string;
};

type LoginUserProps = {
  username: string;
  password: string;
};

type UserReturnType = {
  id: number;
  username: string;
  password: string;
  email: string;
  token: string;
};

export const createUser = async ({
  username,
  email,
  password,
}: CreateUserProps): Promise<User> => {
  const hashedPassword = await encryptPassword({ password: password });
  const createdUser: UserReturnType = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      token: jwt.sign({ username: username }, process.env.TOKEN_SECRET, {
        expiresIn,
      }),
    },
  });
  return createdUser;
};
export const loginUser = async ({ username, password }: LoginUserProps) => {
  const user: UserReturnType = await prisma.user.findUnique({
    where: { username },
  });
  if (!user) throw new Error("No User Found");
  const isValid = await checkEncryption({
    password,
    hashedPassword: user.password,
  });
  if (!isValid) throw new Error("Wrong Password");
  prisma.user.update({
    where: { username },
    data: {
      token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, {
        expiresIn,
      }),
    },
  });
  return user;
};
