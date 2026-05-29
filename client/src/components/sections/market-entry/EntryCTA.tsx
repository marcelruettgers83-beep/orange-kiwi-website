import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function EntryCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-10 bg-gradient-to-b from-orange-50 to-white p-12 md:p-24 rounded-[3rem] border border-orange-100 shadow-2xl shadow-orange-900/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-orange-200/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

          <Reveal width="100%">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6 text-foreground">
              Ready to enter the <span className="text-orange-500">Dutch market</span>?
            </h2>
          </Reveal>

          <Reveal delay={0.3} width="100%">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Book a free consultation and we will map out exactly what it takes to set up your
              business in the Netherlands, step by step.
            </p>
          </Reveal>

          <Reveal delay={0.4} width="100%">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="rounded-full px-12 h-16 text-lg shadow-xl shadow-orange-500/30 w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105 duration-300 border-0" asChild>
                <a href="https://tidycal.com/blair5/30-minute-meeting" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-12 h-16 text-lg w-full sm:w-auto border-2 border-border hover:bg-white hover:border-orange-200 hover:text-orange-600 transition-colors bg-white/50 backdrop-blur-sm" asChild>
                <a href="mailto:blair@orangekiwi.eu">
                  <Mail className="mr-2 w-5 h-5" /> Email Blair
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.6} width="100%">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-8 border-t border-orange-200/50">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-1 font-heading">1-2 wks</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Typical BV Setup</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-1 font-heading">English</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Speaking Throughout</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-1 font-heading">One</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Partner, Entry to Exit</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
