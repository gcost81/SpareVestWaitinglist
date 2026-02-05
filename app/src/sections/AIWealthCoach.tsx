import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Sparkles, Send, Bot } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'ai';
  message: string;
  isTyping?: boolean;
}

export function AIWealthCoach() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [animationStarted, setAnimationStarted] = useState(false);

  const conversation = [
    { type: 'user' as const, message: 'What if I invested 5 CHF daily?' },
    { type: 'ai' as const, message: "Assuming a 7.5% annual return tracking the S&P 500 index: In 5 years: CHF 10,600. In 10 years: CHF 25'800." },
    { type: 'user' as const, message: 'How much could I save on coffee?' },
    { type: 'ai' as const, message: "Assuming a 7.5% annual return in the S&P 500 index: Skip 2 coffees/week = CHF 416/year invested = CHF 5'885 in 10 years." },
  ];

  useEffect(() => {
    if (isInView && !animationStarted) {
      setAnimationStarted(true);
      playConversation();
    }
  }, [isInView]);

  const playConversation = async () => {
    // First question
    await new Promise(resolve => setTimeout(resolve, 500));
    setMessages([{ type: 'user', message: conversation[0].message }]);

    // First AI response with typing effect
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMessages(prev => [...prev, { type: 'ai', message: '', isTyping: true }]);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setMessages(prev => [
      ...prev.slice(0, -1),
      { type: 'ai', message: conversation[1].message, isTyping: false }
    ]);

    // Second question
    await new Promise(resolve => setTimeout(resolve, 500));
    setMessages(prev => [...prev, { type: 'user', message: conversation[2].message }]);

    // Second AI response with typing effect
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMessages(prev => [...prev, { type: 'ai', message: '', isTyping: true }]);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setMessages(prev => [
      ...prev.slice(0, -1),
      { type: 'ai', message: conversation[3].message, isTyping: false }
    ]);
  };

  const features = [
    'Personalized investment scenarios',
    'Spending pattern analysis',
    'Smart saving recommendations',
    '24/7 financial guidance',
  ];

  return (
    <section id="ai-coach" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-900 dark:via-blue-950/10 dark:to-slate-900" />

      <div className="relative z-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6"
            >
              {/* Section Label */}
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-500" />
                <span className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  AI-Powered
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Meet Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  AI Wealth Coach
                </span>
              </h2>

              {/* Subheadline */}
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200">
                Ask. Learn. Optimize.
              </h3>

              {/* Description */}
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                Our AI analyzes your spending and answers questions like "How much could I save 
                if I invested my coffee money?" Get personalized insights to accelerate your wealth.
              </p>

              {/* Features List */}
              <div className="space-y-4 pt-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-teal-500" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/30 border border-white/50 dark:border-slate-700/50 overflow-hidden">
                {/* Chat Header */}
                <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">SpareVest AI</p>
                    <p className="text-xs text-blue-100">Always here to help</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-blue-100">Online</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-6 space-y-4 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-800/50 dark:to-slate-800 min-h-[320px] max-h-[400px] overflow-y-auto">
                  {messages.length === 0 && (
                    <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                      Start scrolling to see the conversation...
                    </div>
                  )}
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.type === 'ai' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.type === 'user'
                            ? 'bg-blue-600 text-white rounded-br-md'
                            : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-bl-md shadow-sm'
                        }`}
                      >
                        {msg.isTyping ? (
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        ) : (
                          msg.message.split("CHF").map((part, idx) => (
                            idx === 0 ? part : <span key={idx}><span className="font-bold text-emerald-600 dark:text-emerald-400">CHF</span>{part}</span>
                          ))
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="px-6 py-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-11 px-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center text-sm text-slate-400 dark:text-slate-500">
                      Type your question...
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25"
                    >
                      <Send className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
