import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, FlaskConical, Building, Factory, Globe } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    title: "Students",
    tagline: "Launch Your Research Career",
    benefit: "Access internships, mentorships, and hands-on research experience at leading institutions.",
    color: "from-emerald to-teal",
    bgColor: "bg-emerald/5",
  },
  {
    icon: FlaskConical,
    title: "Researchers",
    tagline: "Amplify Your Impact",
    benefit: "Connect with peers, access advanced facilities, and publish your findings to a wider audience.",
    color: "from-teal to-primary",
    bgColor: "bg-teal/5",
  },
  {
    icon: Building,
    title: "Lab Owners",
    tagline: "Maximize Your Reach",
    benefit: "Showcase your capabilities, attract top talent, and find industry partners for funded projects.",
    color: "from-primary to-mint",
    bgColor: "bg-primary/5",
  },
  {
    icon: Factory,
    title: "Organizations",
    tagline: "Fuel Innovation",
    benefit: "Discover breakthrough research, recruit exceptional talent, and drive R&D with academic partnerships.",
    color: "from-mint to-lime",
    bgColor: "bg-mint/5",
  },
  {
    icon: Globe,
    title: "General Public",
    tagline: "Stay Informed",
    benefit: "Explore scientific discoveries, attend public lectures, and engage with India's research community.",
    color: "from-lime to-emerald",
    bgColor: "bg-lime/5",
  },
];

const AudiencePersonas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald/10 text-emerald text-sm font-semibold mb-4">
            Who Benefits
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Built for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're starting your scientific journey or leading breakthrough research, NBRO has something for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`h-full rounded-3xl p-6 ${persona.bgColor} border border-border/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-hover bg-card`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.color} flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform duration-500`}>
                  <persona.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {persona.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${persona.color} bg-clip-text text-transparent mb-3`}>
                  {persona.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {persona.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudiencePersonas;
