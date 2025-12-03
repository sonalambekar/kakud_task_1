import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Network, Eye, UserSearch, BookX, Shield, Zap } from "lucide-react";

const problems = [
  {
    icon: Lock,
    title: "Limited Research Access",
    description: "Breaking barriers to expensive journals, databases, and research resources that hinder scientific progress.",
  },
  {
    icon: Network,
    title: "Fragmented Collaboration",
    description: "Unifying researchers across institutions who struggle to find collaborators and share knowledge effectively.",
  },
  {
    icon: Eye,
    title: "Hidden Opportunities",
    description: "Surfacing research positions, grants, and projects that remain invisible to deserving candidates.",
  },
  {
    icon: UserSearch,
    title: "Talent Discovery Gap",
    description: "Helping companies find the right research talent and innovative solutions for their challenges.",
  },
  {
    icon: BookX,
    title: "Scattered Knowledge",
    description: "Centralizing scientific publications, events, and educational content in one accessible platform.",
  },
  {
    icon: Shield,
    title: "Data Security Concerns",
    description: "Providing secure infrastructure for sensitive research data sharing and collaboration.",
  },
  {
    icon: Zap,
    title: "Slow Innovation Cycles",
    description: "Accelerating the path from research discovery to real-world application and commercialization.",
  },
];

const ProblemsSolved = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--mint-light))_0%,transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
            Challenges We Address
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Problems <span className="gradient-text">NBRO</span> Solves
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming the landscape of research and innovation by tackling the most pressing challenges in India's scientific ecosystem.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex-shrink-0 snap-center"
              >
                <div className="w-[300px] md:w-[340px] h-full rounded-3xl p-6 bg-white/60 backdrop-blur-xl border border-white/40 shadow-card transition-all duration-500 hover:shadow-glow hover:scale-105 hover:bg-white/80">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mint-light to-accent flex items-center justify-center mb-5 group-hover:shadow-glow group-hover:from-primary group-hover:to-teal transition-all duration-500">
                    <problem.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-4"
        >
          ← Scroll to explore more →
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemsSolved;
