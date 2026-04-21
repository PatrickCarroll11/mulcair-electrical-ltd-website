import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Mulcair Electrical Ltd</span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Professional Electrical service you can depend on.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mulcair Electrical Ltd is a family-owned business based in Limerick dedicated to providing top-notch electrical services. Our skilled electricians are committed to safety, quality, and customer satisfaction, ensuring that every job is completed to the highest standards.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-14">
            We pride ourselves on our reliable service and ability to handle projects of any size..
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-8">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[{"title":"Quality Materials","desc":"We use only the best materials for all our projects."},{"title":"Competitive Pricing","desc":"Our services are competitively priced without compromising on quality."},{"title":"Professional Team","desc":"Our electricians are certified and highly experienced."},{"title":"Wide Coverage","desc":"Serving Limerick and surrounding counties."},{"title":"Customer Satisfaction","desc":"We prioritize customer satisfaction in every job."}].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
