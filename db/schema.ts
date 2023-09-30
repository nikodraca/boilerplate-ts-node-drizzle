import { pgTable, uuid, boolean, varchar, timestamp } from 'drizzle-orm/pg-core';

export const room = pgTable('room', {
  id: uuid('id').defaultRandom(),
  name: varchar('name', { length: 256 }).notNull(),
  isActive: boolean('is_active').default(true),
  isPrivate: boolean('is_private').default(true),
  description: varchar('description', { length: 256 }),
  timestamp: timestamp('timestamp').defaultNow()
});

export type Room = typeof room.$inferSelect;
export type NewRoom = typeof room.$inferInsert;
