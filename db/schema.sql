-- ==========================================================
-- Modelo de banco de dados para PostgreSQL
-- Inclui: usuários, livros, gêneros, relacionamento e empréstimos
-- ==========================================================

-- Tabela de usuários
CREATE TABLE users (
  id          BIGSERIAL PRIMARY KEY,
  username    VARCHAR(255) NOT NULL UNIQUE,
  password    VARCHAR(255) NOT NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT now()
);

-- Tabela de livros
CREATE TABLE books (
  id          BIGSERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  author      TEXT NOT NULL,
  year        INTEGER NOT NULL CHECK (year > 0),
  description TEXT,
  created_at  TIMESTAMP NOT NULL DEFAULT now()
);

-- Tabela de gêneros
CREATE TABLE genders (
  id          BIGSERIAL PRIMARY KEY,
  name        VARCHAR(255) NOT NULL UNIQUE,
  created_at  TIMESTAMP NOT NULL DEFAULT now()
);

-- Relacionamento N:N entre livros e gêneros
CREATE TABLE belong (
  book_id     BIGINT NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  gender_id   BIGINT NOT NULL REFERENCES genders(id) ON DELETE CASCADE,
  created_at  TIMESTAMP NOT NULL DEFAULT now(),
  PRIMARY KEY (book_id, gender_id)
);

-- Empréstimos de livros
CREATE TABLE loans (
  id           BIGSERIAL PRIMARY KEY,
  user_id      BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  book_id      BIGINT NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  loaned_at    TIMESTAMP NOT NULL DEFAULT now(),
  due_at       TIMESTAMP NOT NULL,
  returned_at  TIMESTAMP,
  status       VARCHAR(20) NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'returned', 'late'))
);

COMMENT ON COLUMN loans.status IS 'Situação do empréstimo: active, returned ou late';

-- ==========================================================
-- Inserções de teste
-- ==========================================================

-- Usuários
INSERT INTO users (username, password) VALUES
('joaovictor', '123456'),
('maria', 'senha123'),
('pedro', 'abc123');

-- Livros
INSERT INTO books (title, author, year, description) VALUES
('Dom Casmurro', 'Machado de Assis', 1899, 'Romance clássico brasileiro'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943, 'Livro infantil e filosófico'),
('1984', 'George Orwell', 1949, 'Distopia política');

-- Gêneros
INSERT INTO genders (name) VALUES
('Romance'),
('Infantil'),
('Distopia');

-- Relacionamento livros x gêneros
INSERT INTO belong (book_id, gender_id) VALUES
(1, 1),  -- Dom Casmurro -> Romance
(2, 2),  -- O Pequeno Príncipe -> Infantil
(3, 3);  -- 1984 -> Distopia

-- Empréstimos
INSERT INTO loans (user_id, book_id, due_at, status) VALUES
(1, 1, now() + interval '7 days', 'active'),   -- João pegou Dom Casmurro
(2, 2, now() + interval '10 days', 'active'),  -- Maria pegou O Pequeno Príncipe
(3, 3, now() + interval '5 days', 'active');   -- Pedro pegou 1984
