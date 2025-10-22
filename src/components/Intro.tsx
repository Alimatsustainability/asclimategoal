import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import introImage from '@/assets/Brand-Alimat-Sustainability-Climate-Goal-Image.jpg';

const About = () => {
  const features = [
    {
      title: 'Vision',
      description: 'A climate-resilient Africa built on education and sustainable action.'
    },
    {
      title: 'Mission',
      description:
        'To raise awareness and drive climate action through learning, creativity, and youth empowerment.'
    },
    {
      title: 'Core Values',
      description: 'Education | Inclusion | Sustainability | Innovation | Community'
    }
  ];

  return (
    <section id="intro" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 md:order-1">
            <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth">
              <img
                src={introImage}
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Introduction to Climate Change in Africa
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Climate change is not just a global issue — it’s a story that affects every home, business, and community in Africa.
              Through this learning hub, we invite you to read, write, and explore materials that help you understand the Negligence 
              of Climate Change in Africa and take meaningful action.
            </p>
            {/* <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to empower individuals and businesses with the knowledge and tools they need to thrive in today's fast-paced digital landscape.
            </p> */}

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">
                    <strong className="font-semibold">{feature.title}:</strong> {feature.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
