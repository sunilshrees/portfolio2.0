# Portfolio 2.0

Personal portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and the **React Compiler**.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Compiler](https://react.dev/learn/react-compiler) (`reactCompiler: true` in `next.config.ts`)

## Scripts

```bash
npm run dev    # development server (http://localhost:3000)
npm run build  # production static export to /out
npm run start  # preview static export in /out (run build first)
npm run lint   # ESLint
```

## Docker

```bash
docker build -t portfolio2.0 .
docker run -p 3000:3000 portfolio2.0
```

Static export output is served from the `out` directory.
