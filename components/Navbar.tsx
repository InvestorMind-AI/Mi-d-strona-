'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const booksyUrl = "https://booksy.com/pl-pl/190492_miod-studio-zdrowia-holistycznego_masaz_20383_gdansk";

  const navLinks = [
    { name: 'Zabiegi', href: '#cennik' },
    { name: 'O Studio', href: '#o-studio' },
    { name: 'Terapeuci', href: '#terapeuci' },
    { name: 'Cennik', href: '#cennik' },
    { name: 'Opinie', href: '#opinie' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-miod-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="font-serif text-2xl tracking-widest text-miod-text font-medium">MIÓD</span>
          <span className="text-miod-primary font-serif text-2xl group-hover:rotate-45 transition-transform duration-500">✦</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm tracking-wide text-miod-text hover:text-miod-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Booksy */}
        <div className="hidden md:block">
          <a
            href={booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm uppercase tracking-wider bg-miod-primary/10 border border-miod-primary text-miod-text hover:bg-miod-primary hover:text-white transition-all duration-300 rounded-full animate-neon-pulse"
          >
            Zarezerwuj wizytę
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-miod-text p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-miod-bg/98 backdrop-blur-xl border-b border-miod-subtle overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-miod-text hover:text-miod-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-6 py-3 mt-4 uppercase tracking-wider bg-miod-primary text-white hover:bg-miod-primary-dark transition-colors rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Zarezerwuj wizytę
          </a>
        </div>
      </div>
    </header>
  );
}
