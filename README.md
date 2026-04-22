Task Management Dashboard
    A responsive task management application built with React and TypeScript. This dashboard allows users to efficiently organize their daily tasks with full CRUD functionality, state persistence, and status tracking.

Features :-
- Task Management: Full Create, Read, Update, and Delete (CRUD) operations.
- Persistent Storage: Uses localStorage to ensure your tasks remain available even on page refresh
- Dynamic Summary: A real-time overview at the top showing counts for Pending, In Progress, and Completed tasks.
- Filtering & Sorting: Filter tasks by their current status or sort them chronologically by due date.
- Responsive Design: Fully functional on mobile, tablet, and desktop views.

Tech Stack :-
- Frontend: React 18 (Hooks & Context API & React-Compiler that automatically optimizes React application by handling memoization)
- Language: TypeScript
- Styling: tailwindcss
- Icons: Lucide React

Prerequisites :-
Please ensure you have the following installed:
 1. Node.js (v16.0.0 or higher)
 2. npm or yarn

Installation & Setup :-
- Clone the repository: git clone git@github.com:jha94/TaskManager.git
- Navigate to the project directory: cd TaskManager
- Install dependencies: npm install
- Start the development server: npm run dev

Project Structure :-
    src/
    ├── context/       # TaskContext for state management
    ├── components/    # Reusable UI (TaskCard, TaskForm)
    ├── pages/         # View components (Overview, Dashboard)
    ├── utils/         # Helper functions (sorting, formatting)