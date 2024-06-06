CREATE TABLE `boards` (
	`id_mural` text PRIMARY KEY NOT NULL,
	`id_dono` text,
	`nome` text(256) NOT NULL,
	FOREIGN KEY (`id_dono`) REFERENCES `users`(`id_usuario`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `cards` (
	`id_atividade` text PRIMARY KEY NOT NULL,
	`id_mural` text,
	`descricao` text NOT NULL,
	`feito` integer,
	FOREIGN KEY (`id_mural`) REFERENCES `boards`(`id_mural`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id_usuario` text PRIMARY KEY NOT NULL,
	`senha` text(256) NOT NULL,
	`apelido` text(256) NOT NULL UNIQUE
);
