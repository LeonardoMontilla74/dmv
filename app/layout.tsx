import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '300', subsets: ['latin'] });

const URL_BASE = process.env.VERCEL_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'DMV Inspecciones y aseguranzas',
  description: 'Asesor en inspecciones y aseguranzas',
  keywords: ['aseguranzas', 'inspecciones', 'temporales', 'sticker'],
  robots: 'index, follow',
  authors: [{ name: 'Leonardo Montilla' }, { name: 'Leonardo Montilla', url: 'https://leonardomontilla.vercel.app/' }],
  colorScheme: 'dark',
  creator: 'Leonardo Montilla',
  publisher: 'Leonardo Montilla',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(URL_BASE),
  openGraph: {
    type: 'website',
    url: 'https://dmv.vercel.app',
    title: 'DMV - Inspecciones y aseguranzas',
    siteName: 'DMV',
    images: [{
      url: '/public/DMV.png',
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
