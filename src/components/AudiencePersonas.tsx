import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, FlaskConical, Building, Factory, Globe } from "lucide-react";

import studentsImg from "@/assets/students.jpg";
import researcherImg from "@/assets/researcher.jpg";
import laboratoryImg from "@/assets/laboratory.jpg";
import companyImg from "@/assets/company.jpg";
import publicImg from "@/assets/public.jpg";

const personas = [
  {
    icon: GraduationCap,
    title: "Students",
    tagline: "Launch Your Research Career",
    benefit: "Access internships, mentorships, and hands-on research experience at leading institutions.",
    image: studentsImg,
  },
  {
    icon: FlaskConical,
    title: "Researchers",
    tagline: "Amplify Your Impact",
    benefit: "Connect with peers, access advanced facilities, and publish your findings to a wider audience.",
    image: researcherImg,
  },
  {
    icon: Building,
    title: "Lab Owners",
    tagline: "Maximize Your Reach",
    benefit: "Showcase your capabilities, attract top talent, and find industry partners for funded projects.",
    image: laboratoryImg,
  },
  {
    icon: Factory,
    title: "Organizations",
    tagline: "Fuel Innovation",
    benefit: "Discover breakthrough research, recruit exceptional talent, and drive R&D with academic partnerships.",
    image: companyImg,
  },
  {
    icon: Globe,
    title: "General Public",
    tagline: "Stay Informed",
    benefit: "Explore scientific discoveries, attend public lectures, and engage with India's research community.",
    image: publicImg,
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
              <div className="h-full rounded-3xl overflow-hidden bg-white/50 backdrop-blur-xl border border-white/40 shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-glow hover:bg-white/70 hover:border-primary/30">
                {/* Image with overlay */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={persona.image}
                    alt={persona.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-teal/60 mix-blend-multiply" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <persona.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {persona.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">
                    {persona.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {persona.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudiencePersonas;
