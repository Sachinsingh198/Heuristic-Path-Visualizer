from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Tuple
import heapq
import time  # NEW: Time measure karne ke liye

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GridRequest(BaseModel):
    rows: int
    cols: int
    start: Tuple[int, int]
    end: Tuple[int, int]
    walls: List[Tuple[int, int]]
    allow_diagonal: bool  # NEW: Diagonal toggle read karne ke liye

def heuristic(a: Tuple[int, int], b: Tuple[int, int], allow_diagonal: bool) -> float:
    # 4 Directions ke liye Manhattan, 8 Directions ke liye Diagonal/Euclidean distance
    if not allow_diagonal:
        return abs(a[0] - b[0]) + abs(a[1] - b[1])
    else:
        # Diagonal movement heuristic
        dx = abs(a[0] - b[0])
        dy = abs(a[1] - b[1])
        return (dx + dy) + (1.414 - 2) * min(dx, dy)

@app.post("/solve")
async def solve_path(request: GridRequest):
    start_time = time.perf_counter()  # NEW: Timer Start
    
    rows, cols = request.rows, request.cols
    start, end = request.start, request.end
    walls_set = set(tuple(w) for w in request.walls)

    open_set = []
    heapq.heappush(open_set, (0.0, start))
    
    came_from = {}
    g_score = {start: 0.0}
    f_score = {start: heuristic(start, end, request.allow_diagonal)}
    visited_order = []

    while open_set:
        current_f, current = heapq.heappop(open_set)
        
        if current != start and current != end:
            visited_order.append(current)

        if current == end:
            path = []
            total_cost = g_score[end]
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.reverse()
            if path and path[-1] == end:
                path.pop()
                
            end_time = time.perf_counter()  # NEW: Timer End
            exec_time_ms = round((end_time - start_time) * 1000, 2) # Milliseconds mein convert kiya
            
            return {
                "path": path, 
                "visited": visited_order, 
                "cost": round(total_cost, 1), 
                "time_ms": exec_time_ms
            }

        # DIRECTIONS CONFIGURATION
        # Base 4 directions (Up, Down, Left, Right)
        neighbors = [
            (current[0] - 1, current[1], 1.0),
            (current[0] + 1, current[1], 1.0),
            (current[0], current[1] - 1, 1.0),
            (current[0], current[1] + 1, 1.0)
        ]
        
        # NEW: Agar diagonal allowed hai, toh 4 aur corners add karo with √2 (~1.4) cost
        if request.allow_diagonal:
            neighbors.extend([
                (current[0] - 1, current[1] - 1, 1.414),
                (current[0] - 1, current[1] + 1, 1.414),
                (current[0] + 1, current[1] - 1, 1.414),
                (current[0] + 1, current[1] + 1, 1.414)
            ])

        for r, c, weight in neighbors:
            neighbor = (r, c)
            if 0 <= r < rows and 0 <= c < cols and neighbor not in walls_set:
                tentative_g = g_score[current] + weight
                
                if tentative_g < g_score.get(neighbor, float('inf')):
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g
                    f_score[neighbor] = tentative_g + heuristic(neighbor, end, request.allow_diagonal)
                    
                    if not any(item[1] == neighbor for item in open_set):
                        heapq.heappush(open_set, (f_score[neighbor], neighbor))

    end_time = time.perf_counter()
    return {
        "path": [], 
        "visited": visited_order, 
        "cost": 0, 
        "time_ms": round((end_time - start_time) * 1000, 2),
        "message": "No path found"
    }