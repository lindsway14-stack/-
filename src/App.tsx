import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Activity, 
  Users, 
  Zap, 
  Shield,
  ChevronRight,
  Search,
  Bell,
  User
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-black/10 bg-[#E4E3E0]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Nexus</Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:opacity-60 transition-opacity">Product</Link>
          <Link to="/" className="text-sm font-medium hover:opacity-60 transition-opacity">Solutions</Link>
          <Link to="/" className="text-sm font-medium hover:opacity-60 transition-opacity">Pricing</Link>
          <Link to="/login" className="text-sm font-semibold px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all">
            Get Started
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 w-full bg-[#E4E3E0] border-b border-black/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Product</Link>
            <Link to="/" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link to="/" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="font-bold">Get Started</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const LandingPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section - Split Layout */}
      <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 border-b border-black">
        <div className="p-8 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs font-mono uppercase tracking-widest opacity-50 mb-4 block">System v2.0.4</span>
            <h1 className="font-display text-[15vw] lg:text-[8vw] leading-[0.85] uppercase tracking-tighter mb-8">
              Build <br /> Beyond <br /> Limits
            </h1>
            <p className="text-lg max-w-md mb-8 opacity-80">
              The next generation of interface design. Precise, technical, and uncompromisingly fast.
            </p>
            <div className="flex gap-4">
              <Link to="/login" className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Launch App <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="bg-black relative overflow-hidden group">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src="https://picsum.photos/seed/tech/1200/1200" 
            alt="Technical Abstract"
            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-64 h-64 border border-white/20 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-48 h-48 border border-white/40 rounded-full flex items-center justify-center">
                   <div className="w-32 h-32 border border-white/60 rounded-full"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features - Grid */}
      <section className="p-8 lg:p-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Zap />, title: "Real-time Sync", desc: "Sub-millisecond latency for global state management." },
            { icon: <Shield />, title: "Secure by Design", desc: "Enterprise-grade encryption at every layer of the stack." },
            { icon: <Activity />, title: "Advanced Analytics", desc: "Deep insights into your system performance and usage." }
          ].map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-12 h-12 border border-black flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="font-display text-2xl uppercase mb-4">{f.title}</h3>
              <p className="opacity-60">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white border border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <h2 className="font-display text-4xl uppercase mb-2">Access Portal</h2>
        <p className="text-sm opacity-50 mb-8 font-mono">SECURE_LOGIN_PROTOCOL_INITIATED</p>
        
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <div>
            <label className="text-xs font-mono uppercase tracking-widest mb-2 block">Identity</label>
            <input 
              type="email" 
              placeholder="user@nexus.io"
              className="w-full border border-black p-3 focus:outline-none focus:bg-black focus:text-white transition-all"
              required
            />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-widest mb-2 block">Passcode</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full border border-black p-3 focus:outline-none focus:bg-black focus:text-white transition-all"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:invert transition-all"
          >
            Authenticate
          </button>
        </form>
        
        <div className="mt-8 pt-8 border-t border-black/10 text-center">
          <p className="text-sm opacity-60">New operator? <button className="font-bold underline">Register</button></p>
        </div>
      </motion.div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-black hidden lg:flex flex-col p-6 bg-white">
        <div className="font-display text-2xl uppercase mb-12">Nexus</div>
        <nav className="flex-1 space-y-2">
          <Link to="/dashboard" className="flex items-center gap-3 p-3 bg-black text-white rounded-lg">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/settings" className="flex items-center gap-3 p-3 hover:bg-black/5 rounded-lg transition-colors">
            <Settings size={20} /> Settings
          </Link>
          <Link to="/dashboard" className="flex items-center gap-3 p-3 hover:bg-black/5 rounded-lg transition-colors">
            <Users size={20} /> Team
          </Link>
        </nav>
        <Link to="/" className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-auto">
          <LogOut size={20} /> Terminate Session
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-black bg-white flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 bg-black/5 px-4 py-2 rounded-full w-96">
            <Search size={18} className="opacity-40" />
            <input type="text" placeholder="Search system..." className="bg-transparent border-none focus:outline-none text-sm w-full" />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold">Operator 01</div>
                <div className="text-[10px] font-mono opacity-50 uppercase">Level 4 Clearance</div>
              </div>
              <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center bg-black text-white">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="font-display text-4xl uppercase">System Overview</h1>
            <p className="opacity-50 font-mono text-xs">LAST_UPDATE: {new Date().toLocaleTimeString()}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Active Nodes", value: "1,284", change: "+12%", icon: <Activity size={16} /> },
              { label: "Throughput", value: "84.2 GB/s", change: "+5.4%", icon: <Zap size={16} /> },
              { label: "Security Score", value: "99.8%", change: "Stable", icon: <Shield size={16} /> },
              { label: "Active Users", value: "42.1k", change: "+2.1%", icon: <Users size={16} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase opacity-50">{stat.label}</span>
                  <div className="opacity-40">{stat.icon}</div>
                </div>
                <div className="text-3xl font-display uppercase">{stat.value}</div>
                <div className="text-[10px] font-mono mt-2 text-green-600">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Data Table */}
          <div className="bg-white border border-black overflow-hidden">
            <div className="p-6 border-b border-black flex items-center justify-between">
              <h2 className="font-display text-xl uppercase italic">Recent Operations</h2>
              <button className="text-xs font-mono uppercase underline">Export CSV</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-white font-mono text-[10px] uppercase tracking-widest">
                    <th className="p-4">ID</th>
                    <th className="p-4">Operation</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Timestamp</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  {[1, 2, 3, 4, 5].map((row) => (
                    <tr key={row} className="border-b border-black/10 hover:bg-black/5 transition-colors cursor-pointer">
                      <td className="p-4 opacity-50">#NX-{8420 + row}</td>
                      <td className="p-4 font-bold">DATA_REPLICATION_V3</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-[10px] font-bold">SUCCESS</span>
                      </td>
                      <td className="p-4 opacity-50">2026-04-09 14:22:0{row}</td>
                      <td className="p-4">
                        <button className="hover:scale-110 transition-transform"><ChevronRight size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar (Same as Dashboard) */}
      <aside className="w-64 border-r border-black hidden lg:flex flex-col p-6 bg-white">
        <div className="font-display text-2xl uppercase mb-12">Nexus</div>
        <nav className="flex-1 space-y-2">
          <Link to="/dashboard" className="flex items-center gap-3 p-3 hover:bg-black/5 rounded-lg transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/settings" className="flex items-center gap-3 p-3 bg-black text-white rounded-lg">
            <Settings size={20} /> Settings
          </Link>
          <Link to="/dashboard" className="flex items-center gap-3 p-3 hover:bg-black/5 rounded-lg transition-colors">
            <Users size={20} /> Team
          </Link>
        </nav>
        <Link to="/" className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-auto">
          <LogOut size={20} /> Terminate Session
        </Link>
      </aside>

      <main className="flex-1 p-8 lg:p-12 max-w-4xl">
        <div className="mb-12">
          <h1 className="font-display text-5xl uppercase mb-4">System Configuration</h1>
          <p className="opacity-60">Manage your global system parameters and security protocols.</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest opacity-40 mb-6 border-b border-black/10 pb-2">Profile Identity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-sm font-bold block">Display Name</label>
                <input type="text" defaultValue="Operator 01" className="w-full border border-black p-3 focus:bg-black focus:text-white transition-all outline-none" />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold block">Email Address</label>
                <input type="email" defaultValue="operator@nexus.io" className="w-full border border-black p-3 focus:bg-black focus:text-white transition-all outline-none" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest opacity-40 mb-6 border-b border-black/10 pb-2">Security Protocols</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-black bg-white">
                <div>
                  <div className="font-bold">Two-Factor Authentication</div>
                  <div className="text-sm opacity-60">Add an extra layer of security to your account.</div>
                </div>
                <div className="w-12 h-6 bg-black rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-black bg-white opacity-50">
                <div>
                  <div className="font-bold">Hardware Key Access</div>
                  <div className="text-sm opacity-60">Use physical keys for authentication.</div>
                </div>
                <button className="text-xs font-bold uppercase underline">Configure</button>
              </div>
            </div>
          </section>

          <section className="pt-8">
            <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Save Changes
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-black selection:text-white">
        <Routes>
          <Route path="/" element={<><Navbar /><LandingPage /></>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
