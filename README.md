# Better Vite Template

This is a modern and opinionated Vite template for building React applications with TypeScript, TailwindCSS, ESLint, Prettier, and Vitest. It provides a robust and well-configured starting point, incorporating best practices for development, testing, and code quality.

## Technologies Included

- **React 19 & TypeScript:** Latest versions for modern React development.
- **Vite:** Fast development server and build tool.
- **TailwindCSS:** Utility-first CSS framework for rapid UI development.
- **ESLint:** Pluggable JavaScript linter for code quality and style consistency.
- **Prettier:** Opinionated code formatter for consistent code style.
- **Vitest:** Fast unit test framework powered by Vite, with `jsdom` environment and `@testing-library/react` for component testing.
- **GitHub Actions:** Continuous Integration setup for automated testing across multiple Node.js versions.
- **Absolute Imports:** Configured for easy module imports using `@/*`.

## Getting Started

### Prerequisites

- Node.js (v18.x or higher recommended)
- npm (or yarn/pnpm)

### Installation

1.  Clone the repository:
    ```bash
    git clone [repository-url]
    cd [repository-name]
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Serves the production build locally.
- `npm run typecheck`: Checks TypeScript types.
- `npm run prettier:write`: Formats code with Prettier.
- `npm run lint`: Lints code with ESLint.
- `npm run test`: Runs typecheck, prettier check, lint, and vitest.

## Project Structure

The project follows a standard structure for React applications:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Icons/
│   │   └── Text/
│   ├── pages/
│   │   ├── About/
│   │   └── Home/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── router.tsx
├── .github/workflows/
│   └── ci.yml
├── .gitignore
├── .prettierrc.mjs
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── vitest.d.ts
└── vitest.setup.mts
```

## Contributing

Contributions are welcome! Please ensure your code adheres to the project's coding standards (ESLint and Prettier) and that all tests pass.

## License

This project is licensed under the MIT License.
