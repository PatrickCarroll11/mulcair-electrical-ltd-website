export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
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
export const categories: string[] = [...new Set(projects.map((p) => p.category))];
