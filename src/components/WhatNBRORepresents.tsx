import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Microscope, Building2, Briefcase, Users } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Discover research exposure opportunities, internships, and mentorship programs to kickstart your scientific journey.",
    gradient: "from-emerald/20 to-teal/20",
  },
  {
    icon: Microscope,
    title: "Researchers",
    description: "Access cutting-edge laboratories, scientific literature, and collaborative networks to advance your research.",
    gradient: "from-teal/20 to-primary/20",
  },
  {
    icon: Building2,
    title: "Laboratories",
    description: "Showcase your infrastructure, attract talent, and connect with industry partners for impactful collaborations.",
    gradient: "from-primary/20 to-mint/20",
  },
  {
    icon: Briefcase,
    title: "Companies",
    description: "Connect with brilliant researchers, discover innovations, and find the talent that drives your R&D forward.",
    gradient: "from-mint/20 to-lime/10",
  },
  {
    icon: Users,
    title: "General Public",
    description: "Access scientific events, publications, and educational resources to stay informed about research breakthroughs.",
    gradient: "from-lime/10 to-emerald/20",
  },
];

const WhatNBRORepresents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-mint relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What <span className="gradient-text">NBRO</span> Represents
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A unified platform bridging the gap between academic research, industry innovation, and public knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`glass-card-hover h-full rounded-3xl p-6 bg-gradient-to-br ${card.gradient}`}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-teal flex items-center justify-center mb-5 shadow-soft">
                  <card.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatNBRORepresents;
