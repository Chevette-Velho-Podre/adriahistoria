import { X } from "lucide-react";
import { motion } from "framer-motion";
import type { Habilidade } from "@/data/curriculum";

interface SelectedSkillBadgeProps {
  habilidade: Habilidade;
  onRemove: (codigo: string) => void;
}

const SelectedSkillBadge = ({ habilidade, onRemove }: SelectedSkillBadgeProps) => {
  return (
    <motion.span
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-skill-badge text-skill-badge-foreground text-xs font-semibold font-tabular"
    >
      {habilidade.codigo}
      <button
        onClick={() => onRemove(habilidade.codigo)}
        className="ml-0.5 hover:bg-primary-foreground/20 rounded-sm p-0.5 transition-colors"
      >
        <X className="h-3 w-3" />
      </button>
    </motion.span>
  );
};

export default SelectedSkillBadge;
