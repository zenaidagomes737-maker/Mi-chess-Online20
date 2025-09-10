import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Tornel.com',
  description: 'Plataforma de torneos y partidas de ajedrez online',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 font-sans">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Tornel.com</h1>
          <nav className="space-x-4">
            <a href="/register" className="hover:underline">Registrarse</a>
            <a href="/login" className="hover:underline">Iniciar sesión</a>
            <a href="/tournaments" className="hover:underline">Torneos</a>
            <a href="/random-match" className="hover:underline">1v1 Aleatorio</a>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
