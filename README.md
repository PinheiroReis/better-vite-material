# Comunitary Library

## Requisitos funcionais

- **Cadastro de livros:**
  - Permitir adicionar novos livros com título, autor, ano de publicação e descrição.
  - Permitir visualizar todos os livros cadastrados.
  - Permitir identificar se o livro está disponível ou emprestado.

- **Cadastro de usuários:**
  - Permitir criar contas de usuários para acesso ao sistema.
  - Permitir autenticação via login e senha.

- **Empréstimos:**
  - Permitir registrar o empréstimo de um livro para um usuário.
  - Permitir visualizar quais livros estão emprestados e para quem.
  - Permitir definir datas de empréstimo e devolução prevista.

- **Devoluções:**
  - Permitir registrar a devolução de um livro.
  - Atualizar o status do livro para disponível após devolução.
  - Permitir visualizar histórico de empréstimos e devoluções.

Este projeto é uma aplicação web para gerenciamento e visualização de livros em uma biblioteca comunitária. O sistema foi desenvolvido com React, TypeScript, Vite, Material UI, ESLint, Prettier e Vitest, seguindo boas práticas de organização e testes.

## Como funciona o site

- O site possui autenticação obrigatória: você só pode acessar as páginas protegidas (como a biblioteca de livros) após realizar login.
- Após logar, você pode visualizar todos os livros cadastrados, ver se estão disponíveis ou emprestados, e acessar outras áreas do sistema.
- O menu de navegação permite acessar as principais páginas: Dashboard, Login e Library.
- O tema do site é responsivo e suporta modo escuro (dark mode).
- Para sair do sistema, basta clicar no botão "Logout" na página da biblioteca.

## Como logar

- Acesse a página de login pelo menu ou diretamente em `/login`.
- Use as credenciais abaixo para acessar o sistema:

```
Email: test@email.com
Senha: testpassword123
```

- Após o login bem-sucedido, você será redirecionado automaticamente para a página da biblioteca (`/library`).
- Se tentar acessar qualquer página protegida sem estar logado, será redirecionado para o login.

## Principais páginas

- **Login**: Autenticação do usuário.
- **Library**: Visualização dos livros, status de empréstimo e botão de logout.
- **Dashboard**: Página administrativa (exemplo/template).

## Scripts disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera o build de produção.
- `npm run preview`: Serve o build de produção localmente.
- `npm run typecheck`: Verifica os tipos do TypeScript.
- `npm run prettier:write`: Formata o código com Prettier.
- `npm run lint`: Lint do código com ESLint.
- `npm run test`: Executa os testes automatizados com Vitest.

## Estrutura do projeto

```
src/
├── components/
├── config/
├── pages/
│   ├── Dashboard/
│   ├── Errors/
│   ├── Library/
│   └── Login/
├── providers/
├── contexts/
├── App.tsx
├── router.tsx
└── ...
```

## Testes

- Todos os componentes e páginas principais possuem testes automatizados.
- Para rodar os testes, utilize `npm run test`.

## Contribuição

Contribuições são bem-vindas! Certifique-se de seguir os padrões de código do projeto e garantir que todos os testes estejam passando.

## Licença

MIT License
