import { useState } from 'react';
import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';

export default function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(true);

  function handleThemeChange() {
    if (isLightMode) {
      document.body.parentElement?.classList.add('dark');
    } else {
      document.body.parentElement?.classList.remove('dark');
    }
    setIsLightMode((prevTheme) => !prevTheme);
  }
  return (
    <button onClick={handleThemeChange}>
      <img src={isLightMode ? moonIcon.src : sunIcon.src} alt="Moon icon" />
    </button>
  );
}
