
import React, { useState } from 'react';

const Membership: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('Standard');

  const plans = [
    {
      name: 'Basic',
      price: '15',
      icon: 'school',
      features: [
        { text: '4 hours Daily Lab access', included: true },
        { text: 'Standard Wi-Fi (50Mbps)', included: true },
        { text: 'Shared Lockers', included: true },
        { text: 'Digital Library access', included: false },
      ],
      color: 'slate',
      buttonText: 'Select Basic'
    },
    {
      name: 'Standard',
      price: '35',
      icon: 'laptop_mac',
      popular: true,
      features: [
        { text: '8 hours Daily Lab access', included: true },
        { text: 'High-speed Wi-Fi (200Mbps)', included: true },
        { text: 'Personal Locker', included: true },
        { text: 'Full Digital Library Access', included: true },
      ],
      color: 'primary',
      buttonText: 'Select Standard'
    },
    {
      name: 'Premium',
      price: '75',
      icon: 'workspace_premium',
      features: [
        { text: '24/7 Unlimited Lab access', included: true },
        { text: 'Dedicated Gigabit Wi-Fi', included: true },
        { text: 'Premium Secure Locker', included: true },
        { text: 'Digital Library & Archival access', included: true },
      ],
      color: 'amber',
      buttonText: 'Select Premium'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Header */}
      <section className="text-center mb-24 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1] text-white">
          Empower Your <span className="text-primary">Learning Journey</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Access state-of-the-art facilities, gigabit networking, and an expansive digital archive. Choose the plan that fits your research needs.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`relative p-8 rounded-[2rem] flex flex-col transition-all hover:-translate-y-2 border-2 ${
              plan.name === selectedPlan 
                ? 'bg-slate-800/60 border-primary shadow-2xl shadow-primary/10' 
                : 'bg-slate-900/40 border-white/5 hover:border-white/10'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full shadow-lg shadow-primary/20">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                plan.name === 'Standard' ? 'bg-primary/20 text-primary' : 
                plan.name === 'Premium' ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-800 text-slate-400'
              }`}>
                <span className="material-symbols-outlined text-3xl">{plan.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className={`text-5xl font-black ${plan.name === 'Standard' ? 'text-primary' : 'text-white'}`}>${plan.price}</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className={`flex items-center gap-3 text-sm ${feature.included ? 'text-slate-300' : 'text-slate-600'}`}>
                  <span className={`material-symbols-outlined text-xl ${feature.included ? 'text-primary' : 'opacity-30'}`}>
                    {feature.included ? 'check_circle' : 'cancel'}
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setSelectedPlan(plan.name)}
              className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                plan.name === 'Standard' 
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-primary/20' 
                  : 'bg-slate-800 text-white border border-white/10 hover:bg-slate-700'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </section>

      {/* Registration Form Section */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 text-white">Membership Registration</h2>
          <p className="text-slate-500">Complete the form below to begin your application process.</p>
        </div>
        
        <form className="bg-slate-800/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Personal Details</h4>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">Full Name</label>
                <input 
                  className="w-full bg-background-dark/50 border-white/5 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="John Doe" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">Email Address</label>
                <input 
                  className="w-full bg-background-dark/50 border-white/5 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="john@example.com" 
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">Phone Number</label>
                <input 
                  className="w-full bg-background-dark/50 border-white/5 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="+1 (555) 000-0000" 
                  type="tel"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Membership Info</h4>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">Occupation / Student ID</label>
                <input 
                  className="w-full bg-background-dark/50 border-white/5 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="Computer Science Student" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">Selected Plan</label>
                <select 
                  className="w-full bg-background-dark/50 border-white/5 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                >
                  <option value="Basic">Basic Membership ($15/mo)</option>
                  <option value="Standard">Standard Membership ($35/mo)</option>
                  <option value="Premium">Premium Membership ($75/mo)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300 mb-4">Facility Preferences</label>
                <div className="flex flex-wrap gap-2">
                  {['Quiet Zone', 'Collaborative Space', 'High-End PC Room'].map(pref => (
                    <span 
                      key={pref}
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                        pref === 'Quiet Zone' 
                          ? 'bg-primary/20 text-primary border-primary/30' 
                          : 'bg-slate-900 text-slate-500 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <input 
                id="terms"
                type="checkbox" 
                className="w-5 h-5 rounded border-white/10 bg-background-dark text-primary focus:ring-primary"
              />
              <label htmlFor="terms" className="text-xs text-slate-400">
                I agree to the <a href="#" className="text-primary hover:underline">Terms & Conditions</a> and lab usage policies.
              </label>
            </div>
            <button 
              type="submit"
              className="w-full md:w-auto min-w-[240px] bg-primary hover:bg-primary/90 text-white font-bold py-5 px-10 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Membership;
