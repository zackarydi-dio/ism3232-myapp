'use client';

import { useState, useEffect } from 'react';
import TaskList    from './TaskList';
import AddTaskForm from './AddTaskForm';
import TaskStats   from './TaskStats';

export default function TaskBoard() {
  const [tasks,  setTasks]  = useState([]);
  const [filter, setFilter] = useState('all');

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Derived values
  const completed = tasks.filter((t) => t.done).length;
  const active    = tasks.length - completed;
  const visible   =
    filter === 'all'  ? tasks :
    filter === 'done' ? tasks.filter((t) =>  t.done) :
                        tasks.filter((t) => !t.done);

  function handleAdd(title) {
    setTasks([...tasks, { id: crypto.randomUUID(), title, done: false }]);
  }

  function handleToggle(id) {
    setTasks(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  }

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function handleClearDone() {
    setTasks(tasks.filter((t) => !t.done));
  }

  return (
    <div className="max-w-lg">
      <TaskStats
        total={tasks.length}
        completed={completed}
        active={active}
        onClearCompleted={handleClearDone}
      />
      <AddTaskForm onAdd={handleAdd} />
      <div className="flex gap-2 mb-4">
        {['all', 'active', 'done'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded text-sm capitalize ${
              filter === f ? 'bg-green-700 text-white' : 'border'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <TaskList tasks={visible} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}