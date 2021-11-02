import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    username: "Joe",
    email: "joemomma@yahoo.com",
    password: "123",
    token: "",
  },
  {
    username: "Justin",
    email: "jventura3@gulls.salisbury.edu",
    password: "123",
    token: "",
  },
  {
    username: "Blaine",
    email: "bmason3@gulls.salisbury.edu",
    password: "123",
    token: "",
  },
];

export async function main() {
  try {
    console.log(`Start seeding ...`);
    for (const u of userData) {
      const user = await prisma.user.create({
        data: u,
      });
      console.log(`Created user with id: ${user.id}`);
    }
    console.log(`Seeding finished.`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
