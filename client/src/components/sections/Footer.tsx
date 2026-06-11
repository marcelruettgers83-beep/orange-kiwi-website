import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-border">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground order-2 md:order-1">
          <span>© {new Date().getFullYear()} Orange Kiwi - English-Speaking Accountant in Amsterdam, Netherlands</span>
        </div>
        
        <div className="flex items-center gap-8 order-1 md:order-2">
          <a href="mailto:blair@orangekiwi.eu" className="text-muted-foreground hover:text-primary transition-colors text-sm">blair@orangekiwi.eu</a>
          <a href="tel:+31611003294" className="text-muted-foreground hover:text-primary transition-colors text-sm">+31611003294</a>
          <a href="https://www.linkedin.com/in/blair-bailey-acma-21437b4/" target="_blank" rel="noopener noreferrer" aria-label="Blair Bailey on LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-white transition-all text-muted-foreground">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
