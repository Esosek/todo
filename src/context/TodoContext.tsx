import { createContext, useState, type PropsWithChildren } from 'react';

enum TodoItemStatus {
  ACTIVE,
  COMPLETED,
  DELETED,
}

type TodoItem = {
  id: number;
  text: string;
  status: TodoItemStatus;
};

type TodoContextType = {
  items: TodoItem[];
  addItem: (text: string) => void;
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
  clearCompleted: () => void;
};

const defaultValue = {
  items: [
    { id: 0, text: 'Go to Berlin', status: TodoItemStatus.COMPLETED },
    { id: 1, text: 'Eat lunch', status: TodoItemStatus.ACTIVE },
  ],
  addItem: () => {},
  removeItem: () => {},
  toggleItem: () => {},
  clearCompleted: () => {},
};

const TodoContext = createContext<TodoContextType>(defaultValue);

export function TodoContextContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState(defaultValue.items);

  function addItem(todoText: string) {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length,
        text: todoText,
        status: TodoItemStatus.ACTIVE,
      },
    ]);
  }

  function removeItem(id: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function toggleItem(id: number) {
    setItems((prevItems) => {
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status:
              item.status === TodoItemStatus.ACTIVE
                ? TodoItemStatus.COMPLETED
                : TodoItemStatus.ACTIVE,
          };
        }
        return item;
      });
      return [...prevItems];
    });
  }

  function clearCompleted() {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.status === TodoItemStatus.COMPLETED) {
          return { ...item, status: TodoItemStatus.DELETED };
        }
        return item;
      });
    });
  }
  return (
    <TodoContext.Provider
      value={{ items, addItem, removeItem, toggleItem, clearCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
