'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const features = [
  'Real-time fight analytics & predictions',
  'Fighter performance tracking dashboard',
  'Historical fight data & statistics',
  'AI-powered matchup analysis',
  'Early access to new features',
  'Priority customer support',
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  
  const monthlyPrice = 29;
  const yearlyPrice = 290;
  const yearlySavings = (monthlyPrice * 12) - yearlyPrice;

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Unlock Fight Intelligence
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Get the competitive edge with data-driven insights that transform how you analyze combat sports.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-lg font-medium transition-colors duration-300 ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isYearly ? 'bg-violet-600' : 'bg-slate-300'}`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-9' : 'translate-x-1'}`}
            />
          </button>
          <span className={`text-lg font-medium transition-colors duration-300 ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="bg-emerald-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
              Save ${yearlySavings}
            </span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300"
        >
          {/* Popular Badge */}
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 text-sm font-semibold px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" />
              Pre-Order Special
            </span>
          </div>

          {/* Price Display */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                ${isYearly ? yearlyPrice : monthlyPrice}
              </span>
              <span className="text-slate-500 text-lg">
                /{isYearly ? 'year' : 'month'}
              </span>
            </div>
            {isYearly && (
              <p className="text-emerald-400 font-medium mt-2">
                That&apos;s just ${Math.round(yearlyPrice / 12)}/month
              </p>
            )}
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-violet-50 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-violet-600" />
                </div>
                <span className="text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Pre-Order Now - ${isYearly ? yearlyPrice : monthlyPrice}
          </button>

          <p className="text-center text-slate-400 text-sm mt-4">
            30-day money-back guarantee • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}