# AI Pathfinding Visualizer (A* Search Engine) 🚀

[![Python 3.8+](https://img.shields.io/badge/Python-3.8%2B-blue?style=flat-square&logo=python)](https://www.python.org/downloads/)
[![React](https://img.shields.io/badge/React-18%2B-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100%2B-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

An interactive, high-performance full-stack web application designed to visualize classic Artificial Intelligence graph search and state-space optimization algorithms in real-time. This project demonstrates the A* pathfinding algorithm with a sleek, responsive UI and real-time performance analytics.

🔗 **[Live Demo](https://heuristic-path-visualizer.vercel.app/)** | 📖 **[Documentation](#)** | 🐛 **[Report Issues](https://github.com/Sachinsingh198/Heuristic-Path-Visualizer/issues)**

---

## 📋 Table of Contents

- [Features](#features)
- [Project Preview](#-project-preview--ui-design)
- [Tech Stack](#-tech-stack--architecture)
- [How It Works](#-algorithmic-deep-dive-how-it-works)
- [Installation](#-local-installation--setup)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Configuration](#-configuration)
- [Performance Metrics](#-performance-metrics)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## ✨ Features

### Core Pathfinding
- ✅ **A* Search Algorithm** - Optimized pathfinding with heuristic evaluation
- ✅ **Multiple Heuristics** - Manhattan, Euclidean, and Diagonal distance calculations
- ✅ **Flexible Movement** - Toggle between 4-way and 8-way movement patterns
- ✅ **Dynamic Obstacles** - Draw, paint, and interact with maze walls in real-time
- ✅ **Start/End Point Selection** - Click-based placement with visual feedback

### User Interface
- ✅ **Premium Cyber Theme** - Sleek neon dark mode with high contrast
- ✅ **Real-time Visualization** - Animated pathfinding exploration
- ✅ **Analytics Dashboard** - Live metrics and performance monitoring
- ✅ **Responsive Design** - Works on desktop and tablet devices
- ✅ **Interactive Controls** - Speed adjustment, algorithm selection, grid resizing

### Performance & Analytics
- ✅ **Path Cost Calculation** - Total units traveled
- ✅ **Cells Explored Counter** - Number of visited nodes
- ✅ **Engine Latency Display** - Real-time execution time in milliseconds
- ✅ **Memory Efficiency** - Optimized data structures and algorithms

---

## 🌌 Project Preview & UI Design

### Visual Features
- **Premium Cyber Theme:** Designed with a sleek neon dark mode layout for enhanced tracking contrast and better visual appeal during extended usage sessions.
- **Real-time Analytics Dashboard:** Monitors key metrics including:
  - **Path Cost Units** - Total movement cost
  - **Total Explored Cells** - Number of visited nodes
  - **Engine Latency** - Algorithm execution time in milliseconds
  - **Path Length** - Total steps in final path
- **Interactive Mesh Constraints:** Drop, click, or paint dynamic walls directly onto the matrix to simulate diverse maze environments and test algorithm efficiency.

### Color Scheme
```
Primary: Neon Cyan (#00D9FF)
Secondary: Neon Purple (#D946EF)
Background: Deep Dark (#0A0E27)
Accent: Neon Green (#00FF41)
```

---

## 🛠️ Tech Stack & Architecture

The application cleanly bridges traditional AI algorithmic workflows with high-throughput backend services and state-driven client UIs:

### Frontend Stack
| Technology | Purpose | Version |
|---|---|---|
| **React** | UI Framework | 18+ |
| **Vite** | Build Tool & Dev Server | Latest |
| **JavaScript (ES6+)** | Programming Language | ES2020+ |
| **CSS3** | Styling & Animations | Custom Properties |
| **Bun** | JavaScript Runtime | Latest |

### Backend Stack
| Technology | Purpose | Version |
|---|---|---|
| **Python** | Core Language | 3.8+ |
| **FastAPI** | Web Framework | 0.100+ |
| **Uvicorn** | ASGI Server | Latest |
| **heapq** | Priority Queue | Built-in |
| **Pydantic** | Data Validation | Latest |

### Core Libraries
- **heapq** - Efficient priority queue implementation for A* algorithm
- **numpy** (optional) - Matrix operations and calculations
- **corsheaders** - Cross-Origin Resource Sharing support

---

## 🧠 Algorithmic Deep Dive: How It Works

### A* Search Algorithm

The A* algorithm evaluates nodes based on the standard cost formula:

```
f(n) = g(n) + h(n)
```

Where:
- **f(n)** = Total estimated cost
- **g(n)** = Actual cost from start node to current node
- **h(n)** = Heuristic estimated cost from current node to goal

### Algorithm Flowchart

```
1. Initialize open set with start node
2. While open set is not empty:
   a. Select node with lowest f(n) value
   b. If node is goal, reconstruct and return path
   c. Mark node as closed
   d. For each neighbor:
      - Calculate g(n), h(n), and f(n)
      - Update if better path found
      - Add to open set if not visited
3. Return empty if no path found
```

### Movement Modes

#### 4-Way Movement (Orthogonal)
Restricts exploration to cardinal directions: Up, Down, Left, Right
- **Cost per move:** 1 unit
- **Heuristic:** Manhattan Distance
- **Formula:** `h(n) = |x_goal - x_current| + |y_goal - y_current|`
- **Use case:** Grid-based games, urban navigation

#### 8-Way Movement (Octile)
Allows diagonal exploration: Up, Down, Left, Right, and 4 Diagonals
- **Orthogonal cost:** 1 unit
- **Diagonal cost:** √2 ≈ 1.414 units
- **Heuristic:** Euclidean or Chebyshev Distance
- **Formula (Euclidean):** `h(n) = √[(x_goal - x_current)² + (y_goal - y_current)²]`
- **Use case:** Natural movement, open-world navigation

### Heuristic Implementations

| Heuristic | Formula | Best Use | Optimality |
|---|---|---|---|
| **Manhattan** | `\|x1-x2\| + \|y1-y2\|` | 4-way grids | Admissible |
| **Euclidean** | `√[(x1-x2)² + (y1-y2)²]` | 8-way grids | Admissible |
| **Chebyshev** | `max(\|x1-x2\|, \|y1-y2\|)` | Octile grids | Admissible |

---

## 🚀 Local Installation & Setup

### Prerequisites

Ensure your system has the following installed:
- **Python 3.8 or higher** - [Download](https://www.python.org/downloads/)
- **Node.js/Bun** - [Download Bun](https://bun.sh/)
- **Git** - [Download](https://git-scm.com/)
- **A modern web browser** - Chrome, Firefox, Safari, or Edge

### Step 1: Clone the Repository

```bash
git clone https://github.com/Sachinsingh198/Heuristic-Path-Visualizer.git
cd Heuristic-Path-Visualizer
```

### Step 2: Backend Installation (FastAPI)

Open a terminal and run:

```bash
# Navigate to backend directory
cd pathfinding-backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

✅ Backend is running at: `http://127.0.0.1:8000`

**Useful endpoints:**
- `GET /docs` - Interactive API documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation (ReDoc)
- `POST /pathfind` - Main pathfinding endpoint

### Step 3: Frontend Installation (React via Bun)

Open a **new terminal tab/window** and run:

```bash
# Navigate to frontend directory
cd pathfinding-frontend

# Install dependencies using Bun
bun install

# OR use npm if Bun is not installed
npm install

# Start development server
bun run dev
# OR with npm:
npm run dev
```

✅ Frontend is running at: `http://localhost:5173`

### Step 4: Access the Application

Open your web browser and navigate to:
```
http://localhost:5173
```

You should see the AI Pathfinding Visualizer dashboard! 🎉

---

## 📖 Usage

### Basic Workflow

1. **Set Start Point**
   - Click on the grid to place your starting node (Green)
   - Visual indicator confirms placement

2. **Set Goal Point**
   - Click on another grid cell to place your goal node (Red)
   - System prevents same-cell selection

3. **Draw Obstacles**
   - Click and drag on the grid to draw walls/obstacles
   - Click clear button to reset walls
   - Obstacles block pathfinding exploration

4. **Configure Settings**
   - **Movement:** Toggle between 4-way and 8-way movement
   - **Heuristic:** Select Manhattan, Euclidean, or Chebyshev
   - **Speed:** Adjust visualization speed (milliseconds per step)
   - **Grid Size:** Modify grid dimensions

5. **Run Algorithm**
   - Click the "Find Path" or "Start" button
   - Watch the visualization of algorithm exploration in real-time
   - View live metrics on the analytics dashboard

6. **Analyze Results**
   - Green cells show explored nodes
   - Blue line shows final path
   - Metrics display total cost, explored cells, and execution time

### Keyboard Shortcuts

| Key | Action |
|---|---|
| `Space` | Start/Pause pathfinding |
| `R` | Reset grid and clear path |
| `C` | Clear obstacles only |
| `Arrow Keys` | Pan viewport |
| `+/-` | Zoom in/out |

### Tips for Best Results

- Use **4-way movement** for maze-like environments
- Use **8-way movement** to see natural pathfinding
- Try different heuristics to understand their impact
- Create complex mazes to stress-test the algorithm
- Experiment with diagonal vs orthogonal movements

---

## 📁 Project Structure

```
Heuristic-Path-Visualizer/
├── pathfinding-frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Grid.jsx                  # Main grid visualization
│   │   │   ├── Controls.jsx              # Algorithm controls
│   │   │   ├── Dashboard.jsx             # Analytics display
│   │   │   └── ...other components
│   │   ├── pages/
│   │   │   └── Visualizer.jsx            # Main page
│   │   ├── styles/
│   │   │   ├── main.css                  # Global styles
│   │   │   ├── grid.css                  # Grid-specific styles
│   │   │   └── ...component styles
│   │   ├── utils/
│   │   │   ├── algorithms.js             # Client-side helpers
│   │   │   ├── api.js                    # API communication
│   │   │   └── constants.js              # Constants & config
│   │   ├── App.jsx                       # Root component
│   │   └── main.jsx                      # Entry point
│   ├── public/
│   │   └── index.html
│   ├── vite.config.js                    # Vite configuration
│   ├── package.json                      # Dependencies
│   └── README.md                         # Frontend docs
│
├── pathfinding-backend/                  # Python FastAPI backend
│   ├── main.py                           # Application entry point
│   ├── app/
│   │   ├── pathfinding/
│   │   │   ├── astar.py                  # A* algorithm implementation
│   │   │   ├── heuristics.py             # Heuristic functions
│   │   │   └── models.py                 # Data models
│   │   ├── routes/
│   │   │   ├── pathfind.py               # Pathfinding endpoints
│   │   │   └── health.py                 # Health check endpoints
│   │   ├── config.py                     # Configuration
│   │   └── __init__.py
│   ├── tests/
│   │   ├── test_astar.py                 # Algorithm tests
│   │   ├── test_heuristics.py            # Heuristic tests
│   │   └── test_api.py                   # API endpoint tests
│   ├── requirements.txt                  # Python dependencies
│   ├── .env.example                      # Environment variables template
│   └── README.md                         # Backend docs
│
├── docs/                                 # Additional documentation
│   ├── ALGORITHM.md                      # Algorithm deep dive
│   ├── API.md                            # API reference
│   └── DEPLOYMENT.md                     # Deployment guide
│
├── .github/
│   └── workflows/                        # GitHub Actions CI/CD
│
├── .gitignore
├��─ LICENSE
└── README.md                             # This file
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:8000
```

### Endpoints

#### Find Path
Find the optimal path between two points using A* algorithm.

**Request:**
```http
POST /pathfind
Content-Type: application/json

{
  "start": [0, 0],
  "goal": [10, 10],
  "grid": [[0, 0, 1, ...], ...],
  "movement_mode": "8-way",
  "heuristic": "euclidean"
}
```

**Response:**
```json
{
  "path": [[0, 0], [1, 1], [2, 2], ..., [10, 10]],
  "explored_count": 45,
  "path_cost": 14.14,
  "execution_time_ms": 5.23,
  "success": true
}
```

#### Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "healthy",
  "version": "1.0.0"
}
```

### Error Handling

| Status | Error | Solution |
|---|---|---|
| **400** | Invalid input | Check grid dimensions and coordinates |
| **404** | No path found | Verify start/goal positions are reachable |
| **500** | Server error | Check backend logs |

For complete API documentation, visit: `http://localhost:8000/docs`

---

## ⚙️ Configuration

### Frontend Configuration

Edit `pathfinding-frontend/vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
})
```

### Backend Configuration

Edit `pathfinding-backend/.env`:

```env
# Server
HOST=127.0.0.1
PORT=8000
DEBUG=false

# CORS
CORS_ORIGINS=["http://localhost:5173"]

# Performance
MAX_GRID_SIZE=100
DEFAULT_GRID_SIZE=50
```

### Grid Configuration

Adjustable parameters in settings:
- **Grid Width:** 10-200 cells
- **Grid Height:** 10-200 cells
- **Cell Size:** 10-50 pixels
- **Animation Speed:** 10-1000 ms per step

---

## 📊 Performance Metrics

### Benchmarks (on standard laptop)

| Grid Size | Cells | Avg Execution | Memory Usage |
|---|---|---|---|
| 20×20 | 400 | < 1ms | ~50KB |
| 50×50 | 2,500 | 5-10ms | ~200KB |
| 100×100 | 10,000 | 20-50ms | ~800KB |
| 200×200 | 40,000 | 100-200ms | ~3MB |

### Optimization Tips

1. **Backend**
   - Use 4-way movement for faster computation
   - Implement bidirectional A* for large grids
   - Cache heuristic calculations

2. **Frontend**
   - Reduce animation speed for large grids
   - Use WebWorkers for algorithm computation
   - Implement viewport culling for visualization

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 1. Fork the Repository
```bash
git clone https://github.com/YOUR_USERNAME/Heuristic-Path-Visualizer.git
cd Heuristic-Path-Visualizer
git checkout -b feature/your-feature-name
```

### 2. Make Changes
- Follow existing code style
- Add tests for new features
- Update documentation

### 3. Commit and Push
```bash
git add .
git commit -m "feat: describe your changes"
git push origin feature/your-feature-name
```

### 4. Create Pull Request
- Provide clear description of changes
- Reference related issues
- Ensure CI checks pass

### Code Style
- **Python:** Follow PEP 8
- **JavaScript:** Use ESLint configuration
- **CSS:** Use BEM naming convention

### Testing
```bash
# Backend tests
cd pathfinding-backend
pytest

# Frontend tests
cd pathfinding-frontend
npm run test
```

---

## 🐛 Troubleshooting

### Common Issues

#### Backend Won't Start
```bash
# Check Python version
python --version  # Should be 3.8+

# Verify port is free
lsof -i :8000

# Check firewall settings
# Allow port 8000 in firewall
```

#### Frontend Won't Load
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
bun install  # or npm install

# Check if backend is running
curl http://localhost:8000/health
```

#### CORS Errors
**Backend (pathfinding-backend/main.py):**
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

#### Algorithm Not Finding Path
- Verify start and goal points are valid
- Check that obstacles don't block entire map
- Confirm movement mode is appropriate for maze
- Try increasing grid size

#### Performance Issues
- Reduce grid size
- Decrease animation speed
- Disable real-time visualization
- Check browser developer tools for bottlenecks

### Getting Help

- 📖 Check [Issues](https://github.com/Sachinsingh198/Heuristic-Path-Visualizer/issues)
- 📝 Review documentation in `/docs`
- 💬 Join discussions in GitHub
- 🐛 Report bugs with detailed steps to reproduce

---

## 📚 Learning Resources

### Algorithms
- [A* Search Algorithm - Wikipedia](https://en.wikipedia.org/wiki/A*_search_algorithm)
- [Heuristic Search - Stanford CS](https://cs.stanford.edu/)
- [Pathfinding Tutorials - Red Blob Games](https://www.redblobgames.com/pathfinding/)

### Technologies
- [FastAPI Official Docs](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Bun Runtime](https://bun.sh/)

### Related Projects
- [PathFinding.js](https://github.com/qiao/PathFinding.js)
- [A-Star-Visualizer](https://github.com/sgtkunc/A-Star-Visualizer)
- [Pathfinding Algorithm Visualizer](https://clementmihailescu.github.io/Pathfinding-Visualizer/)

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### You are free to:
- ✅ Use for personal and commercial projects
- ✅ Modify and distribute
- ✅ Use privately

### With the condition of:
- 📝 Include license and copyright notice

---

## 👨‍💻 Author & Contributors

**Created by:** [Sachinsingh198](https://github.com/Sachinsingh198)

### Contributors
<!-- Add contributors here -->
- Thanks to everyone who has contributed!

---

## 🎯 Roadmap

### Phase 1 (Current) ✅
- [x] A* algorithm implementation
- [x] Basic UI and visualization
- [x] 4-way and 8-way movement
- [x] Real-time metrics

### Phase 2 (Planned) 🚧
- [ ] Additional algorithms (Dijkstra, BFS, DFS, Bidirectional)
- [ ] Diagonal obstacle painting
- [ ] Grid preset templates (maze, open field, urban)
- [ ] Path smoothing algorithms
- [ ] Mobile responsive design improvements

### Phase 3 (Future) 💡
- [ ] Algorithm comparison view
- [ ] 3D visualization mode
- [ ] Custom heuristic function support
- [ ] Path export (PNG, SVG, JSON)
- [ ] Collaborative pathfinding
- [ ] Mobile app version

---

## 📞 Support & Contact

- 🌐 **GitHub:** [Sachinsingh198](https://github.com/Sachinsingh198)
- 💌 **Issues:** [Report a Bug](https://github.com/Sachinsingh198/Heuristic-Path-Visualizer/issues)
- 📧 **Email:** [Contact via GitHub]

---

## ⭐ If you found this helpful, please star the repository!

```
    ⭐⭐⭐⭐⭐
  Star us on GitHub!
```

---

**Last Updated:** July 2024 | **Version:** 1.0.0
