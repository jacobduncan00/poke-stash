import bcrypt from "bcryptjs";

type Props = {
  password: string;
};

type CheckProps = {
  password: string;
  hashedPassword: string;
};

export const encryptPassword = async ({ password }: Props) => {
  const hashedPassword = await bcrypt.hash(password, 8).then((hashed) => {
    return hashed;
  });
  return hashedPassword;
};

export const checkEncryption = async ({
  password,
  hashedPassword,
}: CheckProps) => {
  const isValid = await bcrypt.compare(password, hashedPassword);
  if (!isValid) throw new Error("Wrong Password");
  return isValid;
};
