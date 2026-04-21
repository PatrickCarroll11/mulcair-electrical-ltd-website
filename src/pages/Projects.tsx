import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  images: string[];
}

const projects: Project[] = [
  {
    "id": "commercial-rewire-limerick-city",
    "title": "Full Commercial Rewire, Limerick City",
    "description": "Carried out a complete electrical rewire of a three-storey office building in Limerick city centre, upgrading outdated wiring and installing a modern consumer unit with RCD protection throughout. The project was completed within a tight deadline with minimal disruption to the occupying business, resulting in a fully certified and compliant installation.",
    "category": "Commercial",
    "imageKeyword": "electrician",
    "coverImage": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop"
    ]
  },
  {
    "id": "residential-lighting-installation-clare",
    "title": "Lighting Design & Installation, Co. Clare",
    "description": "Designed and installed a full interior and exterior lighting scheme for a newly built private residence in Ennis, Co. Clare, incorporating recessed LED downlights, feature pendant lighting, and externally rated garden and driveway fittings. The result was an energy-efficient, aesthetically refined lighting setup tailored to the homeowner's specification and signed off with a completion certificate.",
    "category": "Lighting",
    "imageKeyword": "lighting",
    "coverImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
    ]
  },
  {
    "id": "emergency-electrical-repair-tipperary",
    "title": "Emergency Fault Repair, Co. Tipperary",
    "description": "Responded to an emergency callout at a rural farmhouse in Co. Tipperary following a total loss of power caused by a damaged distribution board and faulty earthing system. Our team diagnosed the fault rapidly, replaced the consumer unit, and restored safe power to the property the same day, providing the client with full documentation of remedial works carried out.",
    "category": "Emergency",
    "imageKeyword": "electrical",
    "coverImage": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop"
    ]
  }
];
const allCategories = [...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Projects</span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl">
            A selection of electrical work completed across Limerick and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          {allCategories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {["All", ...allCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    active === cat
                      ? "bg-accent text-accent-foreground border-accent"
                      : "border-border hover:border-accent/40 hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20 border-0 text-xs font-semibold">
                    {project.category}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
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

export default Projects;
