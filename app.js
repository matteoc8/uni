const { useState } = React;

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("Maths");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, category, done: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Oxford Prep Planner
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="New task…"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Maths</option>
          <option>Computer Science</option>
          <option>General</option>
          <option>Organ</option>
        </select>

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task, i) => (
          <li
            key={i}
            className="flex justify-between items-center p-3 border rounded-lg"
          >
            <div>
              <span
                className={
                  "font-medium " + (task.done ? "line-through text-gray-500" : "")
                }
              >
                {task.text}
              </span>
              <div className="text-sm text-gray-500">{task.category}</div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => toggleTask(i)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {task.done ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteTask(i)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
