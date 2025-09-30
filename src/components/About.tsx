import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

const About = () => {
  const features = [
    'Industry-leading expertise',
    'Comprehensive resources',
    'Dedicated support team',
    'Proven track record'
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 md:order-1">
            <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth">
              <img
                src={aboutImage}
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a leading organization dedicated to providing exceptional resources and services to our clients. With years of experience in the industry, we've built a reputation for excellence and innovation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to empower individuals and businesses with the knowledge and tools they need to thrive in today's fast-paced digital landscape.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
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
