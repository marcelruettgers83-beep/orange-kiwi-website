import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services: Array<{
  title: string;
  description: string;
  features: string[];
  highlight: string;
  guideHref?: string;
  guideLabel?: string;
}> = [
  {
    title: "Bookkeeping & Financial Operations",
    description: "You need reliable numbers to run your business. We make sure your books are accurate, automated, and always up-to-date.",
    features: [
      "Highly automated bill processing",
      "Invoices synced and ready to send",
      "Bank transactions integrated and reconciled",
      "Live cash-flow overview",
      "Debtors and creditors tracked in real time",
      "Automatic reminders based on account positions",
      "Cash-flow forecasts based on real bank data"
    ],
    highlight: "Clean books → clear decisions → fewer surprises.",
    guideHref: "/blog/dutch-bv-accounting-deadlines/",
    guideLabel: "Read the Dutch BV deadline guide"
  },
  {
    title: "Xero Implementation & Systems Architecture",
    description: "Switching to Xero is a chance to rebuild your financial systems so they fit how your business actually works.",
    features: [
      "Set up Xero correctly from day one",
      "Connect your tools so data only needs to be entered once",
      "Build workflows that reduce manual tasks",
      "Use real-time data instead of outdated spreadsheets",
      "Integrate add-ons for inventory, budgeting, consolidation, and more"
    ],
    highlight: "We design systems that give you clarity instead of clutter.",
    guideHref: "/blog/xero-setup-dutch-bv/",
    guideLabel: "Read the Xero setup guide"
  },
  {
    title: "Management Accounting",
    description: "Good decisions rely on good information. We provide ongoing analysis and reporting that helps you understand the story behind your numbers.",
    features: [
      "Monthly performance reports",
      "Budgeting and forecasting",
      "Variance analysis",
      "KPI tracking",
      "Scenario planning",
      "Guidance on operational and financial decisions"
    ],
    highlight: "We meet regularly to review progress, adjust plans, and keep the numbers useful between year-end filings.",
    guideHref: "/blog/english-speaking-accountant-amsterdam-founder-checklist/",
    guideLabel: "Read the accountant checklist"
  },
  {
    title: "Risk Management",
    description: "Every business has risk: cash flow, market changes, pricing pressure, and operational bottlenecks. We help you understand them early enough to act.",
    features: [
      "Risk assessments tailored to your business",
      "Strategies to reduce financial exposure",
      "Practical systems to prevent avoidable errors",
      "Clear frameworks for decision-making"
    ],
    highlight: "This is a bespoke service, shaped around your business model and goals."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%">
            <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Financial and consulting support for bookkeeping, reporting, Xero, and decisions that need cleaner numbers.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group h-full">
                <Card className="h-full border border-border/60 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 rounded-[2rem] overflow-hidden bg-white hover:-translate-y-1">
                  <CardContent className="p-10 flex flex-col h-full gap-8">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-1 bg-orange-500 rounded-full" />
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground/30 group-hover:text-orange-500 transition-colors" />
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">{service.description}</p>
                        
                        <div className="space-y-3 mb-8">
                            {service.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-200 mt-2 shrink-0 group-hover:bg-orange-400 transition-colors" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-border/50">
                        <p className="font-medium text-orange-600 italic">
                            {service.highlight}
                        </p>
                        {service.guideHref && (
                          <a
                            href={service.guideHref}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-800 transition-colors"
                          >
                            {service.guideLabel}
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
