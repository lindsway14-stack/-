import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
  Sparkles
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
            <Link to="/exhibits" onClick={() => setIsOpen(false)} className="text-xl font-serif">Ученые</Link>
            <Link to="/visit" onClick={() => setIsOpen(false)} className="text-xl font-serif">Наследие</Link>
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
        <div className="font-serif text-3xl mb-6">Математики Российской Империи</div>
        <p className="opacity-60 max-w-sm mb-8 leading-relaxed">
          Мы сохраняем память о великих умах, чьи открытия в стенах Императорских академий изменили мировую науку навсегда.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest opacity-40">Навигация</h4>
        <ul className="space-y-4 text-sm">
          <li><Link to="/" className="hover:underline">Главная</Link></li>
          <li><Link to="/exhibits" className="hover:underline">Ученые</Link></li>
          <li><Link to="/visit" className="hover:underline">Наследие</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest opacity-40">Контакты</h4>
        <ul className="space-y-4 text-sm opacity-80">
          <li className="flex items-start gap-3"><MapPin size={16} className="mt-1 shrink-0" /> Санкт-Петербург, Университетская наб., 5</li>
          <li className="flex items-start gap-3"><Clock size={16} className="mt-1 shrink-0" /> Пн-Пт: 09:00 — 18:00</li>
          <li className="flex items-start gap-3"><Info size={16} className="mt-1 shrink-0" /> info@imperial-math.ru</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest opacity-30 text-center">
      © 2026 Математики Российской Империи. Исторический архив.
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
              { 
                title: "Николай Лобачевский", 
                desc: "Гениальный создатель неевклидовой геометрии, которую называли «воображаемой». Его идеи опередили время на десятилетия, перевернув представления о пространстве и заложив основу для теории относительности Эйнштейна. Более 20 лет он возглавлял Казанский университет, превратив его в один из лучших научных центров Европы.", 
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Nikolai_Lobachevsky.jpg/440px-Nikolai_Lobachevsky.jpg" 
              },
              { 
                title: "Софья Ковалевская", 
                desc: "Первая в мире женщина — профессор математики и член-корреспондент Петербургской академии наук. Она доказала важнейшую теорему Коши-Ковалевской и решила сложнейшую задачу о вращении тяжелого твердого тела вокруг неподвижной точки, за что получила премию Парижской академии наук. Ее жизнь стала символом борьбы женщин за право заниматься наукой.", 
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sofia_Kovalevskaya.jpg/440px-Sofia_Kovalevskaya.jpg" 
              },
              { 
                title: "Пафнутий Чебышёв", 
                desc: "Основатель знаменитой Петербургской математической школы. Его работы по теории чисел, теории вероятностей и теории механизмов признаны классическими. Он создал теорию наилучшего приближения функций и сконструировал более 40 уникальных механизмов, включая знаменитую «стопоходящую машину», имитирующую движение животного.", 
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Chebyshev.jpg/440px-Chebyshev.jpg" 
              }
            ].map((ex, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8 relative bg-stone-100">
                  <img 
                    src={ex.img} 
                    alt={ex.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
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
            { 
              title: "Михаил Остроградский", 
              cat: "Математический анализ", 
              desc: "Один из величайших математиков своего времени. Его работы охватывают анализ, теорию чисел и небесную механику. Он вывел знаменитую формулу Остроградского-Гаусса, которая связывает поток векторного поля через замкнутую поверхность с интегралом от дивергенции этого поля по объему внутри поверхности. Его лекции в Петербурге собирали сотни слушателей.",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mikhail_Ostrogradsky.jpg/440px-Mikhail_Ostrogradsky.jpg"
            },
            { 
              title: "Андрей Марков", 
              cat: "Теория вероятностей", 
              desc: "Создатель теории цепей Маркова — последовательностей случайных событий, где будущее зависит только от настоящего. Эта концепция стала фундаментом для современной статистики, лингвистики, экономики и даже алгоритмов поисковых систем. Он также внес огромный вклад в теорию чисел и математический анализ.",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Andrey_Markov.jpg/440px-Andrey_Markov.jpg"
            },
            { 
              title: "Виктор Буняковский", 
              cat: "Теория чисел", 
              desc: "Вице-президент Петербургской академии наук. Он прославился выводом фундаментального неравенства, известного как неравенство Коши-Буняковского-Шварца. Его труды по теории вероятностей и демографии заложили основы страхового дела в России. Буняковский был блестящим популяризатором науки и составителем математического словаря.",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Viktor_Bunyakovsky.jpg/440px-Viktor_Bunyakovsky.jpg"
            },
            { 
              title: "Александр Ляпунов", 
              cat: "Теория устойчивости", 
              desc: "Создатель современной теории устойчивости равновесия и движения механических систем. Его методы позволяют определить, вернется ли система в исходное состояние после малого возмущения, что критически важно для авиации, космонавтики и робототехники. Он также доказал центральную предельную теорему теории вероятностей в общем виде.",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Aleksandr_Lyapunov.jpg/440px-Aleksandr_Lyapunov.jpg"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-8 p-10 bg-white rounded-sm border border-black/5 hover:shadow-2xl transition-all"
            >
              <div className="w-full md:w-48 h-48 shrink-0 rounded-sm overflow-hidden border border-black/10 bg-stone-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B4513] mb-2">{item.cat}</span>
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-sm opacity-60 mb-6 font-serif italic leading-relaxed">{item.desc}</p>
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
        <h1 className="font-serif text-6xl mb-12 text-center">Наследие и визит</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-sm border border-black/5">
            <Clock className="text-[#8B4513] mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Часы работы архива</h3>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex justify-between border-b border-black/5 pb-2"><span>Суббота — Воскресенье</span> <span className="font-bold">Выходной</span></li>
              <li className="flex justify-between border-b border-black/5 pb-2"><span>Понедельник — Пятница</span> <span>09:00 — 18:00</span></li>
            </ul>
          </div>
          <div className="bg-white p-10 rounded-sm border border-black/5">
            <Ticket className="text-[#8B4513] mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Доступ</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Доступ к историческим архивам и библиотеке предоставляется по предварительной записи для исследователей и студентов.
            </p>
          </div>
        </div>

        <div className="bg-[#1a1a1a] text-white p-12 rounded-sm text-center border border-[#D4AF37]/30">
          <h2 className="font-serif text-3xl mb-6 text-[#D4AF37]">Запрос на исследование</h2>
          <p className="opacity-60 mb-10 max-w-md mx-auto">Оставьте заявку на посещение архива или получение цифровых копий документов.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <input type="email" placeholder="Ваш e-mail" className="flex-1 bg-white/10 border border-white/20 rounded-sm px-6 py-4 focus:outline-none focus:bg-white/20 transition-all" />
            <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-sm font-bold hover:bg-[#C5A028] transition-transform uppercase text-xs tracking-widest">Отправить</button>
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
      <div className="min-h-screen selection:bg-[#D4AF37] selection:text-black bg-[#F5F5F0]">
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
