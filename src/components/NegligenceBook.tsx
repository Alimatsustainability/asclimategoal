import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

const NegligenceBook = () => {
  return (
    <section id="negligence-book" className="py-10 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="w-full shadow-card hover:shadow-hover transition-smooth">
          <CardHeader className="space-y-3 text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
               How to Conquer the Negligence of Climate Change in Africa
            </CardTitle>
            <p className="text-lg text-muted-foreground">By</p>
            <p className="text-lg text-muted-foreground">Mrs Alimat Oladipupo Jinadu S.</p>
            <p className="text-primary font-semibold"> A powerful voice from Africa’s frontlines.</p>
          </CardHeader>

          <CardContent className="space-y-6 text-center text-muted-foreground">
            <p>
              This inspiring book reveals the untold human stories behind climate change — from drought-hit farms to
              flood-damaged homes — and the courage of communities rising to rebuild.
              It’s not just a book; it’s a movement for awareness, justice, and sustainability. Discover how women,
              youth, and innovators are turning crisis into action and shaping Africa’s green future.
            </p>
            <blockquote className="italic text-lg text-accent-foreground">“Negligence is expensive — but action is priceless.”</blockquote>
            <Button
              size="lg"
              className="transition-smooth hover:bg-primary/90"
              onClick={() => window.open('/pdfs/How-to-Conquer-the-Negligence-of-Climate-Change-in-Africa.docx', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Free PDF
            </Button>
            <p className="text-sm text-muted-foreground">Be informed. Be inspired. Be the change.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NegligenceBook;
