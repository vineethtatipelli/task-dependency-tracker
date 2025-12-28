# Task Dependency Tracker

A full-stack task dependency tracking application built using Django REST Framework for the backend and React (Vite) with Tailwind CSS for the frontend. The application allows users to create tasks, add dependencies between tasks, and ensures that circular dependencies are not allowed so that task execution order always remains valid.

Tech Stack  
Backend: Python, Django, Django REST Framework, SQLite  
Frontend: React, Vite, Tailwind CSS  

Backend Setup Instructions  
Navigate to the backend directory using `cd backend`. Create and activate a virtual environment using `python -m venv venv` followed by `venv\Scripts\activate` on Windows. Install the required dependencies using `pip install -r requirements.txt`. Apply database migrations using `python manage.py makemigrations` and `python manage.py migrate`. Start the backend server using `python manage.py runserver`. The backend will run at `http://127.0.0.1:8000`.

Frontend Setup Instructions  
Navigate to the frontend directory using `cd frontend`. Install dependencies using `npm install`. Start the development server using `npm run dev`. The frontend will run at `http://localhost:5173`.

API Endpoints  
GET `/api/tasks/` is used to fetch all tasks.  
POST `/api/tasks/` is used to create a new task with request body `{ "title": "Sample Task" }`.  
POST `/api/tasks/{task_id}/add_dependency/` is used to add a dependency to a task with request body `{ "depends_on_id": 2 }`.

Circular Dependency Detection  
A circular dependency occurs when a task directly or indirectly depends on itself, for example A → B → C → A. Tasks and dependencies are modeled as a directed graph where tasks are nodes and dependencies are edges. Before adding a dependency from task A to task B, a Depth First Search (DFS) is performed starting from task B. If task A is encountered during the traversal, a cycle exists and the dependency is rejected.

Algorithm (DFS Concept)  
function hasCycle(current, target):  
    if current == target:  
        return true  
    for each dependency in current.dependencies:  
        if hasCycle(dependency, target):  
            return true  
    return false  

Time Complexity  
Let N be the number of tasks and E be the number of dependencies. The time complexity of the DFS-based cycle detection algorithm is O(N + E) and the space complexity is O(N) due to the recursion stack or visited tracking. This approach efficiently detects circular dependencies within the task dependency graph.

Author  
Vineeth Tatipelli, Computer Science Engineering Student
