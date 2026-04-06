'use client';

export default function TaskStats({ total, completed, active, onClearCompleted }) {
  return (
    <div className="mb-4 p-3 bg-gray-100 rounded">
      <p className="text-sm text-gray-600">
        Total: {total} | Active: {active} | Completed: {completed}
      </p>
      {completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
}
