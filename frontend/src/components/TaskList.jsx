import { useEffect, useState } from "react";
import { fetchTasks } from "../api";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 bg-white">
            {task.title} — <span className="italic">{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
