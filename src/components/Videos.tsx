import { Card } from '@/components/ui/card';

const Videos = () => {
  const videos = [
    {
      title: 'Introduction to Our Platform',
      embedId: 'dQw4w9WgXcQ', // Replace with actual video ID
      description: 'Learn the basics of our platform in this comprehensive introduction'
    },
    {
      title: 'Advanced Features Tutorial',
      embedId: 'dQw4w9WgXcQ', // Replace with actual video ID
      description: 'Explore advanced features and optimization techniques'
    },
    {
      title: 'Customer Success Stories',
      embedId: 'dQw4w9WgXcQ', // Replace with actual video ID
      description: 'Hear from our satisfied customers about their experiences'
    },
    {
      title: 'Best Practices Webinar',
      embedId: 'dQw4w9WgXcQ', // Replace with actual video ID
      description: 'Industry experts share their insights and best practices'
    },
    {
      title: 'Product Demo',
      embedId: 'dQw4w9WgXcQ', // Replace with actual video ID
      description: 'See our product in action with this detailed demonstration'
    },
    {
      title: 'Getting Started Guide',
      embedId: 'dQw4w9WgXcQ', // Replace with actual video ID
      description: 'Step-by-step guide to help you get started quickly'
    }
  ];

  return (
    <section id="videos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Video Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our collection of tutorials, demos, and customer testimonials
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group">
              <div className="relative aspect-video bg-muted">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
