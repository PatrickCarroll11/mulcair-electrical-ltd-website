import { Star } from "lucide-react";

const testimonials = [
  {
    "text": "Efficient and professional service from start to finish.",
    "author": "Customer, Co. Clare"
  },
  {
    "text": "Highly recommend Mulcair Electrical for any electrical work.",
    "author": "Customer, Co. Cork"
  },
  {
    "text": "Great service and very reliable.",
    "author": "Customer, Co. Galway"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-lg p-6 border shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4 italic text-muted-foreground">"{t.text}"</p>
              <p className="text-sm font-semibold">– {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
