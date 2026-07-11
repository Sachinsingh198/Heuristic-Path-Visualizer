import React, { useState, useEffect } from "react";
import "./App.css";

// DEFAULT DESKTOP GRID SIZE
const DESKTOP_ROWS = 20;
const DESKTOP_COLS = 40;
const DESKTOP_START = [4, 4];
const DESKTOP_END = [15, 35];

// MOBILE GRID SIZE PRESETS
const MOBILE_ROWS = 15;
const MOBILE_COLS = 18;
const MOBILE_START = [2, 2];
const MOBILE_END = [12, 15];

function App() {
    // Responsive Dimensions Tracking States
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const rows = isMobile ? MOBILE_ROWS : DESKTOP_ROWS;
    const cols = isMobile ? MOBILE_COLS : DESKTOP_COLS;
    const start = isMobile ? MOBILE_START : DESKTOP_START;
    const end = isMobile ? MOBILE_END : DESKTOP_END;

    const [walls, setWalls] = useState([]);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [visited, setVisited] = useState([]);
    const [path, setPath] = useState([]);

    const [pathCost, setPathCost] = useState(0);
    const [executionTime, setExecutionTime] = useState(0);
    const [allowDiagonal, setAllowDiagonal] = useState(false);

    // Dynamic screen resize detector hook
    useEffect(() => {
        const handleResize = () => {
            const mobileCheck = window.innerWidth < 768;
            setIsMobile(mobileCheck);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Reset grid when switching between mobile/desktop views to prevent broken coordinates
    useEffect(() => {
        clearGrid();
    }, [isMobile]);

    const runVisualizer = async () => {
        setVisited([]);
        setPath([]);
        setPathCost(0);
        setExecutionTime(0);

        try {
            const response = await fetch('http://127.0.0.1:8000/solve', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    rows: rows,
                    cols: cols,
                    start: start,
                    end: end,
                    walls: walls,
                    allow_diagonal: allowDiagonal,
                }),
            });

            const data = await response.json();

            if (data.visited) {
                data.visited.forEach((cell, index) => {
                    setTimeout(() => {
                        setVisited(prev => [...prev, cell]);
                    }, index * 12);
                });

                setTimeout(() => {
                    setExecutionTime(data.time_ms);
                    if (data.path) {
                        data.path.forEach((cell, index) => {
                            setTimeout(() => {
                                setPathCost(data.cost);
                                setPath(prev => [...prev, cell]);
                            }, index * 25);
                        });
                    }
                }, data.visited.length * 12);
            }
        } catch (error) {
            console.error("Backend connection error: ", error);
            alert("Your Backend Connection is Offline!");
        }
    };

    const handleCellAction = (r, c) => {
        if ((r === start[0] && c === start[1]) || (r === end[0] && c === end[1])) return;
        const isWall = walls.some(w => w[0] === r && w[1] === c);
        if (isWall) {
            setWalls(walls.filter(w => !(w[0] === r && w[1] === c)));
        } else {
            setWalls([...walls, [r, c]]);
        }
    };

    const handleMouseEnter = (r, c) => {
        if (!isMouseDown) return;
        if ((r === start[0] && c === start[1]) || (r === end[0] && c === end[1])) return;
        if (!walls.some(w => w[0] === r && w[1] === c)) {
            setWalls([...walls, [r, c]]);
        }
    };

    const clearGrid = () => {
        setWalls([]);
        setPath([]);
        setVisited([]);
        setPathCost(0);
        setExecutionTime(0);
    };

    return (
        <div className="app-container"
             onMouseDown={() => setIsMouseDown(true)}
             onMouseUp={() => setIsMouseDown(false)}
             onTouchStart={() => setIsMouseDown(true)}
             onTouchEnd={() => setIsMouseDown(false)}
        >
            <h1 className="title">AI Pathfinding <span className="badge">A*</span></h1>

            <div className="controls">
                <button onClick={runVisualizer} className="btn btn-run">Run A*</button>
                <button onClick={clearGrid} className="btn btn-clear">Clear</button>

                <label className="toggle-container">
                    <input
                        type="checkbox"
                        checked={allowDiagonal}
                        onChange={(e) => setAllowDiagonal(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                    <span className="toggle-label">Diagonals</span>
                </label>
            </div>

            <div className="metrics-container">
                <div className="metric-box">
                    <span className="metric-label">Cost:</span>
                    <span className="metric-value">{pathCost > 0 ? `${pathCost}` : "0"}</span>
                </div>
                <div className="metric-box">
                    <span className="metric-label">Explored:</span>
                    <span className="metric-value">{visited.length > 0 ? `${visited.length}` : "0"}</span>
                </div>
                <div className="metric-box">
                    <span className="metric-label">Time:</span>
                    <span className="metric-value">{executionTime > 0 ? `${executionTime}ms` : "0ms"}</span>
                </div>
            </div>

            <div className="grid-container">
                {Array.from({ length: rows }).map((_, r) => (
                    <div key={r} className="grid-row">
                        {Array.from({ length: cols }).map((_, c) => {
                            let cellClass = "cell";
                            if (r === start[0] && c === start[1]) cellClass += " cell-start";
                            else if (r === end[0] && c === end[1]) cellClass += " cell-end";
                            else if (walls.some(w => w[0] === r && w[1] === c)) cellClass += " cell-wall";
                            else if (path.some(p => p[0] === r && p[1] === c)) cellClass += " cell-path";
                            else if (visited.some(v => v[0] === r && v[1] === c)) cellClass += " cell-visited";

                            return (
                                <div
                                    key={c}
                                    className={cellClass}
                                    onMouseDown={() => handleCellAction(r, c)}
                                    onMouseEnter={() => handleMouseEnter(r, c)}
                                    onTouchStart={() => handleCellAction(r, c)} // Better touch layout response
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;