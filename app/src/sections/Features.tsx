import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Coins, Shield, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { Modal } from '../components/Modal';

const features = [
  {
    icon: Coins,
    title: 'Automatic Roundups',
    description: 'Every purchase gets rounded up to the nearest franc. The spare change goes straight into your investment portfolio.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    modalId: 'roundups',
  },
  {
    icon: Shield,
    title: 'Swiss Security',
    description: 'Bank-grade encryption, two-factor authentication, and Swiss data protection laws keep your wealth secure.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    modalId: 'security',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Growth',
    description: 'Expert-curated ETF portfolios designed for long-term growth. Diversified across global markets.',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    modalId: 'portfolio',
  },
];

const modalContent = {
  roundups: {
    title: 'Round Up Your Purchases Automatically',
    items: [
      'Every time you buy coffee, groceries, or anything else, we round up to the nearest CHF',
      'The spare change (e.g., CHF 0.45 from a CHF 8.55 coffee) goes straight into your investment portfolio',
      'Set your own round-up rules: round to nearest CHF 1, 5, or 10 for faster growth',
      'Watch your "spare change" grow into serious wealth without changing your spending habits',
    ],
  },
  security: {
    title: 'Bank-Grade Protection for Your Wealth',
    items: [
      '256-bit encryption: Same security standard used by Swiss banks',
      'Two-factor authentication: Extra layer of protection for your account',
      'Swiss data protection: Fully compliant with Swiss privacy laws (FADP)',
      'Segregated accounts: Your investments are held separately from company assets',
      'Regulated: Operating under Swiss financial regulations',
    ],
  },
  portfolio: {
    title: 'Expert-Curated Investment Portfolios',
    items: [
      'ETF-based portfolios: Diversified across thousands of stocks and bonds',
      'Risk levels: Choose from Conservative, Balanced, or Growth based on your goals',
      'Automatic rebalancing: We adjust your portfolio quarterly to maintain optimal allocation',
      'Global diversification: Invest in Swiss, European, US, and emerging markets',
      'Low fees: Keep more of your returns with our transparent pricing',
    ],
  },
};

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const activeContent = activeModal ? modalContent[activeModal as keyof typeof modalContent] : null;

  return (
    <section id="features" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
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
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 block">
              Features
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Simple. Smart.{' '}
              <p className="text-red-600 font-bold text-2xl">MODAL TEST - DELETE ME</p>
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Swiss.
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
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
                className={`group relative p-8 rounded-2xl ${feature.bgColor} dark:bg-slate-800 border ${feature.borderColor} dark:border-slate-700 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-slate-900/20`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <button
                  onClick={() => openModal(feature.modalId)}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

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
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full shadow-lg shadow-slate-900/20 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <span>Join the waitlist</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={activeContent?.title || ''}
      >
        {activeContent && (
          <ul className="space-y-4">
            {activeContent.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </section>
  );
}
