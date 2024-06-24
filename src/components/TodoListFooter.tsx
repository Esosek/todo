type TodoListFooterProps = {};

export default function TodoListFooter(props: TodoListFooterProps) {
  return (
    <div className="grid grid-cols-3 py-3 px-6 text-neutral-light-gray-400 sm:text-base">
      <p>{activeTodosLenght} items left</p>
      <div className="flex gap-4 font-bold">
        {Object.values(Filter).map((f) => (
          <button
            key={f}
            onClick={() => selectFilter(f)}
            className={
              f === filter
                ? 'text-primary-blue-500'
                : 'text-neutral-light-gray-400 hover:text-neutral-light-gray-500'
            }
          >
            {f}
          </button>
        ))}
      </div>
      <button
        onClick={handleClearCompleted}
        className="text-right hover:text-neutral-light-gray-500"
      >
        Clear Completed
      </button>
    </div>
  );
}
