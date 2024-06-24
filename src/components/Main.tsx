import { useContext } from 'react';
import bgDesktopLight from '../assets/images/bg-desktop-light.jpg';
import bgMobileLight from '../assets/images/bg-mobile-light.jpg';
import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg';
import bgMobileDark from '../assets/images/bg-mobile-dark.jpg';

import { TodoContextProvider } from '../context/TodoContext';

import CreateInput from './CreateInput';
import ThemeToggle from './ThemeToggle';
import TodoList from './TodoList';
import ThemeContext, { Theme } from '../context/ThemeContext';

export default function Main() {
  const isMobile = window.innerWidth < 768;
  const isDarkMode = useContext(ThemeContext).theme === Theme.DARK;
  let bgImageSrc = '';

  if (isMobile) {
    bgImageSrc = isDarkMode ? bgMobileDark.src : bgMobileLight.src;
  } else {
    bgImageSrc = isDarkMode ? bgDesktopDark.src : bgDesktopLight.src;
  }
  return (
    <main className="text-sm min-h-lvh text-neutral-light-gray-500 sm:text-lg">
      <img
        src={bgImageSrc}
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
        <TodoContextProvider>
          <CreateInput />
          <TodoList />
        </TodoContextProvider>
        <p className="text-center mt-10 text-neutral-light-gray-400 sm:text-base sm:mt-16">
          Drag and drop to reorder list
        </p>
      </div>
    </main>
  );
}
