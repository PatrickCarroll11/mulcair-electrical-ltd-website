import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const recentProjects = [
  {
    "id": "commercial-rewire-limerick-city",
    "title": "Full Commercial Rewire, Limerick City",
    "description": "Carried out a complete electrical rewire of a three-storey office building in Limerick city centre, upgrading outdated wiring and installing a modern consumer unit with RCD protection throughout. The project was completed within a tight deadline with minimal disruption to the occupying business, resulting in a fully certified and compliant installation.",
    "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "residential-lighting-installation-clare",
    "title": "Lighting Design & Installation, Co. Clare",
    "description": "Designed and installed a full interior and exterior lighting scheme for a newly built private residence in Ennis, Co. Clare, incorporating recessed LED downlights, feature pendant lighting, and externally rated garden and driveway fittings. The result was an energy-efficient, aesthetically refined lighting setup tailored to the homeowner's specification and signed off with a completion certificate.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "emergency-electrical-repair-tipperary",
    "title": "Emergency Fault Repair, Co. Tipperary",
    "description": "Responded to an emergency callout at a rural farmhouse in Co. Tipperary following a total loss of power caused by a damaged distribution board and faulty earthing system. Our team diagnosed the fault rapidly, replaced the consumer unit, and restored safe power to the property the same day, providing the client with full documentation of remedial works carried out.",
    "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop"
  }
];

const RecentWork = () => (
  <section className="py-24 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A sample of recent electrical projects completed across Limerick and surrounding areas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {recentProjects.map((project) => (
          <Link key={project.id} to="/projects" className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="outline" className="px-6">
          <Link to="/projects" className="flex items-center gap-2">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default RecentWork;