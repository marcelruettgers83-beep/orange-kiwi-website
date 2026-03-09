import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "New to Xero?",
    answer: "Xero is very easy to use — that’s exactly why we love it. Most clients get the hang of it quickly, and Xero also offers great support and clear video tutorials if you ever get stuck."
  },
  {
    question: "Want a quick look before deciding?",
    answer: "Of course. We’re happy to walk you through Xero in a short demo so you can see how it works and whether it fits your business."
  },
  {
    question: "Switching from another accounting system?",
    answer: "No problem. We’ll handle the move to Xero for you and make sure key figures from previous years are carried over, so you can still compare results year on year."
  },
  {
    question: "Which banks work with Xero?",
    answer: "Xero supports many bank feeds through Open Banking. We usually recommend Revolut (it syncs perfectly) and Wise as a solid alternative. Dutch banks like ING and ABN AMRO are catching up — until then, we’ll help you import bank statements manually."
  },
  {
    question: "Is Xero right for my business?",
    answer: "If you run a small or medium-sized business, chances are Xero is a great fit. It’s flexible, scalable, and works well for many industries."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We’re here from day one. From setting up Xero and training you, to ongoing support whenever you need it — you’re never on your own."
  },
  {
    question: "How do we get started?",
    answer: "Just get in touch. We’ll talk through your needs, explain how we work, and take care of the setup."
  },
  {
    question: "And payroll?",
    answer: "Xero doesn’t handle Dutch payroll directly. We use Loon.nl and book everything neatly into Xero each month — simple and seamless for you."
  }
];

export function FAQ() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Reveal width="100%" className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Everything you need to know
          </h2>
          <p className="text-lg text-muted-foreground">
            Can’t find the answer you’re looking for? Reach out to our team.
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
