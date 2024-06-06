import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { v1 } from 'uuid';
import { boards } from './boards';

export const cards = sqliteTable('cards', {
    id: text('id_atividade').$defaultFn(() => v1()).primaryKey(),
    boardId: text('id_mural').references(() => boards.id),
    description: text('descricao').notNull(),
    marked: integer('feito',  {mode: 'boolean'})
})