import { useTask } from "./context/TaskContext";
import Overview from "./pages/Overview";
import CreateTaskModal from "./pages/CreateTaskModal";
import TaskDashboard from "./pages/TaskDashboard";

export default function App() {
  const { tasks } = useTask();
  return (
    <div className="min-h-screen font-sans">
      {tasks.length === 0 ? <Overview /> : <TaskDashboard />}
      <CreateTaskModal />
    </div>
  );
}
