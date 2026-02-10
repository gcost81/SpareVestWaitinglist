import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
              />
            </Dialog.Overlay>

            {/* Modal Content */}
            <Dialog.Portal forceMount>
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                <Dialog.Content asChild forceMount>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.25, 0.46, 0.45, 0.94] 
                    }}
                    className="relative w-full max-w-[600px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                  >
                    {/* Close button */}
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Scrollable content */}
                    <div className="overflow-y-auto p-6 sm:p-8">
                      {/* Title */}
                      <Dialog.Title className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 pr-8">
                        {title}
                      </Dialog.Title>

                      {/* Content */}
                      <div className="prose dark:prose-invert max-w-none">
                        {children}
                      </div>

                      {/* Close button at bottom */}
                      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <button
                          onClick={onClose}
                          className="w-full sm:w-auto px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                        >
                          <span>Got it</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </div>
            </Dialog.Portal>
          </>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
