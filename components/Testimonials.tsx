'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'Head of Performance Analytics',
    company: 'UFC Performance Institute',
    companyLogo: 'UFC',
    quote: 'Fight Hype Intelligence transformed how we prepare fighters. The predictive analytics helped us identify opponent weaknesses we never would have caught on film alone.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Director of Scouting',
    company: 'Bellator MMA',
    companyLogo: 'BELLATOR',
    quote: 'We signed 3 future champions this year based on FHI data. Their fighter potential scoring is scary accurate—it sees talent before anyone else does.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'James "The Analyst" Wright',
    role: 'Combat Sports Journalist',
    company: 'ESPN MMA',
    companyLogo: 'ESPN',
    quote: 'My fight predictions went from 60% to 87% accuracy using Fight Hype Intelligence. It\'s become essential for anyone serious about combat sports analysis.',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-600 font-semibold text-sm uppercase tracking-wider mb-4">Trusted by the Best</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">Powering Elite Fight Teams Worldwide</h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">See why top MMA organizations, boxing promoters, and combat sports analysts trust Fight Hype Intelligence for their competitive edge.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Company Logo */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center bg-slate-900 text-white font-bold text-xs tracking-wider px-4 py-2 rounded-lg">
                  {testimonial.companyLogo}
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1 mb-8">
                <svg className="w-8 h-8 text-violet-600 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-600 text-lg leading-relaxed">{testimonial.quote}</p>
              </div>

              {/* Person Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-sm text-emerald-400 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900">500+</div>
              <div className="text-slate-500 mt-1">Fight Teams</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900">2.5M+</div>
              <div className="text-slate-500 mt-1">Fights Analyzed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-violet-600">94%</div>
              <div className="text-slate-500 mt-1">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900">50+</div>
              <div className="text-slate-500 mt-1">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}