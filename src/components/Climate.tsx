import { Card } from '@/components/ui/card';

import reforestationImage from '@/assets/climates/Reforestation Projects.jpg';
import wasteManagementImage from '@/assets/climates/Waste Management  & Recycling Circular Economy.jpg';
import bioenergyImage from '@/assets/climates/Bioenergy &Biofuels.jpg';
import smartAgricultureImage from '@/assets/climates/Climate - Smart Agriculture & Agritech.jpg';
import greenBuildingImage from '@/assets/climates/Green Building & Sustainable Materials.jpg';
import solarEnergyImage from '@/assets/climates/Solar Energy & Grid Power Solutions.jpg';

const Climate = () => {
  const climateIdeas = [
    { title: 'Reforestation Projects', image: reforestationImage },
    { title: 'Waste Management & Circular Economy', image: wasteManagementImage },
    { title: 'Green Building & Sustainable Materials', image: greenBuildingImage },
    { title: 'Bioenergy & Biofuels', image: bioenergyImage },
    { title: 'Climate-Smart Agriculture & Agritech', image: smartAgricultureImage },
    { title: 'Solar Energy & Grid Power Solutions', image: solarEnergyImage },
  ];

  return (
    <section id="climate" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Climate-Oriented Business Ideas for Africa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore emerging opportunities that drive sustainability, resilience, and economic growth across the continent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {climateIdeas.map((idea) => (
            <Card key={idea.title} className="overflow-hidden shadow-card hover:shadow-hover transition-smooth">
              <div className="relative">
                <img src={idea.image} alt={idea.title} className="w-full h-auto object-contain" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white drop-shadow">
                  {idea.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Climate;
