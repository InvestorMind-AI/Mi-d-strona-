'use client';

import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only check after mount to avoid hydration mismatch
    const timer = setTimeout(() => {
      const cookiePreference = localStorage.getItem('miod_cookie_preference');
      if (!cookiePreference) {
        setIsVisible(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('miod_cookie_preference', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('miod_cookie_preference', 'necessary');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('miod_cookie_preference', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-miod-bg border border-miod-primary/30 p-6 md:p-8 rounded-[24px] shadow-2xl shadow-black/10 pointer-events-auto">
        <h3 className="font-serif text-2xl text-miod-text mb-3">Szanujemy Twoją prywatność</h3>
        <p className="font-sans text-sm text-miod-text-light/80 mb-6 leading-relaxed">
          Używamy plików cookie (&quot;ciasteczek&quot;) do działania, personalizacji i analizy naszej strony. Możesz zaakceptować wszystkie, tylko te niezbędne do prawidłowego funkcjonowania lub odrzucić je w całości. Dowiedz się więcej w naszej <a href="#polityka" className="text-miod-primary font-medium hover:underline">Polityce Prywatności</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-end items-center">
          <button 
            onClick={handleRejectAll}
            className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider text-miod-text/60 hover:text-miod-text transition-colors rounded-full"
          >
            Odrzuć
          </button>
          <button 
            onClick={handleAcceptNecessary}
            className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider bg-transparent border border-miod-text text-miod-text hover:bg-miod-bg-alt transition-colors rounded-full"
          >
            Tylko niezbędne
          </button>
          <button 
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider bg-miod-primary text-white hover:bg-miod-primary-dark transition-colors rounded-full shadow-md shadow-miod-primary/20"
          >
            Akceptuj
          </button>
        </div>
      </div>
    </div>
  );
}
