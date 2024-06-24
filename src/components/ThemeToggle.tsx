import { useContext } from 'react';
import ThemeContext, { Theme } from '../context/ThemeContext';

import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';

export default function ThemeToggle() {
  const themeContext = useContext(ThemeContext);

  function handleThemeChange() {
    themeContext.toggleTheme();
  }

  return (
    <button onClick={handleThemeChange}>
      <img
        src={themeContext.theme === Theme.LIGHT ? moonIcon.src : sunIcon.src}
        alt="Moon icon"
      />
    </button>
  );
}
