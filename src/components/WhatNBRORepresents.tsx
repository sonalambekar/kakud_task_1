import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Microscope, Building2, Briefcase, Users } from "lucide-react";

import studentsImg from "@/assets/students.jpg";
import researcherImg from "@/assets/researcher.jpg";
import laboratoryImg from "@/assets/laboratory.jpg";
import companyImg from "@/assets/company.jpg";
import publicImg from "@/assets/public.jpg";

const cards = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Discover research exposure opportunities, internships, and mentorship programs to kickstart your scientific journey.",
    image: studentsImg,
  },
  {
    icon: Microscope,
    title: "Researchers",
    description: "Access cutting-edge laboratories, scientific literature, and collaborative networks to advance your research.",
    image: researcherImg,
  },
  {
    icon: Building2,
    title: "Laboratories",
    description: "Showcase your infrastructure, attract talent, and connect with industry partners for impactful collaborations.",
    image: laboratoryImg,
  },
  {
    icon: Briefcase,
    title: "Companies",
    description: "Connect with brilliant researchers, discover innovations, and find the talent that drives your R&D forward.",
    image: companyImg,
  },
  {
    icon: Users,
    title: "General Public",
    description: "Access scientific events, publications, and educational resources to stay informed about research breakthroughs.",
    image: publicImg,
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
              className="group"
            >
              <div className="h-full rounded-3xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/50 shadow-card transition-all duration-500 hover:shadow-glow hover:-translate-y-3 hover:bg-white/60 hover:border-primary/30">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-soft group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-teal transition-all duration-500">
                    <card.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
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

export default WhatNBRORepresents;
