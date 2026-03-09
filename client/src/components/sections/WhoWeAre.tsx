import { Reveal } from "@/components/ui/reveal";
import stockImage from "@assets/stock_images/professional_busines_ce3c3361.jpg";

export function WhoWeAre() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-900/5 aspect-[4/5] lg:aspect-square">
                    <img 
                      src={stockImage} 
                      alt="Team meeting" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </Reveal>

            <div className="space-y-10">
                <Reveal delay={0.2}>
                    <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Who We Are</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
                        A modern accounting partner for growing businesses
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Running a business demands more than submitting returns. You need clean data, reliable insights, and someone who helps you make sense of the numbers.
                    </p>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-border/50">
                        <p className="font-semibold text-lg">We help you:</p>
                        <ul className="space-y-3">
                            {[
                                "Keep your financial data accurate and up-to-date",
                                "Understand what’s really happening inside your business",
                                "Make informed decisions with clear reporting",
                                "Reduce manual work and process bottlenecks",
                                "Improve cash flow and productivity",
                                "Build accounting systems that scale with your business"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
                
                <Reveal delay={0.5}>
                    <p className="text-lg font-medium text-foreground leading-relaxed border-l-4 border-orange-500 pl-6 py-2">
                        We combine strong financial know-how with smart cloud tools like <span className="text-orange-600 font-bold">Xero</span> to make your operations smoother and more predictable.
                    </p>
                </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
}
