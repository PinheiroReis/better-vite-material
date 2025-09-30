CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(255),
  "password" VARCHAR(255),
  "created_at" TIMESTAMP
);

CREATE TABLE "books" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "author" TEXT NOT NULL,
  "year" INTEGER NOT NULL,
  "description" TEXT
);

CREATE TABLE "genders" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255),
  "created_at" TIMESTAMP
);

CREATE TABLE "belong" (
  "book_id" INTEGER REFERENCES "books"("id"),
  "gender_id" INTEGER REFERENCES "genders"("id"),
  "created_at" TIMESTAMP
);

CREATE TABLE "loans" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES "users"("id"),
  "book_id" INTEGER REFERENCES "books"("id"),
  "loaned_at" TIMESTAMP,
  "due_at" TIMESTAMP,
  "returned_at" TIMESTAMP,
  "status" VARCHAR(50)
);

COMMENT ON COLUMN "loans"."status" IS 'active, returned, late, etc.';
