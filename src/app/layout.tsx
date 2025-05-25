// app/layout.tsx
import './globals.css';
import { ThemeProvider } from './providers/themeProvider';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Pizza Dashboard',
  description: 'OAuth + Pizza Orders',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <ThemeProvider>
          <Navbar />
          <main className="p-4 max-w-6xl mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
