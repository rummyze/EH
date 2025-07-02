import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
// import { db } from "~/server/db"; // Удаляем неиспользуемый импорт

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(8) }))
    .mutation(async ({ input: _input }) => { // Переименован input в _input
      // TODO: Реализовать создание пользователя в базе
      // await db.user.create({ data: { email: input.email, password: hash(input.password) } });
      return { ok: true };
    }),
  resetPassword: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input: _input }) => { // Переименован input в _input
      // TODO: Реализовать отправку email для сброса пароля
      return { ok: true };
    }),
}); 