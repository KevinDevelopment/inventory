import { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient | null = null;

export const makePrismaClient = (): PrismaClient => {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }

  return prismaInstance;
};