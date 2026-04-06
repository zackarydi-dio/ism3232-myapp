'use client';

export default function TaskStats({ total, completed, active, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
      <span>{total} total · {active} active · {completed} done</span>
      <button
        className="text-red-500 hover:underline disabled:opacity-40"
        onClick={onClearCompleted}
        disabled={completed === 0}
      >
        Clear completed
      </button>
    </div>
  );
}