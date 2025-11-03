import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, PenSquare, Palette, FileText, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 hover:text-cyan-400 hover:bg-white/5 ${
        isActive ? 'text-cyan-400 bg-white/5' : 'text-gray-300'
      }`
    }
  >
    <Icon size={18} />
    <span className="hidden sm:inline-block text-sm font-medium">{label}</span>
  </NavLink>
);

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = stored ? stored === 'dark' : prefersDark || true;
    setDarkMode(enabled);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600" />
            <span className="text-white font-semibold tracking-wide">Namratha</span>
          </Link>

          <nav className="flex items-center gap-1">
            <NavItem to="/" icon={Home} label="Home" />
            <NavItem to="/blog" icon={PenSquare} label="Blog" />
            <NavItem to="/creative" icon={Palette} label="Creative Zone" />
            <NavItem to="/resume" icon={FileText} label="Resume" />
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://github.com/namratha" target="_blank" rel="noreferrer" className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/namratha" target="_blank" rel="noreferrer" className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:namratha@example.com" className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
              <Mail size={18} />
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setDarkMode((v) => !v)}
              className="ml-1 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-yellow-300 hover:bg-white/5 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </header>
  );
}
