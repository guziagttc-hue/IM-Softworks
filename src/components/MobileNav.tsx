import { Home, Briefcase, Mail } from 'lucide-react';

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around py-3 z-50">
      <a href="#home" className="flex flex-col items-center gap-1 text-slate-600 hover:text-indigo-600">
        <Home size={20} />
        <span className="text-[10px]">Home</span>
      </a>
      <a href="#services" className="flex flex-col items-center gap-1 text-slate-600 hover:text-indigo-600">
        <Briefcase size={20} />
        <span className="text-[10px]">Services</span>
      </a>
      <a href="#contact" className="flex flex-col items-center gap-1 text-slate-600 hover:text-indigo-600">
        <Mail size={20} />
        <span className="text-[10px]">Contact</span>
      </a>
    </div>
  );
}
