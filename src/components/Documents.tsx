import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      title: 'Product Catalog 2024',
      description: 'Complete overview of our product offerings and specifications',
      size: '2.5 MB',
      downloadUrl: '#'
    },
    {
      title: 'User Guide',
      description: 'Comprehensive guide to getting started with our platform',
      size: '1.8 MB',
      downloadUrl: '#'
    },
    {
      title: 'Technical Documentation',
      description: 'Detailed technical specifications and API documentation',
      size: '3.2 MB',
      downloadUrl: '#'
    },
    {
      title: 'Case Studies',
      description: 'Success stories and real-world implementation examples',
      size: '4.1 MB',
      downloadUrl: '#'
    },
    {
      title: 'White Paper',
      description: 'In-depth analysis of industry trends and best practices',
      size: '2.9 MB',
      downloadUrl: '#'
    },
    {
      title: 'Company Brochure',
      description: 'Overview of our company, services, and value proposition',
      size: '1.5 MB',
      downloadUrl: '#'
    }
  ];

  return (
    <section id="documents" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Document Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive collection of resources, guides, and documentation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{doc.title}</CardTitle>
                <CardDescription className="text-sm">{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{doc.size}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(doc.downloadUrl, '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
