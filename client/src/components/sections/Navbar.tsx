import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "py-4 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
             <span className="text-white font-bold font-heading text-lg leading-none mb-0.5">O</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-heading group-hover:text-primary transition-colors duration-300">
            Orange Kiwi
          </span>
        </a>

        <Button 
          className="rounded-full px-6 font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 bg-foreground text-white hover:bg-foreground/90 hover:scale-105 active:scale-95"
          asChild
        >
          <a href="https://tidycal.com/blair5/30-minute-meeting" target="_blank" rel="noopener noreferrer">
            Book a Consultation
          </a>
        </Button>
      </div>
    </nav>
  );
}
