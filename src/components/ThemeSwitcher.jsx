import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const ThemeSwitcher = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-800 z-50"
    >
      {isDark ? (
        <SunIcon className="w-6 h-6 text-gray-800 dark:text-white" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-800 dark:text-white" />
      )}
    </button>
  );
};