import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We learn about your business, your home market and your plans, then map out the cleanest route into the Netherlands.",
  },
  {
    number: "02",
    title: "Choose the Structure",
    description: "We recommend the right legal structure (BV, branch or sole proprietorship) and explain the tax, liability and cost implications.",
  },
  {
    number: "03",
    title: "Incorporation",
    description: "We handle the notary, the deed and KVK registration, and get your company legally established.",
  },
  {
    number: "04",
    title: "Registrations",
    description: "VAT, EORI, UBO and tax registrations are filed so you are cleared to trade and stay compliant.",
  },
  {
    number: "05",
    title: "Operational Setup",
    description: "Banking, payroll and Xero accounting go live, connected so your numbers flow without manual work.",
  },
  {
    number: "06",
    title: "Ongoing & Exit",
    description: "We support you month to month, and if you ever need to wind down, we manage a clean, complete exit.",
  },
];

export function EntryProcess() {
  return (
    <section id="process" className="py-32 bg-foreground text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal width="100%">
          <div className="text-center mb-20">
            <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">From first call to fully operational</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              A clear, step-by-step path into the Dutch market, with one accountant guiding every stage.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <Reveal key={index} delay={(index % 3) * 0.15}>
              <div className="group relative">
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
