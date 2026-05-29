import { Reveal } from "@/components/ui/reveal";
import { HelpCircle } from "lucide-react";

const questions = [
  "Do you need a Dutch BV, or is a branch or sole proprietorship the better route?",
  "Can you hire staff straight away, or is there a process to follow first?",
  "Do you need a local director or a registered Dutch address?",
  "How do you register for VAT (BTW), and do you need an EORI number to trade?",
  "Which bank will actually open a business account for a foreign-owned company?",
  "How do you stay compliant with the Belastingdienst, KVK and the UBO register?",
];

export function EntryQuestions() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">
                Before You Start
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
                Entering a new market raises a lot of questions.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Setting up in the Netherlands is a real opportunity, but it comes with structural
                decisions that are expensive to get wrong. We answer all of them before you commit,
                so your foundation is right from day one.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <Reveal key={index} delay={index * 0.08} width="100%">
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:border-orange-200 hover:shadow-md transition-all">
                  <HelpCircle className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-foreground/80 leading-relaxed">{question}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
