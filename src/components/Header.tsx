export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 py-4 md:px-10 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl">IM</div>
          <span className="font-bold text-xl md:text-2xl tracking-tight text-slate-800">Softworks</span>
        </div>
        <div className="flex items-center gap-4 md:gap-8 text-[10px] md:text-sm font-semibold text-slate-500 uppercase tracking-widest">
          <a href="#home" className="text-indigo-600 border-b-2 border-indigo-600">Home</a>
          <a href="#about-us" className="hidden md:block hover:text-indigo-600">About Us</a>
          <a href="#services" className="hidden md:block hover:text-indigo-600">Services</a>
          <a href="#contact" className="bg-indigo-600 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full hover:bg-indigo-700 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}
