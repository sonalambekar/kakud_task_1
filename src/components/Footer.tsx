import { motion } from "framer-motion";
import { Dna, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const links = {
    platform: [
      { name: "Research Board", href: "#" },
      { name: "Lab Marketplace", href: "#" },
      { name: "Knowledge Hub", href: "#" },
      { name: "Collaboration", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Access", href: "#" },
      { name: "Support", href: "#" },
      { name: "Blog", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative bg-white pt-20 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-teal to-emerald" />

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-teal flex items-center justify-center">
                <Dna className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">NBRO</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              National Bio Research Organisation - India's unified platform for research, learning, and innovation.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 11 2345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@nbro.gov.in</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-display font-bold text-foreground mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} National Bio Research Organisation. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-white/70 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-300 shadow-soft"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
