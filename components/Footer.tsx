
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-1.5 rounded text-white">
                <span className="material-symbols-outlined text-lg">auto_stories</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Shriram Digital Library
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Cultivating a new era of learning through technology and focused environments. Join the community of achievers and visionaries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-slate-300 hover:text-white">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-slate-300 hover:text-white">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-slate-300 hover:text-white">
                <span className="material-symbols-outlined text-xl">photo_camera</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#membership" className="hover:text-primary transition-colors">Membership</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Privacy & Terms</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Security Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lab Rules</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Member FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © 2024 Shriram Digital Library & Computer Lab. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              System Online
            </span>
            <span>Version 2.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
