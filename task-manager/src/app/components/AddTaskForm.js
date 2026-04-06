'use client';

import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="flex-1 border rounded px-3 py-2 text-sm"
        placeholder="Add a task…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-800"
      >
        Add
      </button>
    </form>
  );
}