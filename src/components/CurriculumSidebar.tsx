import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { curriculumData, type Habilidade } from "@/data/curriculum";
import SkillCard from "./SkillCard";

interface CurriculumSidebarProps {
  selectedAno: string;
  selectedSkills: Habilidade[];
  selectedObjetos: string[];
  onToggleSkill: (h: Habilidade) => void;
  onToggleObjeto: (id: string) => void;
}

const CurriculumSidebar = ({ selectedAno, selectedSkills, selectedObjetos, onToggleSkill, onToggleObjeto }: CurriculumSidebarProps) => {
  const [search, setSearch] = useState("");
  const [expandedTrimestres, setExpandedTrimestres] = useState<Record<string, boolean>>({});

  const anoData = useMemo(() => curriculumData.find(a => a.ano === selectedAno), [selectedAno]);

  const selectedCodes = useMemo(() => new Set(selectedSkills.map(s => s.codigo)), [selectedSkills]);

  const filteredTrimestres = useMemo(() => {
    if (!anoData) return [];
    const q = search.toLowerCase();
    if (!q) return anoData.trimestres;

    return anoData.trimestres
      .map(t => ({
        ...t,
        objetos: t.objetos
          .map(o => ({
            ...o,
            habilidades: o.habilidades.filter(
              h => h.codigo.toLowerCase().includes(q) || h.descricao.toLowerCase().includes(q)
            ),
          }))
          .filter(o => o.habilidades.length > 0 || o.titulo.toLowerCase().includes(q)),
      }))
      .filter(t => t.objetos.length > 0);
  }, [anoData, search]);

  const toggleTrimestre = (key: string) => {
    setExpandedTrimestres(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isTrExpanded = (key: string) => expandedTrimestres[key] !== false; // default expanded

  return (
    <aside className="w-full h-full flex flex-col bg-card border-r border-border">
      <div className="p-4 border-b border-border">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Referencial Curricular
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar habilidades..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {filteredTrimestres.map(trimestre => {
          const key = `${selectedAno}-${trimestre.numero}`;
          const expanded = isTrExpanded(key);
          return (
            <div key={key}>
              <button
                onClick={() => toggleTrimestre(key)}
                className="flex items-center gap-2 w-full text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground py-2 hover:text-foreground transition-colors"
              >
                {expanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                {trimestre.numero}º Trimestre
              </button>
              {expanded && (
                <div className="space-y-4 ml-1">
                  {trimestre.objetos.map(obj => {
                    const isObjSelected = selectedObjetos.includes(obj.id);
                    return (
                    <div key={obj.id}>
                      <button
                        onClick={() => onToggleObjeto(obj.id)}
                        className={`w-full text-left text-xs font-semibold mb-2 pl-1 py-1 px-2 rounded transition-all duration-200 ${
                          isObjSelected
                            ? "text-skill-badge bg-skill-badge/10 border border-skill-badge/30"
                            : "text-foreground/70 hover:text-skill-badge hover:bg-skill-hover border border-transparent"
                        }`}
                      >
                        {obj.titulo}
                      </button>
                      <div className="space-y-1.5">
                        {obj.habilidades.map(h => (
                          <SkillCard
                            key={h.codigo}
                            habilidade={h}
                            isSelected={selectedCodes.has(h.codigo)}
                            onToggle={onToggleSkill}
                          />
                        ))}
                      </div>
                    </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        {filteredTrimestres.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">
            Nenhuma habilidade encontrada.
          </p>
        )}
      </div>
    </aside>
  );
};

export default CurriculumSidebar;
