import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Coins, Shield, TrendingUp, ArrowRight, X } from 'lucide-react';

const features = [
  {
    icon: Coins,
    title: 'Automatic Roundups',
    description: 'Every purchase gets rounded up...',
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

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (id: string) => {
    console.log('Button clicked! ID:', id); // This should appear in console
    setModalTitle(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="features" ref={ref} className="relative py-24 overflow-hidden bg-slate-50">
      <div className="relative z-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600 mb-4">{feature.description}</p>
                
                {/* SIMPLE TEST BUTTON */}
                <button
                  onClick={() => openModal(feature.modalId)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Click me: {feature.modalId}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SIMPLE DEBUG MODAL - No libraries, just CSS */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Modal: {modalTitle}</h2>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-slate-600 mb-6">If you can see this, the modal works!</p>
            <button 
              onClick={closeModal}
              className="w-full py-3 bg-slate-900 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
