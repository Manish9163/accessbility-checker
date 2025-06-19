'use client';

import { Sun, Moon, Settings, Bell, User } from 'lucide-react';
import { useTheme } from './ThemeProvider';

type HeaderProps = {
  setFilters?: (filters: any) => void;
};

const Header: React.FC<HeaderProps> = ({ setFilters }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* ... */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Accessibility Checker
                </h1>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              <button
                className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
              </button>

              {/* Settings */}
              <button
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
                aria-label="Settings"
              >
                <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors group-hover:rotate-90 duration-300" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
                  ) : (
                    <Sun className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </div>
              </button>

              {/* Profile */}
              <button
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
                aria-label="Profile"
              >
                <User className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;