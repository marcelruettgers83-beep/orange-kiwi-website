import { Reveal } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Rocket, LogOut } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "We set up the right Dutch structure for your business and handle the full incorporation, so you start on solid legal and financial ground.",
    features: [
      "Advice on the right structure (BV, branch, or sole proprietorship)",
      "Dutch BV incorporation via a civil-law notary",
      "Registration with the KVK (Chamber of Commerce)",
      "UBO register and shareholder structure set up correctly",
      "Asset and liability protection built into the structure",
    ],
    highlight: "The right structure from day one means fewer surprises later.",
  },
  {
    icon: Rocket,
    title: "Market Entry Setup",
    description: "Incorporation is only the start. We get every operational system live so you can actually trade, invoice, hire and get paid in the Netherlands.",
    features: [
      "VAT (BTW) and EORI registration with the Belastingdienst",
      "Payroll set up and run each month (via Loon.nl)",
      "Business bank account guidance (Revolut, Wise, and Dutch banks)",
      "Xero accounting configured and integrated from day one",
      "Tax, reporting and compliance calendar in place",
    ],
    highlight: "Everything connected, so your data is entered once and flows everywhere.",
  },
  {
    icon: LogOut,
    title: "Market Exit",
    description: "If the time comes to wind down or restructure, we handle a clean exit, so you leave without loose ends, penalties or lingering liabilities.",
    features: [
      "Deregistration of the entity with the KVK",
      "Liquidation or dissolution managed end to end",
      "Final accounts and tax filings prepared",
      "Belastingdienst and payroll obligations settled",
      "Clear timeline so you know exactly where you stand",
    ],
    highlight: "A tidy close protects your reputation and your peace of mind.",
  },
];

export function EntryServices() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%">
            <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">What We Handle</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Enter, set up and exit. One partner for all three.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From your first conversation to the day you decide to leave, Orange Kiwi is the single
              point of contact for your business in the Netherlands.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group h-full">
                  <Card className="h-full border border-border/60 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 rounded-[2rem] overflow-hidden bg-white hover:-translate-y-1">
                    <CardContent className="p-10 flex flex-col h-full gap-8">
                      <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-500">
                        <Icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-orange-600 transition-colors">{pillar.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8">{pillar.description}</p>

                        <div className="space-y-3 mb-8">
                          {pillar.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-200 mt-2 shrink-0 group-hover:bg-orange-400 transition-colors" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-6 border-t border-border/50">
                        <p className="font-medium text-orange-600 italic">{pillar.highlight}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
