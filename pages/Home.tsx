
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const testimonials = [
    { name: "Rahul S.", role: "UPSC Student", quote: "The internet speed is unmatched in the city.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPgOskuaFRACVTK2wdJYRFemu_y4uP85WK2WhX9A2JfISqMZPuGIwPrd5BRczKkgrFfHBF6xKopxxpUoj52N2_pUK1dB7LOJ0DQcOsJl6Pn8o02axakrtEIOzvNLqsXmDKR_gds3lPZRY8kLtxaLa9sNsQqob1ijqLMjhpmUcSEB7U-4qis7xOQMhXL1hVoIWXe4oIRIVw5YT6E7LQ0MvXNGXDn-Y5NyakDcXD8KFXrurw068FYQaMVhmb6UmtFkjwSbgeQP5s-3e-" },
    { name: "Priya V.", role: "Dev", quote: "Highly professional environment. Best for deep work.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRBlksgR69EyrtzIunqG5zRsukp-HtGVedKpHYbQmvzTsg5oa3BeFDdbYogsXlZSalO-k_mfjt9qXUipBdiVj42efZ_LZTF0Of6HFTyKSkl27ssCw7kgzFUoAdUDAuf9qganhbcm1f3IjGr9ZsnONyu8GiB_cSTJ6ED7sD5vMXi_ChYvTHLfDPdIJH6UejV1hoDFTXp3yfQhCuWEJlvwjhqDJG5bM6l6wqeNpFpNfqdnbEwUDWZt7uXRKG-9tbAXH4Lv_dSpNhoz7N" },
    { name: "Ankit G.", role: "Designer", quote: "Quiet, clean, and modern. Just what I needed.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWrDxQUIeJkHTOtGd5e9L0SHraZPvY1ctZNIQO4jmLlcuP0RCF6Di3FfYIEhR-ie5PTrGS0822qBliBzq9Fry_8sApPwGVmGbq-xd9bNdKnYkFtTXktJzE1RPSNUbZsjSJFh8tNCkxenr1EWvRyLZiZTD7p3R20dnELU2pG_21_D2_sBZCgRKffXs9hNEIWfPniKqVj59ixuK6iajiC8COOJpp8dvlNmqBUr0nU3oGXsPhx_tsZZTPElo3mS601MMRvAraxowNNxbx" },
    { name: "Sunil K.", role: "Student", quote: "Best investment for my career preparation.", initial: "S" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden hero-pattern min-h-[90vh] flex items-center">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in slide-in-from-left duration-700">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Premium Study Space</span>
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white">
                Unlock Your <span className="text-primary italic">Full Potential</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
                Experience a sanctuary of silence and speed. Our digital infrastructure is built for the modern-day visionary student.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/membership" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-2xl shadow-primary/30 transition-all flex items-center justify-center space-x-3">
                  <span>Reserve Your Seat</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link to="/gallery" className="px-10 py-5 bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 text-white">
                  <span className="material-symbols-outlined">play_circle</span>
                  <span>View Lab Tour</span>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-in zoom-in duration-1000">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-3xl opacity-50"></div>
              <img 
                alt="Library Interior" 
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5] relative z-10 border-4 border-white/10" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBajWphGmehDAaGTqJL7gCljAgrjqXEgczj--2jyKCglRUnqc1Z9DIRaLsSFb3z5Qa_vCMUtomVN3eALiSyzSi_Z2zHIKpZChfpgkeq2N8xdNAzKBGtMHWR4klpFQxWFF_-6uyfNRNugvsM5ZCMG0tcmIfvWjJUD7ZyPhz6PvFbnmiEvkx2sYYldWsfZWk0twARqUOsFnFCYF-yQEYLtgZpH6MAiBz6vB4yEzjAKr8FORYhqqVJvb3QEUYOG9MvzjbDyd36086YVanp" 
              />
              <div className="absolute bottom-10 -left-10 bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl z-20 flex items-center space-x-4 border border-white/10 shadow-2xl animate-bounce">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">wifi</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Connectivity</p>
                  <p className="text-lg font-extrabold text-white">Ultra-High Speed 5G</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="services" className="py-32 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">World-Class Facilities</h2>
            <p className="text-slate-400 text-lg">We've meticulously designed every corner to support your focus and productivity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'noise_control_off', title: 'Quiet Zones', desc: 'Acoustically treated environments for deep study.', color: 'text-primary' },
              { icon: 'router', title: 'Fiber Internet', desc: 'Dedicated bandwidth for buffer-free online lectures.', color: 'text-teal-500' },
              { icon: 'computer', title: 'Modern Lab', desc: 'High-performance workstations with top software.', color: 'text-secondary' },
              { icon: 'library_books', title: 'E-Resources', desc: '24/7 access to global digital libraries.', color: 'text-purple-500' },
            ].map((f, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-primary transition-all group">
                <div className="w-16 h-16 bg-slate-800 shadow-xl rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <span className={`material-symbols-outlined text-3xl ${f.color}`}>{f.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-32 bg-slate-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
              <img 
                alt="Students studying" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border-8 border-slate-800" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm6eZ-KDg-Tmj0M2Nx848nuazF1-vqvAmuGzqUChtz7GI-DvHNztoCqP5jyXulTA9MuKTjC3TYw534HLtYrGEPIFDxfq4hC9YnrywfISEG9-PSA-nuVSasUjn_osBd7aSjbXpOqbEATGgEmNw3-FPdGeM72KVIrOM6FhiCdZrbko6UNpIxccsUFEGsEyU72vYnadvlBb399uySz3oiWFfvz0ZC3acaop0pXiJsW5D6xVs2ooGoHRRQdMUGWq9tN4htLoxnhWNdHFkk" 
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight text-white">
                Comfort Meets <span className="text-primary">Innovation</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                We believe physical comfort is essential for mental endurance. Our facility is equipped with ergonomic furniture and climatic controls to keep you going for hours.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Ergonomic Seating', 'Climate Controlled', '24/7 Security', 'Power Backup'].map((item) => (
                  <div key={item} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center text-green-500">
                      <span className="material-symbols-outlined text-[20px]">check</span>
                    </div>
                    <span className="font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-4">Member Voices</h2>
              <p className="text-slate-500">Trusted by 500+ students and professionals</p>
            </div>
            <div className="flex space-x-2">
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">4.9/5 Rating</div>
              <div className="px-4 py-2 rounded-full bg-slate-800 font-bold text-sm text-slate-300">1,200+ Reviews</div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-6 overflow-x-auto pb-10 px-6 no-scrollbar">
          <div className="flex space-x-6">
            {testimonials.map((t, i) => (
              <div key={i} className="w-80 bg-slate-800/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl shrink-0 transition-all hover:-translate-y-2">
                <div className="flex text-yellow-400 mb-4 text-xs">
                  {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined fill-1">star</span>)}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center space-x-3">
                  {t.img ? (
                    <img alt={t.name} className="w-10 h-10 rounded-full object-cover" src={t.img} />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">{t.initial}</div>
                  )}
                  <div>
                    <p className="font-bold text-sm text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 tracking-tight text-white">Visit Our <span className="text-primary">Facility</span></h2>
              <div className="space-y-10">
                {[
                  { icon: 'pin_drop', title: 'Our Location', detail: '74C2+R82, Chhittampur, Uttar Pradesh 232101, India' },
                  { icon: 'call', title: 'Support Line', detail: '+91 90766 67649' },
                  { icon: 'schedule', title: 'Open 24/7', detail: 'We never sleep, so you can achieve more.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                      <p className="text-slate-400">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <form className="mt-16 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase">Full Name</label>
                    <input className="w-full bg-slate-800/50 border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary text-white outline-none" placeholder="Enter name" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase">Email Address</label>
                    <input className="w-full bg-slate-800/50 border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary text-white outline-none" placeholder="Email here" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">Your Message</label>
                  <textarea className="w-full bg-slate-800/50 border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary text-white outline-none" placeholder="How can we help you?" rows={4}></textarea>
                </div>
                <button className="bg-primary hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-2xl shadow-xl shadow-primary/20 transition-all w-full sm:w-auto">
                  Send Inquiry
                </button>
              </form>
            </div>
            
            <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-800 relative group">
              <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center p-8 text-center">
                <img 
                  alt="Map background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-[3s]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD--CQD1f5sd--Xq8xmGWs6oqxPlpGexvu9dUF8A9RKy4EUMfKDwU7xQryPLT-ecVlXPUU6BBCrBgC4qwAS1Go-p-YciWfV-Xq6hJ6k7fmuRs3-nAWb5bOLOiavyAexk-SdlrS9sjNQwYwzpyjZUVwsnUPpbTN2MIyld_c0lddhgWfrceY48vaSov2Sp4ozJ4SeUoyV3f42edXeNBSFeedSbRLmgYHSEDbasJHJzWbiDLpI8OTTAPXmYVJRm3Kj4Z_0ez2cFvD5OFuG" 
                />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-slate-700 rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                  </div>
                  <h3 className="font-extrabold text-3xl mb-4 text-white">Find Us Locally</h3>
                  <p className="text-slate-400 mb-8 max-w-sm mx-auto">Chhittampur's most advanced digital hub for students and creators.</p>
                  <a href="https://maps.google.com" target="_blank" className="inline-flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                    <span>Open Google Maps</span>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
