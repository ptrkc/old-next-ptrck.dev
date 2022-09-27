import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import useDarkMode from 'hooks/useDarkMode';
import cn from 'utils/classnames';

const DarkModeToggle = () => {
  const [isDark, toggleDarkMode] = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <label
      htmlFor="darkCheckbox"
      className={cn(
        'cursor-pointer flex justify-center items-center w-8 h-8 text-lg rounded-full hover:bg-neutral-600/50 dark:hover:bg-black/50',
        mounted ? 'opacity-100' : 'opacity-0',
      )}
    >
      <input
        className="hidden"
        type="checkbox"
        id="darkCheckbox"
        checked={isDark}
        onChange={toggleDarkMode}
        disabled={!mounted}
      />
      {!mounted || isDark ? (
        <FiSun />
      ) : (
        <FiMoon />
      )}
    </label>
  );
};

export default DarkModeToggle;
