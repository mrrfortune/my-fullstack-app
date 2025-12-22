import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-muted/50 text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl">AdVantage AI</span>
            </div>
            <p className="text-slate-400">
              Transforming brands with AI-powered digital advertising solutions that deliver real results.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Targeted Campaigns</li>
              <li>Growth Marketing</li>
              <li>Performance Optimization</li>
              <li>Brand Strategy</li>
              <li>Analytics & Insights</li>
              <li>Creative Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                <span>hello@advantageai.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>123 Innovation Drive<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 AdVantage AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
