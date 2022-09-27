import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined' || window.localStorage.isDark === undefined) return true;

    return JSON.parse(window.localStorage.isDark);
  });

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    window.localStorage.isDark = !isDark;
  };

  const handleStorage = ({ key, newValue }: StorageEvent) => {
    if (key === 'isDark' && newValue) {
      setIsDark(JSON.parse(newValue));
    }
  };

  useEffect(() => {
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    document.documentElement.classList.value = isDark ? 'dark' : '';
  }, [isDark]);

  return [isDark, toggleDarkMode];
};

export default useDarkMode;
