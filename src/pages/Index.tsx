import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import NegligenceBook from '@/components/NegligenceBook';
import About from '@/components/About';
import Climate from '@/components/Climate';
import Documents from '@/components/Documents';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <NegligenceBook />
      <About />
      <Climate />
      <Documents />
      <Articles />
      <Footer />
    </div>
  );
};

export default Index;
