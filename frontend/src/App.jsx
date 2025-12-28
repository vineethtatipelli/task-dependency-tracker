import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import DependencyGraph from "./components/DependencyGraph";

export default function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Task Dependency Tracker</h1>

      <TaskForm />
      <TaskList />
      <DependencyGraph />
    </div>
  );
}
