import { Navbar } from "@/components/sections/Navbar";
import { MarketEntryHero } from "@/components/sections/market-entry/MarketEntryHero";
import { EntryQuestions } from "@/components/sections/market-entry/EntryQuestions";
import { EntryServices } from "@/components/sections/market-entry/EntryServices";
import { EntryProcess } from "@/components/sections/market-entry/EntryProcess";
import { WhyOrangeKiwi } from "@/components/sections/market-entry/WhyOrangeKiwi";
import { EntryFAQ } from "@/components/sections/market-entry/EntryFAQ";
import { EntryCTA } from "@/components/sections/market-entry/EntryCTA";
import { Footer } from "@/components/sections/Footer";

export default function MarketEntry() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <MarketEntryHero />
        <EntryQuestions />
        <EntryServices />
        <EntryProcess />
        <WhyOrangeKiwi />
        <EntryFAQ />
        <EntryCTA />
      </main>
      <Footer />
    </div>
  );
}
