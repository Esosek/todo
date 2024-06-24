import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';

export enum Theme {
  LIGHT,
  DARK,
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const defaultValue = {
  theme: Theme.LIGHT,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultValue);

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(Theme.LIGHT);

  useEffect(() => {
    if (theme === Theme.LIGHT) {
      document.body.parentElement?.classList.remove('dark');
    } else {
      document.body.parentElement?.classList.add('dark');
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
