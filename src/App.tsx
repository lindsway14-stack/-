import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Info, 
  MapPin, 
  Clock, 
  Ticket, 
  ChevronRight, 
  ArrowRight,
  BookOpen,
  Sparkles,
  Search,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#F5F5F0]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8B4513] rounded-sm flex items-center justify-center text-white text-xs font-bold">π</div>
          <span className="uppercase tracking-widest text-sm font-bold">Математики Империи</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-xs font-bold uppercase tracking-widest hover:text-[#8B4513] transition-colors">Главная</Link>
          <Link to="/exhibits" className="text-xs font-bold uppercase tracking-widest hover:text-[#8B4513] transition-colors">Ученые</Link>
          <Link to="/visit" className="text-xs font-bold uppercase tracking-widest hover:text-[#8B4513] transition-colors">Наследие</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full w-full bg-[#F5F5F0] border-b border-black/5 p-8 flex flex-col gap-6 md:hidden overflow-hidden"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-serif">Главная</Link>
            <Link to="/exhibits" onClick={() => setIsOpen(false)} className="text-xl font-serif">Экспонаты</Link>
            <Link to="/visit" onClick={() => setIsOpen(false)} className="text-xl font-serif">Посетителям</Link>
            <Link to="/visit" onClick={() => setIsOpen(false)} className="bg-[#5A5A40] text-white px-6 py-4 rounded-xl text-center font-bold">Купить билет</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#2C2C2C] text-[#F5F5F0] py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="font-serif text-3xl mb-6">Музей Математики</div>
        <p className="opacity-60 max-w-sm mb-8 leading-relaxed">
          Мы открываем красоту и гармонию чисел через интерактивные экспонаты и увлекательные истории. Математика — это искусство мыслить.
        </p>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><Instagram size={18} /></div>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><Facebook size={18} /></div>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><Twitter size={18} /></div>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest opacity-40">Навигация</h4>
        <ul className="space-y-4 text-sm">
          <li><Link to="/" className="hover:underline">Главная</Link></li>
          <li><Link to="/exhibits" className="hover:underline">Экспонаты</Link></li>
          <li><Link to="/visit" className="hover:underline">Посетителям</Link></li>
          <li><Link to="/" className="hover:underline">О музее</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest opacity-40">Контакты</h4>
        <ul className="space-y-4 text-sm opacity-80">
          <li className="flex items-start gap-3"><MapPin size={16} className="mt-1 shrink-0" /> ул. Лобачевского, 3.14, Москва</li>
          <li className="flex items-start gap-3"><Clock size={16} className="mt-1 shrink-0" /> Вт-Вс: 10:00 — 20:00</li>
          <li className="flex items-start gap-3"><Info size={16} className="mt-1 shrink-0" /> +7 (495) 314-15-92</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest opacity-30 text-center">
      © 2026 Музей Математики. Все права защищены.
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2 }}
          src="https://picsum.photos/seed/imperial-russia/1920/1080?grayscale" 
          alt="Imperial Russia"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.4em] mb-8 block"
          >
            Золотой век русской науки
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-8xl text-[#F5F5F0] leading-tight mb-10"
          >
            Математики <br /> <span className="italic text-[#D4AF37]">Российской Империи</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#F5F5F0]/60 text-lg max-w-2xl mx-auto mb-12 font-serif italic"
          >
            «Математика — это язык, на котором написана книга природы». Открытия, изменившие мир, сделанные в стенах Императорских академий.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/exhibits" className="bg-[#D4AF37] text-black px-10 py-4 rounded-sm font-bold hover:bg-[#C5A028] transition-colors flex items-center gap-2 uppercase text-xs tracking-widest">
              Галерея ученых <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl mb-8 leading-tight">Эпоха великих открытий</h2>
            <p className="text-lg opacity-70 leading-relaxed mb-8">
              XIX и начало XX века стали временем небывалого расцвета русской математической школы. Имена Лобачевского, Чебышёва и Ковалевской навсегда вошли в пантеон мировой науки, заложив фундамент для современных технологий.
            </p>
            <div className="grid grid-cols-2 gap-8 border-l-2 border-[#D4AF37] pl-8">
              <div>
                <div className="text-4xl font-serif text-[#8B4513] mb-2">1724</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-40">Основание Академии наук</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-[#8B4513] mb-2">1826</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-40">Геометрия Лобачевского</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/old-academy/800/1000?sepia" 
              alt="Imperial Academy" 
              className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-[#1a1a1a] text-[#D4AF37] p-10 rounded-sm hidden md:block max-w-xs border border-[#D4AF37]/30">
              <Sparkles className="mb-4" />
              <div className="font-serif text-xl italic mb-2">«В математике нет символов для неясных мыслей»</div>
              <div className="text-xs opacity-60">— Анри Пуанкаре о работах русских коллег</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Mathematicians */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B4513] mb-4 block">Великие имена</span>
              <h2 className="font-serif text-5xl">Столпы науки</h2>
            </div>
            <Link to="/exhibits" className="text-xs font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-[#8B4513] hover:border-[#8B4513] transition-colors">Все биографии</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Николай Лобачевский", desc: "Создатель неевклидовой геометрии, «Коперник геометрии», совершивший революцию в понимании пространства.", img: "lobachevsky" },
              { title: "Софья Ковалевская", desc: "Первая в мире женщина — профессор математики, внесшая неоценимый вклад в теорию дифференциальных уравнений.", img: "kovalevskaya" },
              { title: "Пафнутий Чебышёв", desc: "Основатель петербургской математической школы, величайший специалист по теории чисел и вероятностей.", img: "chebyshev" }
            ].map((ex, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8 relative">
                  <img 
                    src={`https://picsum.photos/seed/portrait-${i}/600/800?grayscale`} 
                    alt={ex.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border border-black/10 group-hover:border-[#D4AF37]/50 transition-colors"></div>
                </div>
                <h3 className="font-serif text-2xl mb-4 uppercase tracking-tight">{ex.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed font-serif italic">{ex.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ExhibitsPage = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h1 className="font-serif text-6xl mb-6 uppercase tracking-tight">Галерея великих умов</h1>
          <p className="opacity-60 max-w-2xl mx-auto font-serif italic">Биографии и достижения ученых, чьи труды прославили российскую науку на весь мир.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Михаил Остроградский", cat: "Анализ", desc: "Выдающийся математик, один из основателей русской математической школы, автор работ по небесной механике." },
            { title: "Андрей Марков", cat: "Вероятность", desc: "Создатель теории цепей Маркова, ставшей фундаментом для современной статистики и ИИ." },
            { title: "Виктор Буняковский", cat: "Теория чисел", desc: "Вице-президент Академии наук, автор фундаментальных трудов по теории вероятностей и неравенству Коши-Буняковского." },
            { title: "Александр Ляпунов", cat: "Устойчивость", desc: "Создатель современной теории устойчивости равновесия и движения механических систем." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-8 p-10 bg-white rounded-sm border border-black/5 hover:shadow-2xl transition-all"
            >
              <div className="w-full md:w-48 h-48 shrink-0 rounded-sm overflow-hidden border border-black/10">
                <img src={`https://picsum.photos/seed/scholar${i}/400/400?grayscale`} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B4513] mb-2">{item.cat}</span>
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-sm opacity-60 mb-6 font-serif italic">{item.desc}</p>
                <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-[#8B4513] transition-colors">
                  Читать биографию <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VisitPage = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl mb-12 text-center">Спланируйте визит</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-[40px] border border-black/5">
            <Clock className="text-[#5A5A40] mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Часы работы</h3>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex justify-between border-b border-black/5 pb-2"><span>Понедельник</span> <span className="font-bold">Выходной</span></li>
              <li className="flex justify-between border-b border-black/5 pb-2"><span>Вторник — Пятница</span> <span>10:00 — 19:00</span></li>
              <li className="flex justify-between border-b border-black/5 pb-2"><span>Суббота — Воскресенье</span> <span>11:00 — 21:00</span></li>
            </ul>
          </div>
          <div className="bg-white p-10 rounded-[40px] border border-black/5">
            <Ticket className="text-[#5A5A40] mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Билеты</h3>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex justify-between border-b border-black/5 pb-2"><span>Взрослый</span> <span>600 ₽</span></li>
              <li className="flex justify-between border-b border-black/5 pb-2"><span>Студенческий / Льготный</span> <span>300 ₽</span></li>
              <li className="flex justify-between border-b border-black/5 pb-2"><span>Дети до 7 лет</span> <span className="font-bold">Бесплатно</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-[#2C2C2C] text-white p-12 rounded-[40px] text-center">
          <h2 className="font-serif text-3xl mb-6">Забронировать экскурсию</h2>
          <p className="opacity-60 mb-10 max-w-md mx-auto">Оставьте заявку, и наш куратор свяжется с вами для подбора идеального маршрута по музею.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Ваш e-mail" className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:bg-white/20 transition-all" />
            <button className="bg-[#F5F5F0] text-[#2C2C2C] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-[#5A5A40] selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exhibits" element={<ExhibitsPage />} />
            <Route path="/visit" element={<VisitPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
