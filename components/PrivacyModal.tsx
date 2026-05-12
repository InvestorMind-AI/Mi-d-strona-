'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#polityka') {
        setIsOpen(true);
        // Remove hash to not mess with scrolling if they close and open again?
        // Or keep it. Let's keep it.
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check on mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const close = () => {
    window.location.hash = ''; // Clear hash
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4 sm:p-6" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close}></div>
      <div className="relative bg-miod-bg w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-8 md:p-12 border border-miod-primary/20">
        <button 
          onClick={close}
          className="absolute top-6 right-6 text-miod-text/60 hover:text-miod-text bg-miod-bg-alt rounded-full p-2 transition-colors"
          aria-label="Zamknij"
        >
          <X size={24} />
        </button>
        
        <h1 className="font-serif text-3xl md:text-4xl text-miod-text mb-8">
          Polityka <span className="italic text-miod-secondary">Prywatności</span> i Plików Cookies
        </h1>
        
        <div className="font-sans text-miod-text-light space-y-6 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-miod-text mb-3">1. Postanowienia ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez użytkowników w związku z korzystaniem z usług MIÓD Studio Zdrowia Holistycznego z siedzibą przy ul. Wielkie Młyny 7/2 w Gdańsku.
            </p>
            <p className="mt-2">
              Administratorem danych osobowych jest MIÓD Studio Zdrowia Holistycznego. W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy wewnętrzne procedury i zalecenia, które mają zapobiec udostępnieniu danych osobom nieupoważnionym.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-miod-text mb-3">2. Zbieranie danych</h2>
            <p>
              Przetwarzamy dane osobowe w celach:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Realizacji usług, w tym dokonywania rezerwacji wizyt przez zewnętrzny system Booksy.</li>
              <li>Kontaktu z klientem (odpowiedzi na zapytania, potwierdzenia wizyt).</li>
              <li>Działań analitycznych i statystycznych dotyczących ruchu na stronie internetowej.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-miod-text mb-3">3. Pliki Cookies (Ciasteczka)</h2>
            <p>
              Nasz serwis internetowy zbiera w sposób automatyczny tylko informacje zawarte w plikach cookies. Pliki (cookies) są plikami tekstowymi, które przechowywane są w urządzeniu końcowym użytkownika serwisu.
            </p>
            <p className="mt-2">Wykorzystujemy pliki cookies do:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Zapewnienia prawidłowego działania strony (ciasteczka niezbędne).</li>
              <li>Dopasowania zawartości strony internetowej do preferencji użytkownika (ciasteczka funkcjonalne).</li>
              <li>Tworzenia statystyk, które pomagają zrozumieć, w jaki sposób użytkownicy korzystają ze strony (ciasteczka analityczne).</li>
            </ul>
            <p className="mt-3">
              Użytkownik ma możliwość podjęcia decyzji dotyczącej ciasteczek w panelu akceptacji przy pierwszej wizycie na stronie. W przypadku całkowitego odrzucenia plików cookie, użytkownik automatycznie opuszcza stronę internetową, ponieważ pewne skrypty i elementy bezpieczeństwa wymagają absolutnie podstawowych plików cookie do poprawnego wczytywania zasobów.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-miod-text mb-3">4. Prawa Użytkownika</h2>
            <p>
              Zgodnie z przepisami RODO, posiadają Państwo prawo do:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania.</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
              <li>Przenoszenia danych.</li>
              <li>Cofnięcia zgody na przetwarzanie danych osobowych w dowolnym momencie (jeśli przetwarzanie odbywa się na podstawie zgody).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-miod-text mb-3">5. Dane kontaktowe</h2>
            <p>
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod adresem e-mail: <a href="mailto:moodmiodd@gmail.com" className="text-miod-primary hover:underline">moodmiodd@gmail.com</a> lub pocztą tradycyjną na adres studia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
