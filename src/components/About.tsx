import aboutImage from '@/assets/image-of -the-founder.jpg';


const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32 bg-muted/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-8 bottom-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 md:order-1">
            <div className="relative h-[320px] md:h-[380px] lg:h-[440px] w-full rounded-3xl border border-border bg-white/80 shadow-2xl shadow-primary/20 flex items-center justify-center overflow-hidden p-4 md:p-6">
              <div className="absolute inset-3 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
              <img
                src={aboutImage}
                alt="About Us"
                className="relative h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-widest text-primary">
              Founder Story
            </div>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              <b>Mrs Alimat Oladipupo Jinadu S.</b> is the founder of Alimat Sustainability Climate Goals and a passionate advocate for climate education and youth empowerment. She studied Economics and Management at the University of Westminster in London, participated in Erasmus+ projects in Greece, Amsterdam, and Italy, and holds a Carbon Literacy certification from Pagoda Projects.
            </p> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
