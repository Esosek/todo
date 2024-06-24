import bgDesktopLight from '../assets/images/bg-desktop-light.jpg';
import bgMobileLight from '../assets/images/bg-mobile-light.jpg';

import { TodoContextContextProvider } from '../context/TodoContext';

import CreateInput from './CreateInput';
import ThemeToggle from './ThemeToggle';
import TodoList from './TodoList';

export default function App() {
  const isMobile = window.innerWidth < 768;

  return (
    <main className="text-sm min-h-lvh text-neutral-light-gray-500 sm:text-lg">
      <img
        src={isMobile ? bgMobileLight.src : bgDesktopLight.src}
        alt="Background image of mountains"
        className="fixed top-0 z-0"
      />
      <div className="relative z-10 mx-auto max-w-xl px-6 py-10 sm:py-20">
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <h1 className="text-neutral-light-gray-100 text-3xl tracking-[0.25em] sm:text-5xl">
            TODO
          </h1>
          <ThemeToggle />
        </div>
        <TodoContextContextProvider>
          <CreateInput />
          <TodoList />
        </TodoContextContextProvider>
        <p className="text-center mt-10 text-neutral-light-gray-400 sm:text-base sm:mt-16">
          Drag and drop to reorder list
        </p>
      </div>
    </main>
  );
}
