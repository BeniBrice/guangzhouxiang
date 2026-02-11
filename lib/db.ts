// lib/db.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Réutilise le client global si possible, sinon en crée un nouveau
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

// Stocke dans le global uniquement en dev pour éviter les problèmes serverless
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
