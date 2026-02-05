import { motion } from 'framer-motion';
import { PhoneMockup } from '@/components/PhoneMockup';
import { EmailCaptureForm } from '@/components/EmailCaptureForm';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300">
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(slate-900 1px, transparent 1px), linear-gradient(90deg, slate-900 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-teal-500/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-teal-500/10 via-blue-500/15 to-purple-500/10 rounded-full blur-3xl"
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-20 px-6 lg:px-12 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/logo.png" 
              alt="SpareVest" 
              className="h-12 w-auto object-contain"
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('ai-coach')}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              AI Coach
            </button>
          </div>
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 lg:px-12 pt-8 lg:pt-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text & Form */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-full">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Launching soon in Switzerland</span>
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[1.1]">
                  Grow your wealth{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                    automatically
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                  Be among the first Swiss investors to build wealth on autopilot.
                  <br />
                  <span className="font-bold">Waitinglist members receive updates and exclusive early benefits.</span> </p>
              </motion.div>

              {/* Social Proof Mini */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex items-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-slate-900"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Early adopters joining</span>
                </div>
              </motion.div>

              {/* Form */}
              <div id="waitlist" className="max-w-md">
                <EmailCaptureForm />
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex justify-center lg:justify-end"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
