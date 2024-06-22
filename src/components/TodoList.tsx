import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  const todoContext = useContext(TodoContext);
  return (
    <ul className="bg-neutral-light-gray-100 mt-6 rounded-md">
      {todoContext.items.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
