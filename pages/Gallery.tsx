
import React, { useState } from 'react';
// Added import for Link component
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Study Area', 'Computer Lab', 'Book Collection', 'Events'];

  const galleryItems = [
    {
      category: 'Study Area',
      title: 'Ergonomic Study Pods',
      desc: 'Quiet, private spaces designed for long-term concentration.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1-odnA9ULafSC8SDGWF-LAPtA6imaEVB3EvgEJtgbPAxtu49Ru_PbmljGWPVz-jAE068EhxO74rAJQJ8JfUlmBJhX-Th542s5bLOMG8gD4iuxs855khm77DdEDiBr7e_JMFi2pfaKyHyuvHbdT0fyeOuRUHR9dJeiBt58ejLBdzMpNxluTj3BfEVQV5CK8xe6eyTc9xd5yJid6RsDbLa2rLTpn8PIuLn-ZhmPemsmTUr_cSfIDpnPNSA4hhGce73LNbpYms7EUDmB'
    },
    {
      category: 'Computer Lab',
      title: 'Advanced PC Workstations',
      desc: 'Equipped with 32GB RAM and dual-monitor setups for heavy tasks.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNbnABZwdwRXbmlvDl8pAyA92k9A2GMcRutS7L2ZeLpBnvuLtnwn5-i8c5tW1h9kEixiXmh9nYbrpwjrbtCejS-duzytJUZhC6b1C6M4hlpAMVdwxXna6Z0F_0S9uh1qOefeeL5FZ1XCQ1icUNoIYJUFPHiQ0MpIclEjaVN520BjBLrNmYbGds-3oCJpEyNHWat8JToRw-i7Rr1BfmCL3_sABhmwLoYJOCcQ5hllH3PoKxMcdw_1Z1EplKol1oFfUTZYTJH58PBurZ'
    },
    {
      category: 'Facility',
      title: 'The Grand Reading Hall',
      desc: 'Natural lighting and plenty of room to breathe while you learn.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmpG6l2OjRERvsXMy991D8gQBcdaVf6AlBAuNtSX13H5XwhHwCIC-zXUZk91R3mXCxntlZUOpwyKgiCRhpwZwgddEL7o1jH0HX5b4PZ8Zd_hT-ixxzpZI7TLkE5Ced_NFw5Tbuumknp-Er4nKtQ8vXWymBbwJxGHDgpVbGaMadgduiyAZFpsGa0tU6_gI2YNUu3uKUdTerQQAeWd6tVpzecZRXvD_0LjQd6avFo5LAzeDxPBvN4sFJuYw7TMgGRDOD1nL7kt0kejmi'
    },
    {
      category: 'Book Collection',
      title: 'Reference Archives',
      desc: 'Access thousands of academic journals and physical copies.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyr_wU8VBceD3TCr7blNuWn6Lnlrc4fMZe7Hngk5LVtl0r5-FENgxmrQsgh2TuZPO5cCJr0kj5uOcoQmXXnZ-ZySABqlf6-sxQ7PsRoxAzB9OQ2Wf5zslIuny3CrAbBx1PTPbUalKlAh_VH-3GwQQKq_jNfPCoEzTYohbH-wqp3RdVGfsXQtDYgMrmoz8-apjgBg5eLa7XclNBiYSKFZRITNR5fcLDyfRHdhRLSlBMYX3QWYsYkGAMMYB7UcnsJnVT-jpT7ckKn24Y'
    },
    {
      category: 'Events',
      title: 'Group Study Zone',
      desc: 'Brainstorm with your team using our interactive boards.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWpr0Up__UNVhnk9mVEtm0TsDX40Z_E-DHoTe-ftvKKh_LNbB_-ff44TsJBZxBcMLkIOt4Gc4exZ5hUN2Kc7sNwIjmsEvYdnrxYZ8BJWYDYtEmght5z2nD6LfURN-jWnqinDKtHDMDkI7NAPn0n39KSIfcILn1apZzSHX_rhek4NECe3awCsDsWyb0625mfwuWt3VFpJJNUE_8clnbUhQU7bjjZ-18uWfiJVhcS-Esjpq-XMIJuBkCV7zfM7C25cd8yU55rc8DzWFV'
    },
    {
      category: 'Computer Lab',
      title: 'Digital Catalog Hub',
      desc: 'Instantly locate any resource across our entire network.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVK84T89VOdhiVTf6cn8c6N0y4qDiJOssgr91DrcqzZ1D8REkrS6UWuc3carAf0xrK7Z3Yb2stfpcDWtWmztMOLHEbuzjw7qocTWx96f191_X-3lNJfId0OM2y08Kdxjcq4E498Na2M29VUswYUzjo0NuiQHblOkvPL6gcDvEhwkjA38aPVyV6qtzHvC4swwGnnJm_e9LVEJPaxmy19g7bY8IeomiiPtLHO_wfthV5gHeyEGWQ92oTWfBAAVBBsM4Oi1DJAs6XCRnC'
    },
    {
      category: 'Study Area',
      title: '24/7 Access Zones',
      desc: 'Late-night sessions supported by our premium lighting.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtDo20FTj0Qi2c-DxP761ZJyk5hIPpODavSqpOXe01lPAXfnj8KUZtYD_u3omyicaLFz36S6kZfS8Iin5PkyNpcV9drE9GerC8KY1eLPCs6_pEoGLo8R6aozqWJuUc2Lxuq3y3BL-G64BGclXRRti9Zrah37XEsktHlGoUJJa9u3W3MccfT64Y9RUiqZnE_d4o3JHseRzSxP3033NnSzLyay-n6l5fUZKjLuQkp7xyQhBHaYlyIteZhFic_-VCRK5XDCuq_1bEhY0G'
    }
  ];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">Our Facility Gallery</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Step inside Shriram Digital Library. Explore our state-of-the-art facilities designed for focus, collaboration, and high-performance learning.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
              filter === cat
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-slate-800 text-slate-300 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, i) => (
          <div key={i} className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img 
              alt={item.title} 
              className="w-full h-80 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
              src={item.img} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-3xl font-bold mb-3 text-white">Ready to experience it?</h3>
          <p className="text-slate-400">Join our community and get access to all these facilities starting from today.</p>
        </div>
        <div className="flex gap-4 shrink-0">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
            Book a Free Tour
          </button>
          <Link to="/membership" className="bg-slate-800 text-white px-8 py-3 rounded-lg font-bold border border-white/10 hover:bg-slate-700 transition-all">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
