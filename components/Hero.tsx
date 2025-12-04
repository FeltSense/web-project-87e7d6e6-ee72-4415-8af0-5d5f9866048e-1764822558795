'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-600/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-violet-300 text-sm font-medium">AI-Powered Fight Analytics</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-8">
              Predict Fights.
              <span className="block text-violet-400">Dominate Odds.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Advanced machine learning analyzes 50,000+ fights to give you the edge. Real-time stats, fighter comparisons, and predictive insights that serious analysts trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2">
                Start Free Trial
                <TrendingUp className="w-5 h-5" />
              </a>
              <a href="#services" className="border-2 border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 inline-flex items-center justify-center">
                See How It Works
              </a>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-800">
              <div>
                <div className="text-3xl font-bold text-white">73%</div>
                <div className="text-slate-500 text-sm">Prediction Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-slate-500 text-sm">Fights Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">12K+</div>
                <div className="text-slate-500 text-sm">Active Users</div>
              </div>
            </div>
          </motion.div>
          
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-500 text-sm">Fight Hype Intelligence Dashboard</span>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Fight Card Preview */}
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">UFC 305 • Main Event</span>
                    <span className="text-slate-500 text-xs">Live Analysis</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-700 rounded-full mb-2 flex items-center justify-center">
                        <span className="text-2xl">🥊</span>
                      </div>
                      <div className="text-white font-semibold">Fighter A</div>
                      <div className="text-emerald-400 text-sm font-bold">68%</div>
                    </div>
                    <div className="text-slate-500 text-2xl font-bold">VS</div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-700 rounded-full mb-2 flex items-center justify-center">
                        <span className="text-2xl">🥊</span>
                      </div>
                      <div className="text-white font-semibold">Fighter B</div>
                      <div className="text-violet-400 text-sm font-bold">32%</div>
                    </div>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-violet-600/20 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-violet-400" />
                      </div>
                      <span className="text-slate-400 text-sm">Strike Accuracy</span>
                    </div>
                    <div className="text-white text-2xl font-bold">54.2%</div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                      <div className="bg-violet-600 h-2 rounded-full" style={{ width: '54%' }} />
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-slate-400 text-sm">Takedown Def</span>
                    </div>
                    <div className="text-white text-2xl font-bold">78.9%</div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                      <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '79%' }} />
                    </div>
                  </div>
                </div>
                
                {/* AI Insight */}
                <div className="bg-violet-600/10 border border-violet-600/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-violet-300 text-sm font-semibold">AI Insight</span>
                  </div>
                  <p className="text-slate-400 text-sm">Fighter A has a 3.2x higher KO rate in rounds 1-2. Historical matchup data suggests early pressure strategy...</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-400/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Live Prediction</div>
                  <div className="text-emerald-400 text-xs">Updated 2s ago</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}