import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm/relations';
import { v1 } from 'uuid';
import { users } from './index';

export const boards = sqliteTable('boards', {
    id: text('id_mural').$defaultFn(() => v1()).primaryKey(),
    ownerId: text('id_dono').references(() => users.id),
    name: text('nome', { length: 256 }).notNull()
})

// export const boardOfUser = relations(users, ({ one }) => ({
//     author: one(users, {
//         fields: [users.id],
//         references: [users.id],
//     }),
// }));