CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "username" varchar,
  "created_at" timestamp
);

CREATE TABLE "books" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "author" varchar,
  "synopsis" varchar,
  "created_at" timestamp
);

CREATE TABLE "belong" (
  "book_id" integer,
  "gender_id" integer,
  "created_at" timestamp
);

CREATE TABLE "genders" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "created_at" timestamp
);

CREATE TABLE "loans" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "book_id" integer,
  "loaned_at" timestamp,
  "due_at" timestamp,
  "returned_at" timestamp,
  "status" varchar
);

COMMENT ON COLUMN "loans"."status" IS 'active, returned, late, etc.';

ALTER TABLE "belong" ADD FOREIGN KEY ("gender_id") REFERENCES "genders" ("id");

ALTER TABLE "belong" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");

ALTER TABLE "loans" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "loans" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");
