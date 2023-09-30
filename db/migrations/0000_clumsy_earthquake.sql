CREATE TABLE IF NOT EXISTS "room" (
	"id" uuid DEFAULT gen_random_uuid(),
	"name" varchar(256),
	"is_active" boolean,
	"is_private" boolean,
	"description" varchar(256),
	"timestamp" timestamp DEFAULT now()
);
