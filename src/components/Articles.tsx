import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: 'The Future of Digital Transformation',
      description: 'Exploring emerging trends and technologies shaping the digital landscape in 2024 and beyond',
      date: 'March 15, 2024',
      readTime: '5 min read',
      externalUrl: 'https://example.com/article1'
    },
    {
      title: 'Best Practices for Remote Teams',
      description: 'Essential strategies and tools for managing and collaborating with distributed teams effectively',
      date: 'March 10, 2024',
      readTime: '7 min read',
      externalUrl: 'https://example.com/article2'
    },
    {
      title: 'Data Security in the Modern Era',
      description: 'Comprehensive guide to protecting your organization\'s data in an increasingly connected world',
      date: 'March 5, 2024',
      readTime: '6 min read',
      externalUrl: 'https://example.com/article3'
    },
    {
      title: 'Maximizing Productivity with Automation',
      description: 'How to leverage automation tools to streamline workflows and boost team efficiency',
      date: 'February 28, 2024',
      readTime: '8 min read',
      externalUrl: 'https://example.com/article4'
    },
    {
      title: 'Customer Experience Optimization',
      description: 'Proven techniques to enhance customer satisfaction and build lasting relationships',
      date: 'February 20, 2024',
      readTime: '6 min read',
      externalUrl: 'https://example.com/article5'
    },
    {
      title: 'Sustainable Business Practices',
      description: 'Implementing eco-friendly strategies that benefit both your business and the environment',
      date: 'February 15, 2024',
      readTime: '5 min read',
      externalUrl: 'https://example.com/article6'
    }
  ];

  return (
    <section id="articles" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest insights, tips, and industry analysis
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth group flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {article.title}
                </CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full transition-smooth hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(article.externalUrl, '_blank')}
                >
                  Read More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
