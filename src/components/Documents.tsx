import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      title: '📘 Understanding Climate Change',
      description: 'Learn the causes, science, and effects of climate change across Africa.',
      size: '8.57 MB',
      downloadUrl: '/pdfs/Understanding-Climate-Change.pdf'
    },
    {
      title: '🏢Local impact on Climate Change',
      description: 'Examine the impact of climate change on African economies and sustainable industries.',
      size: '4.61 MB',
      downloadUrl: '/pdfs/Local-Impact-of-Climate-Change.pdf'
    },
    {
      title: '🌿 Living a Sustainable Life',
      description: 'Discover everyday actions to live sustainably — from energy saving to eco-shopping.',
      size: '61.8 MB',
      downloadUrl: '/pdfs/Living-a-Sustainable-Life.pdf'
    },
    {
      title: '💡 Green Startup Ideas',
      description: 'Start your own eco-friendly business or climate innovation project.',
      size: '11.7 MB',
      downloadUrl: '/pdfs/Green-Startup-Ideas.pdf'
    }
  ];

  return (
    <section id="documents" className="pt-12 md:pt-16 pb-20 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Educational Focus Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Materials that help you understand the Negligence 
            of Climate Change in Africa and take meaningful action.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth group">
              <CardHeader>
                {/* <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <FileText className="h-6 w-6 text-primary" />
                </div> */}
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
                    asChild
                  >
                    {/* <a href={doc.downloadUrl} download>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a> */}
                    <a href={doc.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
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
