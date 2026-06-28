export default function Services() {
  const services = [
    "Custom Software Development",
    "Web Applications",
    "Mobile Apps",
    "Cloud Solutions",
    "API Development",
    "UI/UX Design"
  ];
  return (
    <section id="services" className="py-12 px-6 md:py-20 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-8">Our Services</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
              <p className="font-bold text-slate-800">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
