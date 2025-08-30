import { Brain, Target, Trophy, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInFromTop: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", duration: 0.8 } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

const cardAnimation: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", duration: 0.8 } 
  }
};

const hoverCard = {
  scale: 1.05,
  transition: { type: "spring" as const, stiffness: 300, damping: 20 }
};

const FrameworkSection = () => {
  const frameworks = [
    {
      icon: Brain,
      title: "Skill Foundation",
      description: "Industry-aligned curriculum, aptitude, coding & communication skills",
      stats: "95% industry-relevant",
      color: "bg-white",
      iconBg: "bg-[#4287f5]"
    },
    {
      icon: Target,
      title: "Placement Readiness", 
      description: "AI-powered mock interviews + ATS-optimized resumes + mentorship",
      stats: "85% success rate",
      color: "bg-white",
      iconBg: "bg-[#9747ff]"
    },
    {
      icon: Trophy,
      title: "Career Outcomes",
      description: "250+ placements delivered, avg. CTC ₹5.6 LPA, highest ₹19 LPA",
      stats: "₹19 LPA highest",
      color: "bg-white",
      iconBg: "bg-[#ff4785]"
    },
    {
      icon: HeartHandshake,
      title: "Extended Support",
      description: "Last-mile and post-graduation career assistance",
      stats: "Lifetime access",
      color: "bg-white",
      iconBg: "bg-[#ff6b2c]"
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      className="py-20 md:py-24 relative overflow-hidden bg-white dark:bg-gray-900 group"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(99,102,241,0.05)_12%,transparent_20%),linear-gradient(150deg,rgba(129,140,248,0.05)_12%,transparent_20%),linear-gradient(270deg,rgba(99,102,241,0.05)_12%,transparent_20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_25%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={slideInFromTop}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            The ZSkillup Employability Framework
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From classrooms to careers, our integrated framework ensures you're industry-ready, placement-ready, and future-ready.
          </p>
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Hover Glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-3xl bg-[radial-gradient(closest-side,rgba(99,102,241,0.20),transparent_70%)]" />

          {/* Circular Framework Visualization with hover scale/highlight */}
          <div className="relative mx-auto w-fit transition-transform duration-300 group-hover:scale-[1.02] [&_path]:transition-[filter] [&_path]:duration-300 group-hover:[&_path]:brightness-110">
            <FrameworkCircle size={520} thickness={80} />
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 dark:bg-white/5 rounded-full px-8 py-4 border border-primary/10 shadow-lg">
              <span className="text-gray-700 dark:text-gray-300">Ready to transform your career?</span>
              <Button variant="default" size="lg" className="rounded-full px-8">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// --- FrameworkCircle component ---
import React, { useState } from "react";

type Phase = {
  key: string;
  title: string;
  description: string;
  color: string; // e.g. 'cyan-500'
};

type FrameworkCircleProps = {
  size?: number;
  thickness?: number;
  gapDeg?: number;
  phases?: Phase[];
};

function describeArc(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
) {
  const startOuter = polarToCartesian(cx, cy, outerR, endAngle);
  const endOuter = polarToCartesian(cx, cy, outerR, startAngle);
  const startInner = polarToCartesian(cx, cy, innerR, endAngle);
  const endInner = polarToCartesian(cx, cy, innerR, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    "M",
    startOuter.x,
    startOuter.y,
    "A",
    outerR,
    outerR,
    0,
    largeArcFlag,
    0,
    endOuter.x,
    endOuter.y,
    "L",
    endInner.x,
    endInner.y,
    "A",
    innerR,
    innerR,
    0,
    largeArcFlag,
    1,
    startInner.x,
    startInner.y,
    "Z",
  ].join(" ");
}

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
}

const defaultPhases: Phase[] = [
  {
    key: "foundation",
    title: "Foundation",
    description: "Build core skills: aptitude, coding, communication, and industry knowledge.",
    color: "purple-600",
  },
  {
    key: "readiness",
    title: "Readiness",
    description: "Placement prep: AI mock interviews, resume building, mentorship.",
    color: "teal-500",
  },
  {
    key: "outcomes",
    title: "Outcomes",
    description: "Achieve results: 250+ placements, ₹19L highest CTC, 450+ partners.",
    color: "orange-400",
  },
  {
    key: "support",
    title: "Support",
    description: "Ongoing help: last-mile guidance and post-graduation career support.",
    color: "blue-500",
  },
];

function FrameworkCircle({
  size = 600,
  thickness = 90,
  gapDeg = 4,
  phases = defaultPhases,
}: FrameworkCircleProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const center = size / 2;
  const outerR = center - 8;
  const innerR = outerR - thickness;
  const segAngle = 360 / phases.length;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size, maxWidth: "100%" }}>
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-auto"
          role="img"
          aria-label="Framework diagram"
        >
          {/* Use direct hex colors for each phase */}
          {phases.map((p, i) => {
            // Map Tailwind color names to hex values
            const colorMap: Record<string, string> = {
              'purple-600': '#7c3aed',
              'teal-500': '#14b8a6',
              'orange-400': '#fb923c',
              'blue-500': '#3b82f6',
            };
            const fillColor = colorMap[p.color] || '#888';
            const start = i * segAngle + gapDeg / 2;
            const end = (i + 1) * segAngle - gapDeg / 2;
            const d = describeArc(center, center, innerR, outerR, start, end);
            const isDim = hovered !== null && hovered !== i;
            return (
              <path
                key={p.key}
                d={d}
                fill={fillColor}
                className="transition-all duration-300 cursor-pointer"
                style={{
                  filter: hovered === i
                    ? "drop-shadow(0 10px 28px rgba(0,0,0,0.18))"
                    : "drop-shadow(0 6px 24px rgba(0,0,0,0.12))",
                  opacity: isDim ? 0.45 : 1,
                  transform: hovered === i ? "scale(1.06)" : "scale(1)",
                  transformBox: "fill-box",
                  transformOrigin: "50% 50%",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
            );
          })}
          <circle cx={center} cy={center} r={innerR - 18} fill="#fff" />
          <text
            x={center}
            y={center - 8}
            textAnchor="middle"
            className="fill-slate-900 font-bold"
            fontSize={24}
          >
            Employability Framework
          </text>
          <text
            x={center}
            y={center + 24}
            textAnchor="middle"
            className="fill-slate-500"
            fontSize={15}
          >
            4 pillars from foundation to support
          </text>
        </svg>
        {/* Number pins + labels */}
        <div className="absolute inset-0 pointer-events-none">
          {phases.map((p, i) => {
            const angle = i * segAngle + segAngle / 2;
            const r = outerR + 20;
            const pos = polarToCartesian(center, center, r, angle);
            const alignX = pos.x < center ? "left" : "right";
            const isTop = pos.y < center;
            const isDim = hovered !== null && hovered !== i;
            const isActive = hovered === i;
            return (
              <div
                key={`pin-${p.key}`}
                className={`absolute flex items-center gap-2 ${
                  alignX === "left" ? "-translate-x-full" : "translate-x-0"
                } -translate-y-1/2 pointer-events-auto`}
                style={{ left: pos.x, top: pos.y, opacity: isDim ? 0.55 : 1 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {alignX === "right" && (
                  <span
                    className={`pointer-events-auto grid place-items-center size-8 rounded-full text-white font-bold shadow transition-transform duration-300 ${isActive ? "scale-125" : "scale-100"}`}
                    style={{ backgroundColor: (() => {
                      const colorMap = {
                        'purple-600': '#7c3aed',
                        'teal-500': '#14b8a6',
                        'orange-400': '#fb923c',
                        'blue-500': '#3b82f6',
                      };
                      return colorMap[p.color] || '#888';
                    })() }}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                )}
                <div className="pointer-events-auto w-48 max-w-[40vw] select-none">
                  <div className={`leading-tight transition-all duration-300 ${isActive ? "text-primary font-bold text-lg" : "text-slate-900 font-semibold text-base"}`}>
                    {p.title}
                  </div>
                  <div className={`text-sm leading-snug transition-colors duration-300 ${isActive ? "text-slate-700" : "text-slate-600"}`}>
                    {p.description}
                  </div>
                </div>
                {alignX === "left" && (
                  <span
                    className={`pointer-events-auto grid place-items-center size-8 rounded-full text-white font-bold shadow transition-transform duration-300 ${isActive ? "scale-125" : "scale-100"}`}
                    style={{ backgroundColor: (() => {
                      const colorMap = {
                        'purple-600': '#7c3aed',
                        'teal-500': '#14b8a6',
                        'orange-400': '#fb923c',
                        'blue-500': '#3b82f6',
                      };
                      return colorMap[p.color] || '#888';
                    })() }}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FrameworkSection;