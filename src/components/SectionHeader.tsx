import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function SectionHeader({ eyebrow, title, subtitle, align = "center", className }: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      className={cn("mb-10", isCenter ? "text-center" : "text-left", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {eyebrow ? (
        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 text-accent text-xs font-medium mb-3", isCenter ? "mx-auto" : undefined)}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className={cn("font-bold mb-3", isCenter ? "mx-auto" : undefined, "text-3xl md:text-4xl")}>{title}</h2>
      {subtitle ? (
        <p className={cn("text-muted-foreground", isCenter ? "mx-auto" : undefined, "max-w-2xl text-lg md:text-xl")}>{subtitle}</p>
      ) : null}
      <div className={cn("mt-5 h-1 bg-gradient-to-r from-transparent via-highlight to-transparent", isCenter ? "mx-auto w-40" : "w-40")} />
    </motion.div>
  );
}

export default SectionHeader;
