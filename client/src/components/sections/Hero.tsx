import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/modern_financial_analytics_dashboard_visualization_in_isometric_view.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Subtle, premium background gradient - cleaner than before */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-50/40 via-white to-white z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-8 max-w-2xl">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-[1.1] tracking-tight">
                Modern Accounting for Businesses That Want <span className="text-orange-500">Clarity</span>, <span className="text-orange-500">Control</span>, and Better Decisions
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-normal">
                Accurate books, clear reporting, and practical guidance — so you always know where your business stands and what to do next.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="w-full">
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="h-14 rounded-full px-8 text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 duration-300 text-white border-0 font-medium" asChild>
                  <a href="https://tidycal.com/blair5/30-minute-meeting" target="_blank" rel="noopener noreferrer">
                    Book a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="h-14 rounded-full px-8 text-base bg-white hover:bg-orange-50 border border-border hover:border-orange-200 text-foreground transition-all hover:-translate-y-0.5 font-medium">
                  View Services
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:h-auto flex items-center justify-center lg:justify-end">
             <Reveal delay={0.4} className="w-full max-w-md lg:max-w-full">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-border/40 bg-white/50 backdrop-blur-sm group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                  <img 
                    src={heroImage} 
                    alt="Financial Dashboard Analytics" 
                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Decorative blob behind image */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply" />
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -z-10 mix-blend-multiply" />
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
