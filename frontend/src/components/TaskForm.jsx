import { createTask } from "../api";

export default function TaskForm() {
  const submit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    if (!title) return;

    await createTask({ title });
    e.target.reset();
    window.location.reload();
  };

  return (
    <form onSubmit={submit} className="flex gap-2 mb-6">
      <input
        name="title"
        placeholder="Enter task title"
        className="border p-2 flex-1"
      />
      <button className="bg-blue-600 text-white px-4 py-2">Add Task</button>
    </form>
  );
}
