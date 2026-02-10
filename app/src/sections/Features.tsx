import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Coins, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Coins,
    title: 'Automatic Roundups',
    description: 'Every purchase gets rounded up to the nearest franc...',
    modalId: 'roundups',
  },
  {
    icon: Shield,
    title: 'Swiss Security',
    description: 'Bank-grade encryption...',
    modalId: 'security',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Growth',
    description: 'Expert-curated ETF portfolios...',
    modalId: 'portfolio',
  },
];

const modalContent = {
  roundups: { title: 'Roundups Test', items: ['Item 1', 'Item 2'] },
  security: { title: 'Security Test', items: ['Item 1', 'Item 2'] },
  portfolio: { title: 'Portfolio Test', items: ['Item 1', 'Item 2'] },
};

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    console.log('CLICKED! Opening:', modalId);
    alert('Button clicked! Opening: ' + modalId);
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const activeContent = activeModal ? modalContent[activeModal as keyof typeof modalContent] : null;

  return (
    <section id="features" ref={ref} className="relative py-24 bg-slate-50">
      
      {/* DEBUG INDICATOR */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-red-600 text-white text-center py-2 text-sm font-bold">
        DEBUG: Modal State: {activeModal || 'null'} | Content: {activeContent ? 'YES' : 'NO'}
      </div>

      <div className="relative z-10 px-6 pt-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                
                <button
                  type="button"
                  onClick={() => openModal(feature.modalId)}
                  className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg border-4 border-red-700 shadow-lg"
                >
                  CLICK ME: {feature.modalId}
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ULTRA SIMPLE MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-[10000] bg-red-500/90 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-red-600">MODAL IS OPEN!</h2>
            <p className="text-lg mb-4">Modal ID: {activeModal}</p>
            <button 
              onClick={closeModal}
              className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold text-xl"
            >
              CLOSE MODAL
            </button>
          </div>
        </div>
      )}
      
    </section>
  );
}
  );
}
