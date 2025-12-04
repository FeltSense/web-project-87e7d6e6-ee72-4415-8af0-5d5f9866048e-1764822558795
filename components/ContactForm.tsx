'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Zap, Shield, Clock } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: '87e7d6e6-ee72-4415-8af0-5d5f9866048e',
          founder_id: '9bb9b538-9362-4331-a057-96afc884fbf5',
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const features = [
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Get real-time fight analytics within minutes of signing up',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Your information is encrypted and never shared with third parties',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our team is available around the clock for fight night coverage',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4">Get Started</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">Join the Fight Intelligence Revolution</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Get early access to AI-powered fight predictions, real-time analytics, and exclusive insights from our combat sports experts.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-white mb-4">Why Choose Fight Hype Intelligence?</h3>
              <p className="text-slate-400">Join thousands of fight fans, analysts, and bettors who rely on our cutting-edge platform for accurate predictions and deep fight analysis.</p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800">
              <p className="text-slate-500 text-sm">Trusted by <span className="text-emerald-400 font-semibold">10,000+</span> combat sports enthusiasts worldwide</p>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
                <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">You're In the Ring!</h3>
                <p className="text-slate-500">We'll send you exclusive fight analytics and predictions. Get ready to dominate.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Start Your Free Trial</h3>
                  <p className="text-slate-500 text-sm">No credit card required. Cancel anytime.</p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 outline-none text-slate-900 placeholder:text-slate-400" 
                    placeholder="Your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 outline-none text-slate-900 placeholder:text-slate-400" 
                    placeholder="you@example.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone <span className="text-slate-400">(optional)</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 outline-none text-slate-900 placeholder:text-slate-400" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Submitting...' : 'Get Early Access'}
                  <Send className="w-5 h-5 ml-2" />
                </button>
                
                <p className="text-center text-xs text-slate-400">By signing up, you agree to our Terms of Service and Privacy Policy</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}