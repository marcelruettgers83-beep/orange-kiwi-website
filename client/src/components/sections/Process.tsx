import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We start with a conversation to understand your business, current financial setup, and goals."
  },
  {
    number: "02",
    title: "Review & Strategy",
    description: "We review your systems and numbers, then outline practical improvements for your bookkeeping, reporting, and workflows."
  },
  {
    number: "03",
    title: "Implementation",
    description: "We set up or refine your tools and processes, and work closely with your team to make the transition smooth."
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "We stay involved with regular check-ins, reporting, and advice so you keep improving — not just once a year."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-foreground text-white overflow-hidden relative">
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal width="100%">
            <div className="text-center mb-20">
                <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">Our Process</span>
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">How We Work With You</h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                    A simple, practical process that delivers clarity and better decisions for your business.
                </p>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {steps.map((step, index) => (
                <Reveal key={index} delay={index * 0.15}>
                    <div className="group relative pt-8">
                        {/* Dot on line */}
                        <div className="hidden md:block absolute top-[44px] left-0 w-3 h-3 rounded-full bg-foreground border-2 border-orange-500 z-10 -translate-y-1/2" />
                        
                        <div className="text-5xl font-bold text-white/10 group-hover:text-orange-500 transition-colors duration-500 mb-6 font-heading">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">{step.title}</h3>
                        <p className="text-white/60 leading-relaxed text-sm">{step.description}</p>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
