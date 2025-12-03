import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Building2, Users, BookOpen, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Search,
    title: "Research Opportunity Board",
    description: "Discover internships, fellowships, grants, and research positions from institutions across India. Filter by field, location, and experience level.",
    highlights: ["Real-time listings", "Smart matching", "Application tracking"],
    align: "left",
  },
  {
    icon: Building2,
    title: "Lab Marketplace",
    description: "Browse state-of-the-art laboratories, their equipment, expertise, and availability. Book facilities or request collaboration directly.",
    highlights: ["Equipment catalog", "Virtual tours", "Direct booking"],
    align: "right",
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Find research partners, join projects, and communicate seamlessly. Build your network with researchers who share your interests.",
    highlights: ["Project matching", "Secure messaging", "Team workspaces"],
    align: "left",
  },
  {
    icon: BookOpen,
    title: "Knowledge Hub",
    description: "Access a curated library of research papers, publications, events, and educational resources all in one centralized platform.",
    highlights: ["Open access papers", "Event calendar", "Learning paths"],
    align: "right",
  },
  {
    icon: Lightbulb,
    title: "Innovation Discovery",
    description: "Companies can explore breakthrough research, emerging technologies, and innovative solutions from India's brightest minds.",
    highlights: ["Patent database", "Tech scouting", "Partnership portal"],
    align: "left",
  },
];

const CoreFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Core <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools designed to accelerate research, foster collaboration, and drive innovation.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: feature.align === "left" ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`flex flex-col ${feature.align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-teal flex items-center justify-center shadow-soft">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {feature.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-teal/20 rounded-3xl blur-2xl" />
                  <div className="relative glass-card rounded-3xl p-8 aspect-[4/3] flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-mint-light/50 to-accent/50 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
