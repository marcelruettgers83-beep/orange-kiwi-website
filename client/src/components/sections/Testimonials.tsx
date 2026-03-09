import { Reveal } from "@/components/ui/reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Orange Kiwi helped us finally understand our numbers. Their guidance and clear reporting have made day-to-day decisions much easier.",
    author: "Client Name",
    role: "Role, Company",
  },
  {
    quote: "Orange Kiwi helped us finally understand our numbers. Their guidance and clear reporting have made day-to-day decisions much easier.",
    author: "Client Name",
    role: "Role, Company",
  },
  {
    quote: "Orange Kiwi helped us finally understand our numbers. Their guidance and clear reporting have made day-to-day decisions much easier.",
    author: "Client Name",
    role: "Role, Company",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-orange-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal width="100%" className="text-center mb-20">
          <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">What Our Clients Say</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-border/50 h-full flex flex-col justify-between hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group">
                <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-medium italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold font-heading text-sm">{t.author}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
