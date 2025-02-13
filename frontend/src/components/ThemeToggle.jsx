import React, { useEffect, useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved user preference
    const userTheme = localStorage.getItem('theme');
    if (userTheme === 'dark' || (!userTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleTheme} className=" rounded">
      {isDark ? <MdDarkMode className="text-[40px]"/> : <MdOutlineLightMode className="text-[40px]" />}
    </button>
  );
};

export default ThemeToggle;
