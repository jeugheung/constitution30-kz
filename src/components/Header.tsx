import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ornamentBg from './assets/ornament3.svg';
import suLogo from './assets/suLogo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuItems = [
    { name: 'Главная', href: '#home', nameKz: 'Басты бет' },
    { name: 'Хроника', href: '#timeline', nameKz: 'Хроника' },
    { name: 'Образование', href: '#education', nameKz: 'Білім' },
    { name: 'Викторина', href: '#quiz', nameKz: 'Викторина' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border"
      style={{
        backgroundImage: `url(${ornamentBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-lg font-bold text-foreground">Конституция РК</h1>
              <p className="text-xs text-muted-foreground">30 лет</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden show-nav-850 items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  document.documentElement.style.scrollBehavior = 'smooth';
                  setTimeout(() => {
                    document.documentElement.style.scrollBehavior = 'auto';
                  }, 1000);
                }}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Switch */}
          <div className="hidden show-nav-850 items-center justify-end space-x-2 min-w-[192px]">
            <button className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm font-medium">
              РУС
            </button>
            <button className="px-3 py-1 rounded-md text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
              ҚАЗ
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="hide-850 p-2 rounded-md text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="hide-850 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-2 pt-4 border-t border-border">
                <button className="px-3 py-1 rounded-md bg-[#00AFCA] text-primary-foreground text-sm font-medium">
                  РУС
                </button>
                <button className="px-3 py-1 rounded-md text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
                  ҚАЗ
                </button>
              </div>
            </nav>
          </div>
        )}

        
      </div>

      <div
        className="h-1 bg-[#00AFCA] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};

export default Header;
