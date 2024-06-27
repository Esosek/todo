import { useContext, type DragEvent } from 'react';

import iconCheck from '../assets/images/icon-check.svg';
import iconCross from '../assets/images/icon-cross.svg';

import TodoContext, {
  TodoItemStatus,
  type TodoItem,
} from '../context/TodoContext';

type TodoListItemProps = {
  todo: TodoItem;
};

export default function TodoListItem({ todo }: TodoListItemProps) {
  const { toggleItem, removeItem, setDragItem, handleDragEnter } =
    useContext(TodoContext);
  const isCompleted = todo.status === TodoItemStatus.COMPLETED;

  const handleToggle = () => toggleItem(todo.id);
  const handleDelete = () => removeItem(todo.id);
  const handleOnDragStart = () => setDragItem(todo);
  const handleOnDragEnd = () => setDragItem(null);

  function handleOnDragEnter(e: DragEvent<HTMLLIElement>) {
    e.preventDefault();
    handleDragEnter(todo);
  }

  return (
    <li
      draggable
      onDragStart={handleOnDragStart}
      onDragEnd={handleOnDragEnd}
      onDragEnter={handleOnDragEnter}
      onDragOver={(e: DragEvent<HTMLLIElement>) => e.preventDefault()}
      className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 px-4 border-b-[1px] border-neutral-light-gray-200 dark:border-neutral-dark-gray-600 sm:gap-6 sm:px-6 hover:cursor-pointer"
    >
      <input
        type="checkbox"
        name={`todo-${todo.id}`}
        id={`todo-${todo.id}`}
        className="sr-only"
        checked={isCompleted}
        readOnly
      />
      <button
        onClick={handleToggle}
        className={`size-6 rounded-full ${
          isCompleted
            ? 'bg-gradient-to-br'
            : 'bg-neutral-light-gray-200 dark:bg-neutral-dark-gray-600 hover:bg-gradient-to-br'
        } from-primary-blue-gradient-start to-primary-blue-gradient-end`}
      >
        <div
          className={`${
            isCompleted
              ? 'bg-transparent'
              : 'bg-neutral-light-gray-100 dark:bg-neutral-dark-gray-800'
          } flex items-center justify-center mx-auto rounded-full w-5 h-5`}
        >
          <img
            src={iconCheck.src}
            alt="Check icon"
            className={isCompleted ? '' : 'hidden'}
          />
        </div>
      </button>
      <p
        className={`${
          isCompleted
            ? 'line-through text-neutral-light-gray-300 dark:text-neutral-dark-gray-600'
            : 'dark:text-neutral-dark-gray-300'
        } hover:cursor-pointer`}
      >
        {todo.text}
      </p>
      <button
        onClick={handleDelete}
        className="size-4 sm:hidden group-hover:block sm:size-auto"
      >
        <img src={iconCross.src} alt="Cross icon" />
      </button>
    </li>
  );
}
