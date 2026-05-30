'use client';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="inline-flex shrink-0 items-center gap-2 select-none">
      <span
        className={`text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-400'
        }`}
      >
        Dark
      </span>

      <button
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDark}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          isDark ? 'bg-gray-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
            isDark ? 'translate-x-0' : 'translate-x-6'
          }`}
        />
      </button>

      <span
        className={`text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
          !isDark ? 'text-gray-800 dark:text-gray-100' : 'text-gray-500'
        }`}
      >
        Light
      </span>
    </div>
  );
}

// Keep default export for backwards compatibility
export default ThemeToggle;
