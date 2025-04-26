// app/layout.js
import Navbar from './components/navbar';
import TosFooter from './components/tosFooter';
import './globals.css';
import Link from 'next/link';
import { AuthProvider } from '@/app/context/AuthContext';

export const metadata = {
  title: 'My App',
  description: 'A cool app with a persistent navbar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
        <TosFooter />
      </body>
    </html>
  );
}
