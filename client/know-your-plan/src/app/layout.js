// app/layout.js
import Navbar from './components/navbar';
import TosFooter from './components/tosFooter';
import './globals.css';
import Link from 'next/link';
export const metadata = {
  title: 'My App',
  description: 'A cool app with a persistent navbar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <TosFooter />
      </body>
    </html>
  );
}
