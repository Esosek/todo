import { ThemeContextProvider } from '../context/ThemeContext';
import Main from './Main';

export default function App() {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
}
