import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Home, BarChart3, TrendingUp, User, Signal, Wifi, Battery } from 'lucide-react';

export function PhoneMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);

  const activities = [
    { icon: '☕', name: 'Starbucks Coffee', category: 'FOOD & DRINK', amount: 'CHF 8.45', roundup: '+0.55' },
    { icon: '🚗', name: 'Uber Ride', category: 'TRANSPORT', amount: 'CHF 14.20', roundup: '+0.80' },
    { icon: '🛒', name: 'Migros Super', category: 'SHOPPING', amount: 'CHF 127.30', roundup: '+0.70' },
    { icon: '⛽', name: 'Shell Gas', category: 'TRANSPORT', amount: 'CHF 89.23', roundup: '+0.77' },
  ];

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        style={{ y: phoneY, rotateY: phoneRotate }}
        className="relative w-[300px] sm:w-[340px] lg:w-[380px] mx-auto perspective-1000"
      >
        {/* Phone Shadow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[3.5rem] blur-2xl" />

        {/* Phone Frame - ALWAYS LIGHT MODE */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative bg-[#f5f5f7] rounded-[2.75rem] p-2 shadow-2xl border border-slate-300/50"
          style={{ transform: 'rotateY(-8deg) rotateX(4deg)' }}
        >
          {/* Dynamic Island / Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20" />

          {/* Screen - ALWAYS WHITE BACKGROUND */}
          <div className="relative bg-white rounded-[2.25rem] overflow-hidden aspect-[9/19.5]">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 z-10">
              <span className="text-sm font-semibold text-slate-900">09:41</span>
              <div className="flex items-center gap-1.5">
                <Signal className="w-4 h-4 text-slate-900" />
                <Wifi className="w-4 h-4 text-slate-900" />
                <Battery className="w-5 h-5 text-slate-900" />
              </div>
            </div>

            {/* App Content */}
            <div className="absolute top-14 left-0 right-0 bottom-16 overflow-y-auto px-4">
              {/* Greeting */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-slate-900">Hi, Alex</h2>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Your wealth is growing automatically</p>
              </div>

              {/* Portfolio Value Card */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 mb-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-100 uppercase tracking-wide">Portfolio Value</span>
                  <div className="flex items-center gap-1 bg-white/20 rounded-full px-2 py-0.5">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs font-semibold">12.4%</span>
                  </div>
                </div>
                <p className="text-3xl font-bold mb-1">CHF 2'847.32</p>
                <div className="flex items-center justify-between">
                  <div className="h-1 flex-1 bg-white/30 rounded-full mr-3">
                    <div className="h-full w-[65%] bg-white rounded-full" />
                  </div>
                  <span className="text-xs text-blue-100">65% to goal</span>
                </div>
              </div>

              {/* Learn & Earn */}
              <div className="bg-slate-50 rounded-xl p-3 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📚</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Learn & Earn</p>
                    <p className="text-xs text-slate-500">Level 2 • <span className="text-emerald-600 font-medium">120/200 pts</span></p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-slate-500 text-xs">›</span>
                </div>
              </div>

              {/* Saved Today & Roundups Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Saved Today</p>
                  <p className="text-xl font-bold text-slate-900">CHF 12.50</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">+</span>
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wide">Roundups</p>
                  </div>
                  <p className="text-xl font-bold text-slate-900">CHF 3.45</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-slate-900">Recent Activity</p>
                  <button className="text-xs text-blue-600 font-medium">See all</button>
                </div>
                <div className="space-y-3">
                  {activities.map((activity, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-lg">
                          {activity.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{activity.name}</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wide">{activity.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-900">{activity.amount}</p>
                        <p className="text-xs text-emerald-600 font-medium">+{activity.roundup}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-100 flex items-center justify-around px-2">
              {[
                { icon: Home, label: 'Home', active: true },
                { icon: BarChart3, label: 'Activity', active: false },
                { icon: TrendingUp, label: 'Invest', active: false },
                { icon: User, label: 'Profile', active: false },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-600' : 'text-slate-400'}`} />
                  <p className={`text-[10px] ${item.active ? 'text-blue-600 font-medium' : 'text-slate-400'}`}>
                    {item.label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg shadow-emerald-500/30 flex items-center justify-center"
        >
          <TrendingUp className="w-6 h-6 text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -bottom-2 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/30 flex items-center justify-center"
        >
          <span className="text-white text-lg font-bold">+</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
