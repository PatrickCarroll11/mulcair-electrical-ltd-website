import { Zap, Wrench, HardHat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Zap, Wrench, HardHat };

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    "icon": "Zap",
    "title": "Residential Electrical Services",
    "description": "Comprehensive electrical solutions for your home."
  },
  {
    "icon": "Zap",
    "title": "Commercial Electrical Services",
    "description": "Professional electrical installations and maintenance for businesses."
  },
  {
    "icon": "Zap",
    "title": "Emergency Electrical Repairs",
    "description": "Swift and efficient emergency repair services."
  },
  {
    "icon": "Wrench",
    "title": "Lighting Installations",
    "description": "Custom lighting solutions to brighten up your spaces."
  },
  {
    "icon": "Zap",
    "title": "Electrical Inspections",
    "description": "Thorough inspections to ensure safety and compliance."
  },
  {
    "icon": "HardHat",
    "title": "Energy Efficient Solutions",
    "description": "Eco-friendly electrical solutions to save energy and costs."
  }
];

const ServicesGrid = () => (
  <section className="py-28 bg-background">
    <div className="container">
      <div className="text-center mb-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Mulcair Electrical Ltd provides expert electrical services in Limerick and surrounding areas. Our team is committed to delivering reliable and safe electrical solutions for both residential and commercial clients.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || HardHat;
          return (
            <div
              key={service.title}
              className="group p-8 rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 cursor-default flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300 shrink-0">
                <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground leading-snug">{service.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesGrid;