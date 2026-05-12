import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Star, Sparkles, HandHeart, Leaf } from 'lucide-react';
import Image from 'next/image';

const BOOKSY_URL = "https://booksy.com/pl-pl/190492_miod-studio-zdrowia-holistycznego_masaz_20383_gdansk";

const services = [
  {
    category: "Masaże klasyczne / relaksacyjne",
    items: [
      { name: "Masaż Klasyczny", desc: "Tradycyjna technika. Rozluźnia mięśnie, poprawia krążenie, redukuje stres.", time: "60 / 90 min", price: "160 / 240 zł" },
      { name: "Masaż Sportowy", desc: "Intensywny, dla osób aktywnych fizycznie. Regeneracja i redukcja bólu mięśniowego.", time: "60 min", price: "160 zł" },
    ]
  },
  {
    category: "Masaże energetyczne",
    items: [
      { name: "Masaż Intuicyjny Łączony", desc: "Połączenie technik dobieranych indywidualnie do potrzeb klienta.", time: "60 / 90 / 120 min", price: "od 300 zł" },
      { name: "Masaż Relaksacyjny", desc: "Hawajski rytuał Lomi-Lomi Nui lub masaż z ciepłą oliwką — głęboki relaks i harmonia.", time: "60 / 90 / 120 min", price: "od 300 zł" },
      { name: "Holistyczny Praca z Energia (TAO)", desc: "Głęboka regeneracja na poziomie fizycznym i energetycznym.", time: "90 / 120 min", price: "od 500 zł" },
      { name: "Masaż w 4 Ręce", desc: "Wyjątkowe doświadczenie — dwóch terapeutów pracuje jednocześnie.", time: "120 min", price: "1000 zł" },
    ]
  },
  {
    category: "Masaże twarzy",
    items: [
      { name: "Kobido", desc: "Japoński masaż liftingujący — poprawa elastyczności, wygładzanie zmarszczek.", time: "60 min", price: "300 zł" },
      { name: "Gua Sha", desc: "Chińska technika kamienną płytką — poprawa krążenia, modelowanie.", time: "60 min", price: "300 zł" },
      { name: "Mioliftingowy", desc: "Wzmacnia mięśnie twarzy, poprawia elastyczność, efekt młodzieńczego wyglądu.", time: "60 min", price: "300 zł" },
      { name: "Transbukalny & Relaksacyjny", desc: "Zaawansowany masaż lub delikatny zabieg szyi i dekoltu.", time: "60 min", price: "300 zł" },
    ]
  }
];

const features = [
  { icon: Sparkles, title: "Indywidualne podejście", desc: "Każdy masaż poprzedza krótka konsultacja. Dopasowujemy technikę do Twoich potrzeb." },
  { icon: Clock, title: "6+ lat doświadczenia", desc: "Nasi terapeuci to specjaliści z wieloletnią praktyką i stałym rozwojem." },
  { icon: Leaf, title: "Ciało i energia", desc: "Łączymy techniki klasyczne z holistycznym spojrzeniem na człowieka." },
  { icon: MapPin, title: "Centrum Gdańska", desc: "Wielkie Młyny 7/2. Łatwy dojazd, kameralny klimat, chwile tylko dla Ciebie." },
];

const testimonials = [
  { text: "Pierwszy masaż w życiu i jestem zachwycona! Anton uważnie wysłuchał wszystkich moich oczekiwań. Wyszłam niesamowicie zrelaksowana.", author: "Zweryfikowany użytkownik", source: "Booksy ⭐⭐⭐⭐⭐" },
  { text: "Pani Agnieszka ma nie tylko świetne dłonie, ale jest cudnym człowiekiem. Polecam i Panią Agnieszkę i całe Miód Studio.", author: "Klientka", source: "Booksy ⭐⭐⭐⭐⭐" },
  { text: "Masaż był dokładnie taki, jakiego potrzebowałam — rozluźnił napięcia, zmniejszył ból i pozwolił naprawdę się zrelaksować.", author: "Klientka", source: "Booksy ⭐⭐⭐⭐⭐" },
];

const therapists = [
  { name: "Anton", role: "Terapeuta Manualny & Energetyczny", desc: "Specjalista z doskonałą intuicją w wyczuwaniu napiętych partii ciała i uwalnianiu blokad energetycznych." },
  { name: "Agnieszka", role: "Terapeutka Holistyczna", desc: "Terapeutka z wyjątkowym, ciepłym podejściem do klienta. Ekspertka w przywracaniu harmonii ciała i umysłu." },
  { name: "Lena", role: "Specjalistka pracy z ciałem", desc: "Wyspecjalizowana w zaawansowanych technikach masażu ciała, przynosząca głęboką ulgę i rozluźnienie." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 lg:py-0 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://picsum.photos/seed/spa-massage/1920/1080" 
              alt="Studio masażu Miód" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
              priority
            />
            {/* Gradient overlay to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-miod-bg via-miod-bg/90 to-transparent"></div>
            <div className="absolute inset-0 bg-miod-bg/30 md:bg-miod-bg/20 backdrop-blur-[2px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
            <FadeIn direction="right" className="max-w-xl z-10">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-miod-text leading-[1.1] mb-6">
                Poczuj głęboki spokój.<br />
                <span className="text-miod-secondary italic">Zadbaj o ciało i umysł.</span>
              </h1>
              <p className="text-lg md:text-xl text-miod-text-light mb-10 font-sans leading-relaxed max-w-md">
                Studio zdrowia holistycznego w sercu Gdańska. Doświadczeni terapeuci, indywidualne podejście, masaże które naprawdę działają.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-8 py-4 bg-miod-primary/90 text-white uppercase tracking-wider text-sm hover:bg-miod-primary transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(212,168,67,0.4)] hover:shadow-[0_0_25px_rgba(212,168,67,0.8)] backdrop-blur-sm border border-miod-primary">
                  Umów wizytę
                </a>
                <a href="#cennik" className="inline-flex justify-center items-center px-8 py-4 bg-white/50 backdrop-blur-md border border-miod-primary text-miod-primary uppercase tracking-wider text-sm hover:bg-white/80 transition-colors duration-300 rounded-full">
                  Poznaj zabiegi
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-miod-text-light/90 font-sans tracking-wide">
                <div className="flex text-miod-primary"><Star size={16} className="fill-current" /></div>
                <span>4.9 / 5 · 194 opinie Google</span>
                <span className="w-1 h-1 rounded-full bg-miod-primary/50"></span>
                <span>6+ lat doświadczenia</span>
              </div>
            </FadeIn>
            
            <div className="hidden lg:block relative h-[60vh] lg:h-[80vh] w-full pointer-events-none">
              {/* Removed the empty box, allowing the beautiful background to be fully visible on the right */}
            </div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section id="o-studio" className="py-24 md:py-32 bg-miod-bg-alt relative">
          <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
            <FadeIn>
              <div className="flex justify-center gap-2 text-miod-primary mb-8">
                <span>✦</span>
                <span>✦</span>
                <span>✦</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-miod-text leading-tight mb-16 text-center">
                Poznaj nasze <span className="italic text-miod-secondary">studio</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} className="relative h-[250px] md:h-[400px] w-full rounded-[32px] overflow-hidden mb-16 shadow-lg shadow-miod-primary/5 group">
              <Image 
                src="https://picsum.photos/seed/spa-interior/1200/800" 
                alt="Wnętrze studia Miód" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-miod-bg/10 backdrop-blur-[1px]"></div>
            </FadeIn>

            <div className="space-y-16 font-sans text-lg text-miod-text-light leading-relaxed">
              <FadeIn delay={0.2} direction="up">
                <h3 className="font-serif text-3xl text-miod-text mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-miod-primary"></span>
                  Nasza Filozofia
                </h3>
                <p className="mb-6">
                  MIÓD to więcej niż tylko przestrzeń. To idea, która narodziła się z pragnienia stworzenia azylu w środku tętniącego życiem miasta. Jesteśmy studiem zdrowia holistycznego, w którym głęboko wierzymy, że ciało i umysł są nierozerwalnie połączone.
                </p>
                <p>
                  Każdy napięty mięsień, każda blokada w ciele ma swoją historię. Dlatego w naszej pracy nie ograniczamy się tylko do technicznego wykonania masażu. Zamiast tego z uwagą słuchamy tego, co mówi Twoje ciało, dostosowując siłę, technikę i rodzaj dotyku do Twoich aktualnych potrzeb — fizycznych, emocjonalnych i energetycznych.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <h3 className="font-serif text-3xl text-miod-text mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-miod-primary"></span>
                  Przestrzeń, która uzdrawia
                </h3>
                <p className="mb-6">
                  Zlokalizowani jesteśmy przy ul. Wielkie Młyny 7/2, w samym centrum Gdańska. Od początku zależało nam, aby wnętrza naszego studia były przedłużeniem naszej holistycznej wizji i wprowadzały w stan relaksu jeszcze przed rozpoczęciem terapii.
                </p>
                <p className="mb-8">
                  Stworzyliśmy otoczenie przesycone ciepłymi, miodowymi barwami, otulającym światłem i zapachem naturalnych olejków eterycznych. Chcemy, abyś przekraczając próg naszego studia, mogła zostawić za drzwiami pośpiech, stres i codzienne obowiązki.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-miod-bg rounded-2xl p-6 border border-miod-subtle">
                    <MapPin className="text-miod-primary mb-3" size={24} />
                    <h4 className="font-serif text-xl text-miod-text mb-2">Lokalizacja</h4>
                    <p className="text-sm">Nasze studio ukryte jest z dala od ulicznego hałasu, stanowiąc spokojną oazę w tkance miejskiej Gdańska.</p>
                  </div>
                  <div className="bg-miod-bg rounded-2xl p-6 border border-miod-subtle">
                    <Sparkles className="text-miod-primary mb-3" size={24} />
                    <h4 className="font-serif text-xl text-miod-text mb-2">Atmosfera</h4>
                    <p className="text-sm">Kameralność, wyciszona muzyka i subtelne zapachy pomagające osiągnąć pełen stan Alpha.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <h3 className="font-serif text-3xl text-miod-text mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-miod-primary"></span>
                  Doświadczenie i Zaangażowanie
                </h3>
                <p className="mb-6">
                  Nasz zespół składa się z certyfikowanych terapeutów manualnych z ponad 6-letnim stażem. Każdy z nas stale się rozwija, fascynuje się nowymi technikami i zgłębia wielowiekową wiedzę o pracy z energią i dotykiem. 
                </p>
                <p>
                  W MIÓD każdy klient jest traktowany wymiarowo. Skupiamy się na Tobie — dając Ci nasz czas, naszą pełną uwagę i umiejętności. Dla nas liczy się Twój realny powrót do równowagi, odnalezienie własnego rytmu, rozluźnienie i pełna regeneracja od wewnątrz na zewnątrz.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* DISTINCTIONS SECTION */}
        <section className="py-20 bg-miod-bg border-b border-miod-subtle">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto pb-8 md:pb-0 snap-x hide-scrollbar">
              {features.map((feature, i) => (
                <FadeIn key={i} delay={i * 0.1} className="min-w-[280px] md:min-w-0 snap-center bg-miod-bg-alt/50 p-8 rounded-[24px] transition-transform duration-500 hover:-translate-y-1 hover:bg-miod-bg-alt">
                  <feature.icon className="w-8 h-8 text-miod-primary mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl font-medium text-miod-text mb-3">{feature.title}</h3>
                  <p className="text-miod-text-light/80 leading-relaxed text-sm">{feature.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="cennik" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl text-miod-text mb-16 text-center md:text-left">Cennik i Zabiegi</h2>
            </FadeIn>
            
            <div className="space-y-20">
              {services.map((category, idx) => (
                <div key={idx} className="bg-miod-bg-alt/40 p-8 md:p-12 rounded-[32px] border border-miod-subtle relative overflow-hidden transition-transform duration-500 hover:shadow-xl hover:shadow-miod-primary/5 hover:-translate-y-1">
                  <div className="absolute -top-12 -right-6 text-miod-primary/5 font-serif text-[240px] leading-none select-none pointer-events-none">
                    0{idx + 1}
                  </div>
                  <FadeIn>
                    <h3 className="font-serif text-3xl md:text-4xl text-miod-text mb-12 relative z-10 flex items-center gap-4">
                      <span className="w-8 h-[1px] bg-miod-primary"></span>
                      {category.category}
                    </h3>
                  </FadeIn>
                  <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
                    {category.items.map((item, i) => (
                      <FadeIn key={i} delay={i * 0.1} className="group">
                        <div className="flex flex-col">
                          <div className="flex items-end justify-between w-full gap-4 mb-3">
                            <h4 className="font-serif text-2xl text-miod-text font-medium group-hover:text-miod-primary transition-colors leading-none">
                              {item.name}
                            </h4>
                            <div className="flex-grow border-b-2 border-dotted border-miod-subtle mb-[4px] opacity-60"></div>
                            <span className="font-serif text-miod-secondary text-xl font-medium whitespace-nowrap leading-none">
                              {item.price}
                            </span>
                          </div>
                          <div className="flex items-start justify-between gap-4">
                            <span className="font-sans text-miod-text-light/80 text-sm pr-4 max-w-[85%]">
                              {item.desc}
                            </span>
                            <span className="font-sans text-miod-text-light/60 text-sm whitespace-nowrap shrink-0 pt-0.5">
                              {item.time}
                            </span>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <FadeIn className="mt-16 text-center">
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-miod-secondary hover:text-miod-primary font-medium tracking-wide uppercase text-sm transition-colors border-b border-current pb-1">
                Zobacz pełny cennik <span className="text-lg leading-none">→</span>
              </a>
            </FadeIn>
          </div>
        </section>

        {/* THERAPISTS SECTION */}
        <section id="terapeuci" className="py-24 bg-miod-bg-alt">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-miod-text mb-4">Poznaj nasz zespół</h2>
                <p className="text-miod-text-light font-sans max-w-2xl mx-auto">Doświadczeni specjaliści, dla których praca z ciałem to pasja i powołanie.</p>
              </div>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-8">
              {therapists.map((therapist, i) => (
                <FadeIn key={i} delay={i * 0.2}>
                  <div className="bg-miod-bg rounded-[24px] overflow-hidden group border border-transparent hover:border-miod-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-miod-primary/5 cursor-default">
                    {/* Placeholder image */}
                    <div className="h-80 bg-miod-subtle relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-miod-bg-alt to-transparent opacity-60"></div>
                    </div>
                    <div className="p-8 text-center relative pointer-events-none">
                       {/* Line accent */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-miod-primary/30"></div>
                      <h3 className="font-serif text-2xl text-miod-text mb-1">{therapist.name}</h3>
                      <p className="text-xs font-sans tracking-widest text-miod-secondary uppercase mb-4">{therapist.role}</p>
                      <p className="text-sm font-sans text-miod-text-light/80 leading-relaxed">{therapist.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="opinie" className="py-24 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl text-miod-text text-center">Co mówią nasi klienci</h2>
            </FadeIn>
          </div>
          
          <div className="relative flex select-none overflow-hidden pb-12 w-full group">
            {/* The infinite scroll container */}
            <div className="flex shrink-0 animate-scroll items-stretch gap-8 px-4 w-max">
              {[...testimonials, ...testimonials, ...testimonials].map((test, i) => (
                <div key={i} className="w-[320px] md:w-[400px] flex flex-col justify-between p-8 md:p-10 bg-miod-bg-alt/80 backdrop-blur-sm rounded-[32px] border border-miod-subtle/50 transition-transform duration-300 hover:scale-[1.02]">
                  <div className="mb-8">
                    <div className="text-miod-primary text-4xl font-serif leading-none mb-4">&quot;</div>
                    <p className="font-serif text-lg leading-relaxed text-miod-text-light italic">{test.text}</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-miod-text mb-1">{test.author}</p>
                    <p className="font-sans text-xs text-miod-text-light/60">{test.source}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient masks for fading edges */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-miod-bg to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-miod-bg to-transparent z-10 pointer-events-none"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <FadeIn delay={0.2}>
              <a href="https://www.google.com/maps/search/MI%C3%93D+studio+zdrowia+holistycznego+Gda%C5%84sk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-miod-subtle">
                <div className="flex text-miod-primary"><Star size={16} className="fill-current" /></div>
                <span className="font-sans text-sm text-miod-text font-medium">4.9 / 5 na podstawie 194 opinii w Google</span>
              </a>
            </FadeIn>
          </div>
        </section>

        {/* BOOKING CTA SECTION */}
        <section className="py-24 bg-miod-primary-dark text-white relative overflow-hidden">
          {/* Subtle bg texture/gradient logic */}
          <div className="absolute inset-0 bg-gradient-to-r from-miod-secondary/20 to-transparent"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Gotowa na prawdziwy odpoczynek?
              </h2>
              <p className="text-lg md:text-xl font-sans text-white/90 mb-10 max-w-2xl mx-auto font-light">
                Zarezerwuj swój masaż online w 60 sekund. Bez czekania, bez telefonu — kiedy chcesz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-miod-bg text-miod-text uppercase tracking-wider text-sm font-medium hover:bg-white transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
                  Zarezerwuj przez Booksy
                </a>
                <a href="tel:+48881500473" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white uppercase tracking-wider text-sm hover:bg-white/10 transition-colors duration-300 rounded-full">
                  Zadzwoń do nas
                </a>
              </div>
              <p className="text-sm font-sans text-white/70 italic">
                Bezpłatna 15-minutowa konsultacja jest wliczona w każdy pierwszy masaż.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="kontakt" className="py-24 bg-miod-bg">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="font-serif text-4xl md:text-5xl text-miod-text mb-12">Odwiedź nas</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="text-miod-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-serif text-xl text-miod-text mb-1">Adres</h3>
                    <p className="font-sans text-miod-text-light/80">ul. Wielkie Młyny 7/2<br />80-849 Gdańsk</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-miod-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-serif text-xl text-miod-text mb-1">Godziny otwarcia</h3>
                    <p className="font-sans text-miod-text-light/80">Poniedziałek – Piątek: 8:30 – 20:00<br />Sobota: 11:00 – 20:00<br />Niedziela: zamknięte</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-miod-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-serif text-xl text-miod-text mb-1">Telefon</h3>
                    <a href="tel:+48881500473" className="font-sans text-miod-text-light/80 hover:text-miod-primary transition-colors">+48 881 500 473</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-miod-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-serif text-xl text-miod-text mb-1">Email</h3>
                    <a href="mailto:moodmiodd@gmail.com" className="font-sans text-miod-text-light/80 hover:text-miod-primary transition-colors">moodmiodd@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="https://www.instagram.com/miod_studio/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-miod-subtle flex items-center justify-center text-miod-text hover:bg-miod-primary hover:text-white hover:border-miod-primary transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/miod.studio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-miod-subtle flex items-center justify-center text-miod-text hover:bg-miod-primary hover:text-white hover:border-miod-primary transition-all duration-300">
                  <Facebook size={20} />
                </a>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="h-[400px] lg:h-full min-h-[500px] w-full bg-miod-bg-alt rounded-[32px] overflow-hidden relative group shadow-lg shadow-miod-primary/5">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=pl&amp;q=Wielkie%20M%C5%82yny%207/2,%2080-849%20Gda%C5%84sk+(MI%C3%93D)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 filter grayscale-[0.4] sepia-[0.3] opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-700 ease-in-out"
              ></iframe>
              <div className="absolute top-6 left-6 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60 flex items-center gap-4 transform transition-transform group-hover:scale-105 duration-500">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-miod-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-miod-primary"></span>
                  </div>
                  <div>
                    <p className="font-serif text-miod-text font-medium leading-none mb-1">Jesteśmy w centrum</p>
                    <p className="font-sans text-xs text-miod-text-light/70">Wielkie Młyny 7/2, Gdańsk</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
