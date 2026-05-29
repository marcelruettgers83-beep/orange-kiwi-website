import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import xeroBadge from "@assets/silvbadge-400x195_1767708618647.png";
import cimaBadge from "@assets/ACMA_1767708624934.jpg";

const reasons = [
  "English-speaking, so nothing gets lost in translation with Dutch authorities",
  "Chartered Management Accountant (ACMA) based in Amsterdam",
  "Xero Silver Partner, with your accounting set up right from the start",
  "One point of contact for formation, tax, payroll, banking and exit",
  "Practical, founder-friendly advice instead of jargon and paperwork",
];

export function WhyOrangeKiwi() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <Reveal>
              <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Why Orange Kiwi</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-4">
                A local expert who speaks your language.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most foreign founders entering the Netherlands juggle a notary, a tax advisor, a
                payroll provider and a bookkeeper, in a language they do not speak. Orange Kiwi is all
                of that in one place, run by an accountant who has guided expats and international
                businesses into the Dutch market for years.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-4 pt-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-foreground/80">{reason}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} width="100%">
            <div className="relative">
              <div className="relative rounded-[2.5rem] bg-gradient-to-b from-orange-50 to-white border border-orange-100 shadow-2xl shadow-orange-900/10 p-10 md:p-12 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <span className="text-white font-bold font-heading text-2xl leading-none">BB</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold font-heading text-foreground">Blair Bailey</p>
                    <p className="text-muted-foreground">Founder, Orange Kiwi</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>English-speaking accountant in Amsterdam, Netherlands</span>
                </div>

                <div className="pt-8 border-t border-orange-200/50">
                  <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">Credentials</p>
                  <div className="flex flex-wrap items-center gap-8 mb-8">
                    <img
                      src={xeroBadge}
                      alt="Xero Silver Partner"
                      loading="lazy"
                      className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <img
                      src={cimaBadge}
                      alt="CIMA - Chartered Institute of Management Accountants"
                      loading="lazy"
                      className="h-14 object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <Button className="w-full rounded-full h-12 bg-foreground text-white hover:bg-foreground/90 font-semibold" asChild>
                    <a href="https://tidycal.com/blair5/30-minute-meeting" target="_blank" rel="noopener noreferrer">
                      Talk to Blair
                    </a>
                  </Button>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-60 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-200/50 rounded-full blur-xl opacity-60 -z-10" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
