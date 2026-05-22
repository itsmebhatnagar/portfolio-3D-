import { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="h-screen w-full flex flex-col clip-overflow relative overflow-hidden bg-[#0C0C0C]">
      <FadeIn delay={0} y={-20} className="w-full relative z-20 shrink-0">
        <nav className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 z-50">
          <div className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter text-[#D7E2EA]">Harshil</div>
          <div className="hidden md:flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-sm lg:text-base">
            <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
            <a href="#education" className="hover:opacity-70 transition-opacity duration-200">Education</a>
            <a href="#skills" className="hover:opacity-70 transition-opacity duration-200">Skills</a>
            <a href="#services" className="hover:opacity-70 transition-opacity duration-200">Services</a>
            <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
            <a href="#extra" className="hover:opacity-70 transition-opacity duration-200">Extra</a>
          </div>
        </nav>
      </FadeIn>

      <div className="flex-1 min-h-0 w-full relative z-20 flex flex-col pt-4 sm:pt-6 lg:pt-10 pb-4">
        <div className="w-full flex justify-center shrink-0">
          <FadeIn delay={0.15} y={40} className="w-full relative z-10">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[10.5vw] text-center select-none pb-0 sm:pb-8 z-20 relative">
              Hi, i&apos;m harshil
            </h1>
          </FadeIn>
        </div>
        
        <div className="flex-1 min-h-0 w-full relative flex justify-center items-end -mt-24 sm:mt-0">
          <FadeIn delay={0.6} y={30} className="pointer-events-none w-full h-full flex justify-center items-end">
            <Magnet 
              className="pointer-events-auto h-full flex justify-center items-end" 
              padding={150} 
              strength={3}
            >
              <img 
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
                alt="Harshil Portrait" 
                className="w-auto max-w-[95%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-full object-contain object-bottom drop-shadow-2xl scale-[1.25] sm:scale-100 origin-bottom"
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Mobile Bottom Hamburger Menu */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <div className="pointer-events-auto relative flex flex-col items-center">
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 bg-[#131313]/90 backdrop-blur-xl border border-[rgba(215,226,234,0.1)] rounded-3xl p-1.5 flex flex-col shadow-2xl min-w-[160px]"
              >
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs text-center hover:bg-[rgba(215,226,234,0.1)] py-2.5 px-4 rounded-xl transition-colors">About</a>
                <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs text-center hover:bg-[rgba(215,226,234,0.1)] py-2.5 px-4 rounded-xl transition-colors">Education</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs text-center hover:bg-[rgba(215,226,234,0.1)] py-2.5 px-4 rounded-xl transition-colors">Skills</a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs text-center hover:bg-[rgba(215,226,234,0.1)] py-2.5 px-4 rounded-xl transition-colors">Services</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs text-center hover:bg-[rgba(215,226,234,0.1)] py-2.5 px-4 rounded-xl transition-colors">Projects</a>
                <a href="#extra" onClick={() => setIsMobileMenuOpen(false)} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs text-center hover:bg-[rgba(215,226,234,0.1)] py-2.5 px-4 rounded-xl transition-colors">Extra</a>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-[#D7E2EA] text-[#0C0C0C] p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </section>
  );
}
