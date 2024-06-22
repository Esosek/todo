import { useContext } from 'react';
import TodoContext, { TodoItemStatus } from '../context/TodoContext';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  const todoContext = useContext(TodoContext);

  const activeTodosLenght = todoContext.items.filter(
    (item) => item.status === TodoItemStatus.ACTIVE
  ).length;

  return (
    <div className="bg-neutral-light-gray-100 mt-6 rounded-md">
      <ul>
        {todoContext.items.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <div className="grid grid-cols-3 py-3 px-6 text-base text-neutral-light-gray-400">
        <p>{activeTodosLenght} items left</p>
        <div className="flex gap-4 font-bold">
          <button className="text-neutral-light-gray-400 hover:text-neutral-light-gray-500">
            All
          </button>
          <button className="text-neutral-light-gray-400 hover:text-neutral-light-gray-500">
            Active
          </button>
          <button className="text-neutral-light-gray-400 hover:text-neutral-light-gray-500">
            Completed
          </button>
        </div>
        <button className="text-right hover:text-neutral-light-gray-500">
          Clear Completed
        </button>
      </div>
    </div>
  );
}
