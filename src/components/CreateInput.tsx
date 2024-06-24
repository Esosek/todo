import { useContext, useRef, type FormEvent } from 'react';
import TodoContext from '../context/TodoContext';

export default function CreateInput() {
  const addTodo = useContext(TodoContext).addItem;
  const inputElement = useRef<HTMLInputElement>(null);

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    const userInput = inputElement.current?.value;
    if (userInput && userInput.length > 1) {
      addTodo(userInput);
      inputElement.current.value = '';
    }
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex items-center gap-6 bg-neutral-light-gray-100 rounded-md overflow-clip pl-6"
    >
      <div className="size-6 border-2 rounded-full border-neutral-light-gray-200"></div>
      <input
        type="text"
        name="new-todo-input"
        id="new-todo-input"
        placeholder="Create a new todo..."
        ref={inputElement}
        className="bg-neutral-light-gray-100 py-4 flex-grow focus:outline-none"
      />
    </form>
  );
}
