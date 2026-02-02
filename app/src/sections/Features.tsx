import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coins, Shield, TrendingUp, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Coins,
    title: 'Automatic Roundups',
    description: 'Every purchase gets rounded up to the nearest franc. The spare change goes straight into your investment portfolio.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
  },
  {
    icon: Shield,
    title: 'Swiss Security',
    description: 'Bank-grade encryption, two-factor authentication, and Swiss data protection laws keep your wealth secure.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Growth',
    description: 'Expert-curated ETF portfolios designed for long-term growth. Diversified across global markets.',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
  },
];

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4 block">
              Features
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Simple. Smart.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Swiss.
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Everything you need to grow your wealth, designed with Swiss precision and simplicity.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -4 }}
                className={`group relative p-8 rounded-2xl ${feature.bgColor} border ${feature.borderColor} transition-all duration-300 ease-out hover:shadow-xl hover:shadow-slate-900/5`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 lg:mt-20 text-center"
          >
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-colors"
            >
              <span>Join the waitlist</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
