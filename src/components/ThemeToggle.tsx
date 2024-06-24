import { useEffect, useState } from 'react';
import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';

export default function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  function handleThemeChange() {
    setIsLightMode((prevTheme) => !prevTheme);
  }

  useEffect(() => {
    if (isLightMode) {
      document.body.parentElement?.classList.remove('dark');
    } else {
      document.body.parentElement?.classList.add('dark');
    }
  }, [isLightMode]);
  return (
    <button onClick={handleThemeChange}>
      <img src={isLightMode ? moonIcon.src : sunIcon.src} alt="Moon icon" />
    </button>
  );
}
