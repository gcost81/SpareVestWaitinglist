import { ThemeProvider } from '@/contexts/ThemeContext';
import { Hero } from '@/sections/Hero';
import { AIWealthCoach } from '@/sections/AIWealthCoach';
import { Features } from '@/sections/Features';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-slate-900 font-sans antialiased transition-colors duration-300">
        <Hero />
        <AIWealthCoach />
        <Features />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
