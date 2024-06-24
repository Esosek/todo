import bgDesktopLight from '../assets/images/bg-desktop-light.jpg';
import bgMobileLight from '../assets/images/bg-mobile-light.jpg';

import { TodoContextContextProvider } from '../context/TodoContext';

import CreateInput from './CreateInput';
import ThemeToggle from './ThemeToggle';
import TodoList from './TodoList';

export default function App() {
  const isMobile = window.innerWidth < 768;

  return (
    <main className="text-lg min-h-lvh text-neutral-light-gray-500">
      <img
        src={isMobile ? bgMobileLight.src : bgDesktopLight.src}
        alt="Background image of mountains"
        className="fixed top-0 z-0"
      />
      <div className="relative z-10 mx-auto max-w-xl py-20">
        <div className="flex justify-between items-center pb-10">
          <h1 className="text-neutral-light-gray-100 text-5xl tracking-[0.25em]">
            TODO
          </h1>
          <ThemeToggle />
        </div>
        <TodoContextContextProvider>
          <CreateInput />
          <TodoList />
        </TodoContextContextProvider>
        <p className="text-center text-base mt-16 text-neutral-light-gray-400">
          Drag and drop to reorder list
        </p>
      </div>
    </main>
  );
}
