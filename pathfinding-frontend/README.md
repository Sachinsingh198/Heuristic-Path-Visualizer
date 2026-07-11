# Pathfinding Frontend

A modern React + Vite application for visualizing heuristic pathfinding algorithms.

## 🚀 Quick Start

This project uses React with Vite for fast development and optimized builds, configured with HMR (Hot Module Replacement) and ESLint rules.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 📦 Official Plugins

Two official Vite React plugins are available:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)** — Uses [Oxc](https://oxc.rs) for faster performance
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)** — Uses [SWC](https://swc.rs/) for optimized compilation

## ⚙️ Configuration

### React Compiler

The React Compiler is currently disabled due to its impact on development and build performance. To enable it, refer to the [React Compiler documentation](https://react.dev/learn/react-compiler/installation).

### ESLint Configuration

For production applications, we recommend enabling TypeScript with type-aware lint rules. See the [Vite TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for guidance.

## 📁 Project Structure

```
pathfinding-frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── vite.config.js
└── package.json
```

## 🛠️ Available Scripts

- `npm run dev` — Start development server with HMR
- `npm run build` — Create optimized production build
- `npm run lint` — Run ESLint checks
- `npm run preview` — Preview production build locally

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Heuristic Pathfinding Algorithms](https://en.wikipedia.org/wiki/Heuristic_search)

## 📝 License

See the root repository for license details.
