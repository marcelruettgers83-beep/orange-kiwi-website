import { Reveal } from "@/components/ui/reveal";
import blairImage from "@assets/Blair_3_1767708470817.png";
import xeroBadge from "@assets/silvbadge-400x195_1767708618647.png";
import cimaBadge from "@assets/ACMA_1767708624934.jpg";

export function About() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-900/10 aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <img 
                  src={blairImage} 
                  alt="Blair Bailey - Founder of Orange Kiwi" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-60 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-200/50 rounded-full blur-xl opacity-60 -z-10" />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.2}>
              <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Meet the Founder</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-4">
                Blair Bailey
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Founder & Owner of Orange Kiwi
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in management accounting and cloud-based financial systems, Blair founded Orange Kiwi to help growing businesses take control of their finances.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-foreground/80">Chartered Management Accountant - ACMA</span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-foreground/80">Certified Xero advisor and implementation specialist</span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-foreground/80">Expertise in building scalable financial systems for SMEs</span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-foreground/80">Passionate about turning complex data into clear decisions</span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-foreground/80">Based in the Netherlands, serving clients across Europe</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="pt-8 mt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">Credentials</p>
                <div className="flex flex-wrap items-center gap-8">
                  <img 
                    src={xeroBadge} 
                    alt="Xero Silver Partner" 
                    className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img 
                    src={cimaBadge} 
                    alt="CIMA - Chartered Institute of Management Accountants" 
                    className="h-14 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
