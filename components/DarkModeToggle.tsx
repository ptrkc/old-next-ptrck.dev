import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label htmlFor="darkCheckbox">
      <input
        type="checkbox"
        id="darkCheckbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        disabled={!mounted}
      />
      Dark Mode
    </label>
  );
};

export default DarkModeToggle;
