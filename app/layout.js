import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';
import { dbConnect } from '@/service/mongo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "EduConn - World's Best Learnig platform",
  description: 'Explore || Learn || Build || Share',
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang='en'>
      <body className={cn(inter.className)}>
        {children}
        <Toaster
          richColors
          position='top-center'
        />
      </body>
    </html>
  );
}
