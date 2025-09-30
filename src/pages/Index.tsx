import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Documents from '@/components/Documents';
import Videos from '@/components/Videos';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Documents />
      <Videos />
      <Articles />
      <Footer />
    </div>
  );
};

export default Index;
