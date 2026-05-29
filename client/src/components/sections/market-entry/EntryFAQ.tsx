import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to live in the Netherlands to set up a company here?",
    answer: "No. You can own and run a Dutch BV as a non-resident. We will talk you through the practical points, such as a registered address and any substance requirements, so your setup holds up with the authorities.",
  },
  {
    question: "How long does it take to form a Dutch BV?",
    answer: "Most incorporations are completed within one to two weeks once we have your documents and the notary appointment is booked. We will give you a clear timeline at the start so there are no surprises.",
  },
  {
    question: "How much share capital do I need?",
    answer: "A Dutch BV can be incorporated with as little as one euro cent of share capital. The bigger questions are usually about structure, tax and how you fund the business, which is exactly what we advise on.",
  },
  {
    question: "Which structure is right for me: a BV, a branch or a sole proprietorship?",
    answer: "It depends on your liability, tax position and plans for growth. A BV is the most common choice and protects your personal assets, but it is not always the best fit. We recommend the structure that actually suits your situation, not a one-size-fits-all answer.",
  },
  {
    question: "Can you handle VAT, payroll and banking too, or just the formation?",
    answer: "All of it. We register you for VAT (BTW) and EORI, set up and run monthly payroll through Loon.nl, guide you to a business bank account that works for foreign-owned companies, and configure Xero so your accounting runs from day one.",
  },
  {
    question: "What if I need to close the company later?",
    answer: "We manage a clean exit. That means deregistration or liquidation with the KVK, final accounts and tax filings, and settling your Belastingdienst and payroll obligations, so you leave with no loose ends.",
  },
  {
    question: "Does everything really happen in English?",
    answer: "Yes. Blair is an English-speaking accountant based in Amsterdam, so you deal with the Dutch authorities through one person who speaks your language and theirs.",
  },
];

export function EntryFAQ() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Reveal width="100%" className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Setting up in the Netherlands, answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Still have a question? Reach out and Blair will answer it personally.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <div className="bg-white rounded-[2rem] border border-border/50 shadow-sm p-8 md:p-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50 last:border-0 px-2">
                  <AccordionTrigger className="text-lg font-bold text-foreground hover:text-orange-600 hover:no-underline py-6 transition-colors text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
