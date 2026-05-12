import type {Metadata} from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { CookieBanner } from '@/components/CookieBanner';
import { PrivacyModal } from '@/components/PrivacyModal';

const cormorant = Cormorant_Garamond({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin-ext'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'MIÓD | Studio Zdrowia Holistycznego Gdańsk',
  description: 'Studio zdrowia holistycznego w sercu Gdańska. Doświadczeni terapeuci, indywidualne podejście, masaże które naprawdę działają.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var w = console.warn;
                console.warn = function() {
                  var args = Array.prototype.slice.call(arguments).map(function(a) {
                    return (a && typeof a.nodeType === 'number') ? '<' + (a.tagName || 'node').toLowerCase() + (a.id ? ' id="' + a.id + '"' : '') + '>' : a;
                  });
                  w.apply(console, args);
                };
                var e = console.error;
                console.error = function() {
                  var args = Array.prototype.slice.call(arguments).map(function(a) {
                    return (a && typeof a.nodeType === 'number') ? '<' + (a.tagName || 'node').toLowerCase() + (a.id ? ' id="' + a.id + '"' : '') + '>' : a;
                  });
                  e.apply(console, args);
                };
              })();
            `
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#FAF6EE] text-[#2C1810] font-sans antialiased relative selection:bg-[#D4A843] selection:text-white">
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-30 mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
        {children}
        <CookieBanner />
        <PrivacyModal />
      </body>
    </html>
  );
}
