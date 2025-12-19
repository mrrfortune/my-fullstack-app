import { Sparkles, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10  from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl">AdVantage AI</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              onClick={() => onNavigate?.('home')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              onClick={() => onNavigate?.('services')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a 
              onClick={() => onNavigate?.('ai-solver')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              AI Solutions
            </a>
            <a
              onClick={() => onNavigate?.('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-slate-200">
            <button 
              onClick={() => {
                onNavigate?.('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-700 hover:text-blue-600 py-2"
            >
              Home
            </button>
            <button 
              onClick={() => {
                onNavigate?.('services');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-700 hover:text-blue-600 py-2"
            >
              Services
            </button>
            <button 
              onClick={() => {
                onNavigate?.('ai-solver');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-700 hover:text-blue-600 py-2"
            >
              AI Solutions
            </button>
            <button 
              onClick={() => {
                onNavigate?.('about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-700 hover:text-blue-600 py-2"
            >
              About
            </button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
