import { CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  "Safe Electric",
  "RECI Registered",
  "Fully Insured",
];

export default function TAMSSection() {
  return (
    <section className="py-24 bg-primary/[0.04] border-y border-primary/10">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        {/* Icon Circle */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shadow-sm">
            <Zap className="h-8 w-8 text-accent" />
          </div>
        </div>

        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          Credentials & Compliance
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          Qualified and Insured{" "}
          <br className="hidden sm:block" />
          Electrical Services
        </h2>

        {/* Body */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
          Our team is fully qualified and insured, ensuring peace of mind with
          every project. Trust Mulcair Electrical Ltd for your electrical needs
          — whether it's a routine installation or a complex commercial fit-out,
          we meet every job with the highest professional standards.
        </p>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="mb-14 px-8 py-6 h-auto font-semibold shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg"
        >
          <Link to="/contact">Ask About Our Services</Link>
        </Button>

        {/* Badge Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <span className="text-base font-semibold text-foreground text-center leading-snug">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}