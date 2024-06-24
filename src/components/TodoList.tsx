import { useContext, useEffect, useState } from 'react';
import TodoContext, { TodoItemStatus } from '../context/TodoContext';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  enum Filter {
    ALL = 'All',
    ACTIVE = 'Active',
    COMPLETED = 'Completed',
  }

  const todoContext = useContext(TodoContext);
  const [filter, setFilter] = useState(Filter.ALL);
  let [filteredTodos, setFilteredTodos] = useState(todoContext.items);

  useEffect(() => {
    switch (filter) {
      case Filter.ALL:
        setFilteredTodos(
          todoContext.items.filter(
            (item) => item.status !== TodoItemStatus.DELETED
          )
        );
        break;
      case Filter.ACTIVE:
        setFilteredTodos(
          todoContext.items.filter(
            (item) => item.status === TodoItemStatus.ACTIVE
          )
        );
        break;
      case Filter.COMPLETED:
        setFilteredTodos(
          todoContext.items.filter(
            (item) => item.status === TodoItemStatus.COMPLETED
          )
        );
        break;
      default:
        setFilteredTodos(todoContext.items);
        break;
    }
  }, [filter, todoContext.items]);

  const activeTodosLenght = todoContext.items.filter(
    (item) => item.status === TodoItemStatus.ACTIVE
  ).length;

  function selectFilter(filter: Filter) {
    setFilter(filter);
  }

  function handleClearCompleted() {
    todoContext.clearCompleted();
  }

  return (
    <>
      <ul className="bg-neutral-light-gray-100 mt-6 rounded-t-md">
        {filteredTodos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-y-4 md:grid-cols-[1fr_auto_1fr] text-neutral-light-gray-400 sm:text-base">
        <p className="pl-6 bg-neutral-light-gray-100 py-4 rounded-bl-md">
          {activeTodosLenght} items left
        </p>
        <div className="flex gap-4 bg-neutral-light-gray-100 justify-center px-6 py-4 w-full font-bold order-2 col-span-2 justify-self-center rounded-md md:rounded-none md:order-none md:col-span-1 md:mx-0">
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
        <div className="flex items-center justify-end bg-neutral-light-gray-100 rounded-br-md pr-6">
          <button
            onClick={handleClearCompleted}
            className="text-right hover:text-neutral-light-gray-500"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
}
