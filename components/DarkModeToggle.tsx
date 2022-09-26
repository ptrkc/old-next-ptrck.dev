import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLight = theme === 'light';

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(isLight ? 'dark' : 'light');
  };

  return (
    <label htmlFor="darkCheckbox" className="cursor-pointer flex justify-center items-center w-8 h-8 text-lg rounded-full hover:bg-neutral-600/50 dark:hover:bg-black/50">
      <input
        className="hidden"
        type="checkbox"
        id="darkCheckbox"
        checked={isLight}
        onChange={toggleTheme}
        disabled={!mounted}
      />
      {mounted && isLight ? (
        <FiMoon />
      ) : (
        <FiSun />
      )}
    </label>
  );
};

export default DarkModeToggle;
