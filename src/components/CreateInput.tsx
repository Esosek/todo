export default function CreateInput() {
  return (
    <div className="flex items-center gap-6 bg-neutral-light-gray-100 rounded-md overflow-clip pl-6">
      <div className="size-6 border-2 rounded-full border-neutral-light-gray-200"></div>
      <input
        type="text"
        name="new-todo-input"
        id="new-todo-input"
        placeholder="Create a new todo..."
        className="bg-neutral-light-gray-100 py-4 flex-grow focus:outline-none"
      />
    </div>
  );
}
