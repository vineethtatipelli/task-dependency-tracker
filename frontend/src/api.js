const BASE_URL = "http://127.0.0.1:8000/api/tasks/";

export const fetchTasks = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createTask = async (task) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
};
