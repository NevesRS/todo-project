import {sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm/relations';

import { v4 } from 'uuid'

import { boards } from './index';

export const users = sqliteTable('users', {
    id: text('id_usuario').$defaultFn(() => v4()).primaryKey(),
    password: text('senha', { length: 256 }).notNull(),
    nickname: text('apelido', { length: 256 }).notNull().unique(),
})

// export const userBoards = relations(users, ({ many }) => ({
//     boards: many(boards)
// }));