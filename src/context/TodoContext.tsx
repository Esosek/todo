import { createContext, useState, type PropsWithChildren } from 'react';

export enum TodoItemStatus {
  ACTIVE,
  COMPLETED,
  DELETED,
}

export type TodoItem = {
  id: number;
  text: string;
  status: TodoItemStatus;
};

type TodoContextType = {
  items: TodoItem[];
  draggedItem: TodoItem | null;
  addItem: (text: string) => void;
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
  clearCompleted: () => void;
  setDragItem: (item: TodoItem | null) => void;
  handleDragEnter: (item: TodoItem) => void;
};

const defaultValue = {
  items: [
    { id: 0, text: 'Go to Berlin', status: TodoItemStatus.COMPLETED },
    { id: 1, text: 'Eat lunch', status: TodoItemStatus.ACTIVE },
    {
      id: 2,
      text: 'Complete Todo App on Frontend Mentor',
      status: TodoItemStatus.ACTIVE,
    },
  ],
  draggedItem: null,
  addItem: () => {},
  removeItem: () => {},
  toggleItem: () => {},
  clearCompleted: () => {},
  setDragItem: () => {},
  handleDragEnter: () => {},
};

export const TodoContext = createContext<TodoContextType>(defaultValue);

export function TodoContextProvider({ children }: PropsWithChildren<{}>) {
  const [items, setItems] = useState(defaultValue.items);
  const [draggedItem, setDraggedItem] = useState<TodoItem | null>(null);

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
    setItems((prevItems) =>
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
      })
    );
  }

  function clearCompleted() {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.status === TodoItemStatus.COMPLETED) {
          return { ...item, status: TodoItemStatus.DELETED };
        }
        return item;
      })
    );
  }

  function setDragItem(item: TodoItem | null) {
    setDraggedItem(item);
  }

  function handleDragEnter(item: TodoItem) {
    // console.log('Dragging ', draggedItem?.text, 'over', item.text);
    if (draggedItem === null) return;

    setItems((prevItems) => {
      const draggedIndex = prevItems.indexOf(draggedItem);
      const dragOverIndex = prevItems.indexOf(item);
      const updatedItems = [...prevItems];
      [updatedItems[draggedIndex], updatedItems[dragOverIndex]] = [
        item,
        draggedItem,
      ];
      return updatedItems;
    });
  }
  return (
    <TodoContext.Provider
      value={{
        items,
        draggedItem,
        addItem,
        removeItem,
        toggleItem,
        clearCompleted,
        setDragItem,
        handleDragEnter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
