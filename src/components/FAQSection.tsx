import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to hire an electrician in Limerick?",
    a: "The cost of hiring an electrician in Limerick varies depending on the type and scale of work required. For small jobs such as replacing sockets or fitting a light fixture, you can typically expect to pay an hourly rate. Larger projects like full rewires or fuse board upgrades are usually quoted as a fixed price. At Mulcair Electrical Ltd, we provide free, no-obligation quotes so you know exactly what to expect before any work begins. Contact us on 086 3722601 for a competitive quote tailored to your needs."
  },
  {
    q: "How quickly can you respond to an electrical emergency in Limerick?",
    a: "We understand that electrical emergencies require urgent attention. Mulcair Electrical Ltd offers a 24/7 emergency callout service, and we aim to respond as quickly as possible — typically within a couple of hours for locations in and around Limerick city. Whether it's a complete power outage, a tripping fuse board, or a dangerous fault, our experienced electricians will arrive promptly and resolve the issue safely and efficiently."
  },
  {
    q: "What areas do Mulcair Electrical Ltd cover?",
    a: "Based in Limerick, we serve a wide range of counties across Munster and beyond. Our service area includes Limerick, Clare, Tipperary, Cork, Kerry, Galway, Offaly, Laois, Kilkenny, Waterford, Wexford, and Carlow. If you're unsure whether we cover your location, give us a call on 086 3722601 and we'll be happy to help."
  },
  {
    q: "Do I need an electrical inspection before selling my home in Limerick?",
    a: "While a formal electrical inspection isn't a legal requirement for every property sale in Ireland, it is highly recommended and increasingly requested by buyers and their solicitors. An up-to-date Electrical Installation Condition Report (EICR) can give buyers peace of mind and help avoid delays in the sale process. Mulcair Electrical Ltd provides thorough electrical inspections with detailed reports, compliance checks, and expert advice to ensure your property meets current ETCI wiring regulations."
  },
  {
    q: "Are your electricians registered and insured in Ireland?",
    a: "Yes, absolutely. Mulcair Electrical Ltd is RECI (Register of Electrical Contractors of Ireland) registered and Safe Electric certified, meaning all our work is carried out to the highest Irish and European safety standards. We are also fully insured, giving you complete peace of mind on every job. You can always ask to see our credentials before work commences."
  },
  {
    q: "Can you upgrade my fuse board or consumer unit in Limerick?",
    a: "Yes, fuse board and consumer unit upgrades are one of our most common services in Limerick and the surrounding areas. Older fuse boards — particularly those with rewirable fuses or outdated MCBs — can pose a safety risk and may not meet current regulations. Upgrading to a modern consumer unit with RCDs (Residual Current Devices) greatly improves the safety of your home or business. We'll assess your current setup, recommend the most suitable upgrade, and complete the work with minimal disruption to your property."
  }
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 section-alt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Answers to the most common questions we receive from homeowners and
            businesses across Limerick and surrounding counties.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="px-6 md:px-8">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-base leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          Still have questions?{" "}
          <a
            href="tel:0863722601"
            className="font-semibold text-primary hover:text-accent transition-colors underline underline-offset-4"
          >
            Call us on 086 3722601
          </a>{" "}
          — we're happy to help.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;