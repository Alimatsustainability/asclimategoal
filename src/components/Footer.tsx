import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1CP9a4SkuB/?mibextid=wwXIfr', label: 'Facebook' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Documents', href: '#documents' },
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Brand logo" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground mb-4">
              Small changes can make a big difference
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#articles" className="text-muted-foreground hover:text-primary transition-smooth">
                  Articles
                </a>
              </li>
              <li>
                <a href="#documents" className="text-muted-foreground hover:text-primary transition-smooth">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:alimatsustainability01@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                  alimatsustainability01@gmail.com
                </a>
              </li>
              <li>
                {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                  onClick={() => window.open(social.href, '_blank')}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left flex items-center gap-2 justify-center md:justify-start">
              <span>© {new Date().getFullYear()}</span>
              {/* <img src="/logo.png" alt="Brand logo" className="h-6 w-auto" /> */}
              <span>Alimat Sustainability Climate Goals | Designed with 💚 for Our Planet</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
