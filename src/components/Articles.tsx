import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';

const Articles = () => {
  const articles = [    
    {
      title: 'ProQuest — Better Research. Better Learning. Better Insights.',
      description: 'ProQuest is a leading academic research platform that provides access to millions of scholarly articles, dissertations, and publications for students, researchers, and institutions worldwide.',
      date: 'February 28, 2024',
      readTime: '8 min read',
      externalUrl: 'https://www.proquest.com/'
    },
    {
      title: 'ScienceDirect.com — Science, health and medical journals, full text articles and books.',
      description: 'ScienceDirect is a premier online library of scientific and technical research, offering access to a vast collection of peer-reviewed journals, book chapters, and conference proceedings across disciplines.',
      date: 'February 20, 2024',
      readTime: '6 min read',
      externalUrl: 'https://www.sciencedirect.com/'
    },
    {
      title: 'Scopus — Welcome to Scopus Preview',
      description: 'Scopus is a comprehensive abstract and citation database that covers peer-reviewed literature across disciplines and provides tools for tracking research impact and trends.',
      date: 'February 15, 2024',
      readTime: '5 min read',
      externalUrl: 'https://www.scopus.com/'
    },
    {
      title: 'JSTOR — Explore the world’s knowledge, cultures, and ideas',
      description: 'JSTOR is a digital library that archives academic journals, books, and primary sources across the humanities, social sciences, and sciences—providing researchers and students with reliable access to historical and contemporary literature.',
      date: 'February 15, 2024',
      readTime: '5 min read',
      externalUrl: 'https://www.jstor.org/'
    }
  ];

  const scholarships = [
    {
      title: 'Mastercard Foundation Scholars Program Institutions',
      description: 'The Mastercard Foundation Scholars Program offers full or partial scholarships to students from Africa and other eligible regions, enabling them to pursue undergraduate and master’s degrees and become emerging leaders in their fields.',
      date: 'February 28, 2024',
      readTime: '8 min read',
      externalUrl: 'https://mastercardfdn.org/en/what-we-do/our-programs/mastercard-foundation-scholars-program/where-to-apply/'
    },
    {
      title: 'Fulbright Foreign Student Program',
      description: 'The Fulbright Foreign Student Program offers scholarships for graduate study, research, and teaching assistantships to students from over 160 countries, helping them build leadership skills and foster mutual understanding through cultural exchange.',
      date: 'February 20, 2024',
      readTime: '6 min read',
      externalUrl: 'https://foreign.fulbrightonline.org/apply'
    },
    {
      title: 'Chevening Scholarships program',
      description: 'The Chevening Scholarships program is the UK government’s global scholarship initiative that offers outstanding emerging leaders the opportunity to pursue a one-year master’s degree at any of the UK’s top universities.',
      date: 'February 15, 2024',
      readTime: '5 min read',
      externalUrl: 'https://www.chevening.org/scholarships/'
    },
  ];

  const opportunities = [
    {
      title: 'NerdzFactory Foundation — Empowering Africa’s Youth with Tech Skills',
      description: 'NerdzFactory Foundation is a non-profit organisation in Africa that equips young adults with 21st-century technology skills to drive self-reliance and job creation.',
      date: 'February 28, 2024',
      readTime: '8 min read',
      externalUrl: 'https://nerdzfactory.org/'
    },
  ];

  return (
    <section id="articles" className="pt-12 md:pt-16 pb-20 md:pb-32">

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Explore Academic Research Links
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For learners and researchers to go deeper: Explore trusted academic databases: (click on the hyperlink to explore more)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth group flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
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
      
      <br />
      <br />
      <br />
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 mt-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Scholarships Links for Africa’s Fully Funded
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scholarships for Africa’s Fully Funded Students who are pursuing higher education (click on the hyperlink to explore more)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth group flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  {/* <Calendar className="h-4 w-4" /> */}
                  {/* <span>{article.date}</span> */}
                  {/* <span>•</span> */}
                  {/* <span>{article.readTime}</span> */}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {scholarship.title}
                </CardTitle>
                <CardDescription>{scholarship.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full transition-smooth hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(scholarship.externalUrl, '_blank')}
                >
                  Read More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 mt-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Start-up Business Funds Programs in Africa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A lot of opportunities programme and start-up business funds in Africa are available for students and entrepreneurs to explore (click on the hyperlink to explore more)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth group flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  {/* <Calendar className="h-4 w-4" /> */}
                  {/* <span>{article.date}</span> */}
                  {/* <span>•</span> */}
                  {/* <span>{article.readTime}</span> */}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {opportunity.title}
                </CardTitle>
                <CardDescription>{opportunity.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full transition-smooth hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(opportunity.externalUrl, '_blank')}
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
