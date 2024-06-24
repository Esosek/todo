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
    <div className="bg-neutral-light-gray-100 mt-6 rounded-md shadow-lg">
      <ul>
        {filteredTodos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
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
    </div>
  );
}
