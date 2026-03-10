import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles
import { SmoothScrolling } from '@/components/SmoothScrolling';
import { TransitionShell } from '@/components/TransitionShell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'GDGOC x IAR Community Hub',
  description: 'A premium developer community platform for builders, researchers, and student founders at the Institute of Advanced Research.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="font-sans bg-[#050505] text-white antialiased selection:bg-[#4285F4]/30" suppressHydrationWarning>
        <SmoothScrolling>
          <TransitionShell>{children}</TransitionShell>
        </SmoothScrolling>
      </body>
    </html>
  );
}
