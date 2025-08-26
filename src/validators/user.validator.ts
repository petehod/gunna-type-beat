import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),

  name: z.string().min(1).max(100),

  email: z.string().email(),

  isAdmin: z.boolean().default(false),

  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),

  avatarURL: z.string().url().nullable(),
  bio: z.string().max(250).optional()
});

export type User = z.infer<typeof UserSchema>;
