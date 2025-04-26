// app/layout.js
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
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Link href="/">Home</Link> |{' '}
          <Link href="/login">Login</Link> |{' '}
          <Link href="/signup">Sign Up</Link> |{' '}
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
