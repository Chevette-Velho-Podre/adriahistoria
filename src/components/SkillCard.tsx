import { motion } from "framer-motion";
import type { Habilidade } from "@/data/curriculum";

interface SkillCardProps {
  habilidade: Habilidade;
  isSelected: boolean;
  onToggle: (habilidade: Habilidade) => void;
}

const SkillCard = ({ habilidade, isSelected, onToggle }: SkillCardProps) => {
  return (
    <motion.button
      layout
      onClick={() => onToggle(habilidade)}
      className={`w-full text-left p-3 rounded-md border transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isSelected
          ? "bg-skill-badge/10 border-skill-badge"
          : "bg-card border-border hover:border-skill-badge/40 hover:bg-skill-hover"
      }`}
      whileTap={{ scale: 0.98 }}
    >
      <span className="inline-block font-tabular text-xs font-bold text-skill-badge mr-2">
        {habilidade.codigo}
      </span>
      <span className="text-sm text-foreground/80 text-pretty leading-relaxed">
        {habilidade.descricao}
      </span>
    </motion.button>
  );
};

export default SkillCard;
