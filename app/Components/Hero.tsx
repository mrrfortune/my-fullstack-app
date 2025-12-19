
"use client";
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
                AI-Powered Solutions
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl">
              Transform Your Brand With{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Data-Driven
              </span>{' '}
              Advertising
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl">
              We combine creative excellence with AI-powered insights to solve your marketing challenges 
              and drive measurable results for your business.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={onGetStarted}
              >
                Get Started with AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl">500+</div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-slate-300" />
              <div>
                <div className="text-3xl">95%</div>
                <div className="text-slate-600">Success Rate</div>
              </div>
              <div className="w-px h-12 bg-slate-300" />
              <div>
                <div className="text-3xl">2.5x</div>
                <div className="text-slate-600">Avg ROI</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1700561570982-5f845601c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NjA1NzUxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
