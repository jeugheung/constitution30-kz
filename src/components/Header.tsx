
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Главная', href: '#home', nameKz: 'Басты бет' },
    { name: 'Хроника', href: '#timeline', nameKz: 'Хроника' },
    { name: 'Образование', href: '#education', nameKz: 'Білім' },
    // { name: 'Конкурс', href: '#contest', nameKz: 'Конкурс' },
    { name: 'Викторина', href: '#quiz', nameKz: 'Викторина' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-primary font-bold text-sm">30</span>
              </div>
            </div>
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
                <button className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm font-medium">
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
    </header>
  );
};

export default Header;
