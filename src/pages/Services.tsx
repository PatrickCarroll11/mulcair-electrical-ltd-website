import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Zap,
  Lightbulb,
  ClipboardCheck,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "Residential Electrical Services",
    seo: "Residential Electrician Limerick",
    description:
      "We offer a full range of electrical services for your home, from installations to repairs, ensuring safety and efficiency in every project.",
    features: [
      "Safety Inspections",
      "Wiring & Rewiring",
      "Fuse Box Upgrades",
      "Appliance Installations",
      "Lighting Solutions",
    ],
    icon: Home,
  },
  {
    title: "Commercial Electrical Services",
    seo: "Commercial Electrician Limerick",
    description:
      "Our team provides reliable electrical services for businesses, ensuring minimal downtime and compliance with all safety regulations.",
    features: [
      "Office Wiring",
      "Data Cabling",
      "Security Systems",
      "Lighting Fixtures",
      "Maintenance Contracts",
    ],
    icon: Building2,
  },
  {
    title: "Emergency Electrical Repairs",
    seo: "Emergency Electrician Limerick",
    description:
      "Available 24/7, our emergency services ensure that any electrical issue is resolved quickly and safely, minimizing inconvenience.",
    features: [
      "24/7 Availability",
      "Quick Response",
      "Safety Assured",
      "Affordable Rates",
      "Experienced Technicians",
    ],
    icon: Zap,
  },
  {
    title: "Lighting Installations",
    seo: "Lighting Electrician Limerick",
    description:
      "From ambient lighting to security lights, we install and maintain a wide range of lighting solutions to enhance your property.",
    features: [
      "LED Lighting",
      "Outdoor Lighting",
      "Smart Lighting",
      "Design & Consultation",
      "Installation & Maintenance",
    ],
    icon: Lightbulb,
  },
  {
    title: "Electrical Inspections",
    seo: "Electrical Safety Inspections Limerick",
    description:
      "Our thorough inspections help identify potential hazards and ensure that your electrical systems are compliant with current standards.",
    features: [
      "Detailed Reports",
      "Compliance Checks",
      "Risk Assessments",
      "Expert Advice",
      "Safety First",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "Energy Efficient Solutions",
    seo: "Energy Efficient Electrician Limerick",
    description:
      "We provide solutions that reduce energy consumption and costs, helping you contribute to a greener environment.",
    features: [
      "Energy Audits",
      "Eco-Friendly Products",
      "Cost Saving Solutions",
      "Sustainable Practices",
      "Expert Recommendations",
    ],
    icon: Leaf,
  },
];

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Our Electrical
            <br />
            Services
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
            From residential rewires to commercial installations and 24/7
            emergency call-outs — Mulcair Electrical Ltd has you covered across
            Limerick and beyond.
          </p>
          <Button
            asChild
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg shadow-lg font-bold text-base hover:opacity-90 transition-opacity"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Service Detail Cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Expert Electrical Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need, Done Right
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Every service is carried out by qualified, fully insured
              electricians who take pride in delivering safe, reliable results.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-300 overflow-hidden ${
                    isEven ? "bg-card" : "section-alt"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Left Column */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                          <Icon className="h-7 w-7 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                            {service.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="mt-2 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border-0"
                          >
                            {service.seo}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button
                        asChild
                        className="bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow font-bold w-fit hover:opacity-90 transition-opacity"
                      >
                        <Link to="/contact">Enquire Now</Link>
                      </Button>
                    </div>

                    {/* Right Column */}
                    <div
                      className={`p-8 md:p-10 flex flex-col justify-center lg:border-l border-t lg:border-t-0 border-border/60 ${
                        isEven ? "bg-primary/5" : "bg-accent/5"
                      }`}
                    >
                      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
                        What's Included
                      </p>
                      <ul className="flex flex-col gap-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-foreground"
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
                              <CheckCircle2 className="h-4 w-4 text-accent" />
                            </span>
                            <span className="text-base font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="section-alt py-14 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Customers", value: "400+" },
              { label: "Counties Covered", value: "12" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <span className="text-4xl font-black text-primary">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}