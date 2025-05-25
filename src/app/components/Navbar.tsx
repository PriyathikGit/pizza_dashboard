'use client';

import Link from 'next/link';
import { useTheme } from '../providers/themeProvider'

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-white dark:bg-gray-800 shadow px-2 py-2 md:px-6 md:py-4 flex justify-between items-center">
            <div className="font-bold text-xl text-gray-900 dark:text-white"><span>🍕</span> PizzaApp</div>
            <div className="flex items-center gap-2 md:gap-4">
                <Link href="/dashboard" className="text-gray-700 dark:text-gray-200 hover:underline">
                    Dashboard
                </Link>
                <Link href="/orders" className="text-gray-700 dark:text-gray-200 hover:underline">
                    Pizza Orders
                </Link>
                <button
                    onClick={toggleTheme}
                    className="border px-2 py-1 rounded text-sm text-gray-700 dark:text-gray-300 border-gray-400 dark:border-gray-500"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
}
