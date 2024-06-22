import bgDesktopLight from '../assets/images/bg-desktop-light.jpg';
import bgMobileLight from '../assets/images/bg-mobile-light.jpg';
import moonIcon from '../assets/images/icon-moon.svg';

import { TodoContextContextProvider } from '../context/TodoContext';

import CreateInput from './CreateInput';
import TodoList from './TodoList';

export default function App() {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="text-lg min-h-lvh bg-neutral-light-gray-200 text-neutral-light-gray-500">
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
          <button>
            <img src={moonIcon.src} alt="Moon icon" />
          </button>
        </div>
        <TodoContextContextProvider>
          <CreateInput />
          <TodoList />
        </TodoContextContextProvider>
      </div>
    </div>
  );
}
