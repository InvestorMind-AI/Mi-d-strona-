import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

const BOOKSY_URL = "https://booksy.com/pl-pl/190492_miod-studio-zdrowia-holistycznego_masaz_20383_gdansk";

export function Footer() {
  return (
    <footer className="bg-miod-text text-miod-bg py-16 border-t border-miod-secondary/20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-1">
          <span className="font-serif text-2xl tracking-widest font-medium">MIÓD</span>
          <span className="text-miod-primary font-serif text-2xl">✦</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link href="#cennik" className="text-sm font-sans tracking-wide text-miod-bg/70 hover:text-miod-primary transition-colors">Zabiegi</Link>
          <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-sans tracking-wide text-miod-bg/70 hover:text-miod-primary transition-colors">Cennik</a>
          <Link href="#kontakt" className="text-sm font-sans tracking-wide text-miod-bg/70 hover:text-miod-primary transition-colors">Kontakt</Link>
          <Link href="#polityka" className="text-sm font-sans tracking-wide text-miod-bg/70 hover:text-miod-primary transition-colors" scroll={false}>Polityka prywatności</Link>
        </div>

        <div className="flex gap-6 items-center">
            <a href="https://www.instagram.com/miod_studio/" target="_blank" rel="noopener noreferrer" className="text-miod-bg/70 hover:text-miod-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/miod.studio" target="_blank" rel="noopener noreferrer" className="text-miod-bg/70 hover:text-miod-primary transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
        </div>
        
        <div className="text-sm font-sans text-miod-bg/50">
          © 2026 MIÓD Studio Zdrowia Holistycznego · Gdańsk
        </div>
      </div>
    </footer>
  );
}
