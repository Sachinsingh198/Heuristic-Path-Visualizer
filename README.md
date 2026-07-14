# Heuristic Path Visualizer 🚀

An interactive, high-performance full-stack web application designed to visualize the **A* Pathfinding Algorithm** in real-time. Built with a sleek cyber-dark user interface, it bridges a responsive React client with a fast FastAPI backend solver to demonstrate graph search optimization, heuristic calculations, and interactive wall-painting.

<<<<<<< HEAD
🌐 **Live Demo:** [heuristic-path-visualizer.vercel.app](https://heuristic-path-visualizer.vercel.app/)
=======
An interactive, high-performance full-stack web application designed to visualize classic Artificial Intelligence graph search and state-space optimization algorithms in real-time. This project demonstrates the A* pathfinding algorithm with a sleek, responsive UI and real-time performance analytics.

🔗 **[Live Demo](https://heuristic-path-visualizer.vercel.app/)** | 📖 **[Documentation](#)** | 🐛 **[Report Issues](https://github.com/Sachinsingh198/Heuristic-Path-Visualizer/issues)**
>>>>>>> c23bacdda1694c1f3f68b346e0a6c062a28b500c

---

## 📋 Table of Contents

- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🧠 Algorithmic Deep Dive](#-algorithmic-deep-dive)
- [🔌 API Specification](#-api-specification)
- [🚀 Local Installation & Setup](#-local-installation--setup)
- [🎮 User Interaction & Flow](#-user-interaction--flow)
- [👨‍💻 Author](#-author)

---

## ✨ Key Features

### 🧠 Intelligent Pathfinding
- **A\* Search Engine** – Optimized graph search using a priority queue (`heapq`) to calculate the shortest path.
- **Dynamic Heuristics** – Adapts heuristic calculation dynamically:
  - **Manhattan Distance** for 4-way orthogonal movement.
  - **Octile Distance** for 8-way diagonal movement.
- **Diagonal Toggle** – Toggle between strict orthogonal movement (4-way) and diagonal exploration (8-way) with precise edge costs (1.0 for straight steps, ~1.414 for diagonal steps).

### 🎨 Responsive Cyber-Dark UI
- **Interactive Painting** – Click or drag your mouse/touch-screen to paint and erase obstacle walls dynamically.
- **Adaptive Grid Sizes** – Automatically adjusts layout depending on screen size to prevent broken grids:
  - **Desktop (>= 768px):** 20 × 40 grid layout.
  - **Mobile (< 768px):** 15 × 18 grid layout with touch-friendly spacing.
- **Exploration Animation** – Sequentially animates explored cells and maps the final path with smooth custom CSS transitions.
- **Real-Time Analytics** – Instantly view path **Cost**, total **Explored** nodes count, and solver **Execution Time (ms)**.

---

## 🛠️ Tech Stack

### Frontend Client
- **React 19** – Component-driven client state architecture.
- **Vite 8** – Lightweight, HMR-powered bundler and dev server.
- **CSS3 Variables & Keyframe Animations** – Modern cyber theme styling with linear gradients and responsive layouts (no TailwindCSS dependencies).

### Backend Server
- **FastAPI** – High-throughput ASGI web framework for Python.
- **Uvicorn** – Lightweight ASGI web server implementation.
- **heapq** – Built-in binary heap priority queue structure for $O(\log n)$ extraction of lowest cost paths.

---

## 📁 Project Structure

This project uses a clean mono-repo separation between the frontend client and the backend server:

```
Heuristic-Path-Visualizer/
├── pathfinding-backend/          # Python FastAPI Backend
│   ├── main.py                   # Core server logic & A* solver
│   └── requirements.txt          # Python dependencies
│
└── pathfinding-frontend/         # React SPA Client
    ├── src/
    │   ├── assets/               # Static assets & logos
    │   ├── App.css               # Main layout styling, colors, and keyframe animations
    │   ├── App.jsx               # Grid interaction, API fetching, and animation sequencer
    │   ├── index.css             # Entry stylesheet
    │   └── main.jsx              # React mounting root
    ├── eslint.config.js          # Code quality guidelines
    ├── index.html                # Entry HTML page
    ├── package.json              # Client scripts and packages
    ├── package-lock.json         # Lockfile
    └── vite.config.js            # Vite configurations
```

---

## 🧠 Algorithmic Deep Dive

The A\* algorithm estimates total path cost $f(n)$ for every cell $n$ using the formula:
$$f(n) = g(n) + h(n)$$

Where:
- $g(n)$ is the exact accumulated cost to travel from the starting cell to the current cell $n$.
- $h(n)$ is the estimated heuristic distance from cell $n$ to the end goal.

### Heuristics & Movement

The application calculates cost configurations based on the diagonal movement toggle state:

#### 1. 4-Way Orthogonal Movement (Diagonals Off)
- **Neighbors:** Up, Down, Left, Right.
- **Path Cost:** 1.0 per step.
- **Heuristic:** Manhattan Distance.
- **Formula:** 
  $$h(n) = |x_{\text{goal}} - x_{\text{current}}| + |y_{\text{goal}} - y_{\text{current}}|$$

#### 2. 8-Way Diagonal Movement (Diagonals On)
- **Neighbors:** Cardinal directions + 4 diagonals.
- **Path Cost:** 1.0 for orthogonal steps, $\sqrt{2} \approx 1.414$ for diagonal steps.
- **Heuristic:** Octile Distance.
- **Formula:** 
  $$dx = |x_{\text{goal}} - x_{\text{current}}|$$
  $$dy = |y_{\text{goal}} - y_{\text{current}}|$$
  $$h(n) = (dx + dy) + (\sqrt{2} - 2) \cdot \min(dx, dy)$$

---

## 🔌 API Specification

The React app communicates directly with the Python server via JSON POST request.

### Solves Path (`POST /solve`)

Calculates the shortest grid path.

#### Request Body
```json
{
  "rows": 20,
  "cols": 40,
  "start": [4, 4],
  "end": [15, 35],
  "walls": [
    [5, 5],
    [5, 6],
    [5, 7]
  ],
  "allow_diagonal": true
}
```

#### Response (Success)
```json
{
  "path": [[5, 4], [6, 4], [7, 4], "..."],
  "visited": [[4, 5], [3, 4], "..."],
  "cost": 32.2,
  "time_ms": 1.25
}
```

#### Response (No Path Found)
```json
{
  "path": [],
  "visited": [[4, 5], "..."],
  "cost": 0,
  "time_ms": 0.85,
  "message": "No path found"
}
```

---

## 🚀 Local Installation & Setup

Follow these steps to run the application locally.

### 1. Prerequisites
- **Python 3.8+**
- **Node.js 18+**

### 2. Set Up the Backend
Open a terminal in the project directory:

```bash
# Navigate to the backend directory
cd pathfinding-backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI development server
uvicorn main:app --reload
```

The backend API will run locally at `http://127.0.0.1:8000`.

### 3. Set Up the Frontend
Open a new terminal tab/window in the project directory:

```bash
# Navigate to the frontend directory
cd pathfinding-frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

The React dashboard will run locally at `http://localhost:5173`. Open this URL in your web browser.

---

## 🎮 User Interaction & Flow

1. **Draw Obstacles:** Drag your mouse or tap-and-slide on the grid to paint grey obstacle walls. Click/tap individual cells to paint/erase walls.
2. **Toggle Diagonal Movement:** Check or uncheck the **Diagonals** toggle to switch movement constraints and heuristics.
3. **Run Solver:** Click the cyan **Run A*** button. The app sends the grid data to the backend solver, waits for the response, and then sequentially animates:
   - **Explored States:** Light green animated blocks.
   - **Optimal Path:** Glowing yellow line tracing from Start (Cyan circle) to Goal (Red circle).
4. **Inspect Metrics:** Check the dashboard header for the total path cost, visited grid nodes, and execution latency in milliseconds.
5. **Reset:** Click **Clear** to remove walls, path details, and reset the analytics panel.

---

## 👨‍💻 Author

- **Sachin Singh** - [GitHub](https://github.com/Sachinsingh198)
