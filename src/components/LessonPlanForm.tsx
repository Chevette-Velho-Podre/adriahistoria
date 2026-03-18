import { useState, useEffect, useCallback, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Check, X } from "lucide-react";
import { curriculumData, type Habilidade } from "@/data/curriculum";

export interface LessonPlan {
  professor: string;
  escola: string;
  data: string;
  ano: string;
  trimestre: number | null;
  tema: string;
  objetivos: string;
  metodologia: string;
  avaliacao: string;
  habilidades: Habilidade[];
  objetosConhecimento: string[];
}

interface LessonPlanFormProps {
  plan: LessonPlan;
  onChange: (plan: LessonPlan) => void;
  onAnoChange: (ano: string) => void;
  onTrimestreChange: (trimestre: number | null) => void;
}

const InputGroup = ({
  label,
  children



}: {label: string;children: React.ReactNode;}) =>
<div>
    <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5">
      {label}
    </label>
    {children}
  </div>;


const inputClass =
"w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all placeholder:text-muted-foreground/50";

const textareaClass =
"w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all resize-y min-h-[80px] placeholder:text-muted-foreground/50";

const LessonPlanForm = ({ plan, onChange, onAnoChange }: LessonPlanFormProps) => {
  const [saved, setSaved] = useState(false);

  const update = useCallback(
    (field: keyof LessonPlan, value: string) => {
      onChange({ ...plan, [field]: value });
    },
    [plan, onChange]
  );

  const handleAnoChange = (ano: string) => {
    onChange({ ...plan, ano, habilidades: [], objetosConhecimento: [] });
    onAnoChange(ano);
  };

  const removeSkill = (codigo: string) => {
    onChange({
      ...plan,
      habilidades: plan.habilidades.filter((h) => h.codigo !== codigo)
    });
  };

  const removeObjeto = (id: string) => {
    onChange({
      ...plan,
      objetosConhecimento: plan.objetosConhecimento.filter((o) => o !== id)
    });
  };

  // Resolve objeto names from IDs
  const selectedObjetos = useMemo(() => {
    const anoData = curriculumData.find((a) => a.ano === plan.ano);
    if (!anoData) return [];
    const all = anoData.trimestres.flatMap((t) => t.objetos);
    return plan.objetosConhecimento.
    map((id) => all.find((o) => o.id === id)).
    filter(Boolean) as {id: string;titulo: string;}[];
  }, [plan.ano, plan.objetosConhecimento]);

  // Auto-save indicator
  useEffect(() => {
    const timer = setTimeout(() => {
      setSaved(true);
      const hide = setTimeout(() => setSaved(false), 2000);
      return () => clearTimeout(hide);
    }, 2000);
    return () => clearTimeout(timer);
  }, [plan]);

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-skill-badge flex items-center justify-center">
            <FileText className="h-4 w-4 text-skill-badge-foreground" />
          </div>
          <div>
            <h1 className="text-lg text-foreground font-mono font-extrabold text-center border border-primary border-double">Plano de Aula 
História 
 
     </h1>
            <p className="text-xs text-muted-foreground">Referencial Curricular — Montes Claros/MG</p>
          </div>
        </div>
        <AnimatePresence>
          {saved && <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-1.5 text-success text-xs font-medium">
            
              <Check className="h-3.5 w-3.5" />
              Salvo
            </motion.div>
          }
        </AnimatePresence>
      </div>

      {/* Form */}
      <div className="p-6 max-w-3xl space-y-8">
        {/* Seção: Identificação */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 pb-2 border-b border-border">
            Identificação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputGroup label="Professor(a)">
              <input
                type="text"
                className={inputClass}
                placeholder="Nome do professor"
                value={plan.professor}
                onChange={(e) => update("professor", e.target.value)} />
              
            </InputGroup>
            <InputGroup label="Escola">
              <input
                type="text"
                className={inputClass}
                placeholder="Nome da escola"
                value={plan.escola}
                onChange={(e) => update("escola", e.target.value)} />
              
            </InputGroup>
            <InputGroup label="Data">
              <input
                type="date"
                className={inputClass}
                value={plan.data}
                onChange={(e) => update("data", e.target.value)} />
              
            </InputGroup>
            <InputGroup label="Ano/Série">
              <select
                className={inputClass}
                value={plan.ano}
                onChange={(e) => handleAnoChange(e.target.value)}>
                
                {curriculumData.map((a) =>
                <option key={a.ano} value={a.ano}>
                    {a.ano}
                  </option>
                )}
              </select>
            </InputGroup>
          </div>
        </section>

        {/* Seção: Conteúdo */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 pb-2 border-b border-border">
            Conteúdo
          </h2>
          <div className="space-y-4">
            <InputGroup label="Tema da Aula">
              <input
                type="text"
                className={inputClass}
                placeholder="Ex: As origens da humanidade"
                value={plan.tema}
                onChange={(e) => update("tema", e.target.value)} />
              
            </InputGroup>

            <InputGroup label="Objetos de Conhecimento">
              <div className="min-h-[48px] p-3 bg-background border border-input rounded-md">
                {selectedObjetos.length === 0 ?
                <p className="text-xs text-muted-foreground/60">
                    ← Clique nos títulos dos objetos ao lado para adicioná-los
                  </p> :

                <div className="space-y-2">
                    <AnimatePresence mode="popLayout">
                      {selectedObjetos.map((obj) =>
                    <motion.div
                      key={obj.id}
                      layout
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-2 p-2 rounded-md bg-accent border border-border">
                      
                          <span className="flex-1 text-sm text-foreground/90 leading-relaxed">{obj.titulo}</span>
                          <button
                        onClick={() => removeObjeto(obj.id)}
                        className="mt-0.5 p-0.5 rounded-sm hover:bg-foreground/10 transition-colors">
                        
                            <X className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                        </motion.div>
                    )}
                    </AnimatePresence>
                  </div>
                }
              </div>
            </InputGroup>

            <InputGroup label="Habilidades Selecionadas">
              <div className="min-h-[48px] p-3 bg-background border border-input rounded-md">
                {plan.habilidades.length === 0 ?
                <p className="text-xs text-muted-foreground/60">
                    ← Clique nas habilidades ao lado para adicioná-las
                  </p> :

                <div className="space-y-2">
                    <AnimatePresence mode="popLayout">
                      {plan.habilidades.map((h) =>
                    <motion.div
                      key={h.codigo}
                      layout
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-2 p-2 rounded-md bg-skill-hover border border-border">
                      
                          <div className="flex-1">
                            <span className="font-tabular text-xs font-bold text-skill-badge mr-1.5">
                              {h.codigo}
                            </span>
                            <span className="text-sm text-foreground/80 text-pretty leading-relaxed">
                              {h.descricao}
                            </span>
                          </div>
                          <button
                        onClick={() => removeSkill(h.codigo)}
                        className="mt-0.5 p-0.5 rounded-sm hover:bg-foreground/10 transition-colors">
                        
                            <X className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                        </motion.div>
                    )}
                    </AnimatePresence>
                  </div>
                }
              </div>
            </InputGroup>

            <InputGroup label="Objetivos">
              <textarea
                className={textareaClass}
                placeholder="Descreva os objetivos da aula..."
                rows={3}
                value={plan.objetivos}
                onChange={(e) => update("objetivos", e.target.value)} />
              
            </InputGroup>
          </div>
        </section>

        {/* Seção: Execução */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 pb-2 border-b border-border">
            Execução
          </h2>
          <div className="space-y-4">
            <InputGroup label="Metodologia">
              <textarea
                className={textareaClass}
                placeholder="Descreva a metodologia que será utilizada..."
                rows={5}
                value={plan.metodologia}
                onChange={(e) => update("metodologia", e.target.value)} />
              
            </InputGroup>
            <InputGroup label="Avaliação">
              <textarea
                className={textareaClass}
                placeholder="Descreva os critérios e instrumentos de avaliação..."
                rows={3}
                value={plan.avaliacao}
                onChange={(e) => update("avaliacao", e.target.value)} />
              
            </InputGroup>
          </div>
        </section>

        {/* Sugestão Metodológica contextual */}
        {plan.habilidades.length > 0 && (() => {
          const anoData = curriculumData.find((a) => a.ano === plan.ano);
          const sugestoes = new Set<string>();
          if (anoData) {
            for (const t of anoData.trimestres) {
              for (const o of t.objetos) {
                if (o.sugestaoMetodologica && o.habilidades.some((h) => plan.habilidades.some((s) => s.codigo === h.codigo))) {
                  sugestoes.add(`${o.titulo}: ${o.sugestaoMetodologica}`);
                }
              }
            }
          }
          if (sugestoes.size === 0) return null;
          return (
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 pb-2 border-b border-border">
                Sugestões Metodológicas do Referencial
              </h2>
              <div className="space-y-3">
                {Array.from(sugestoes).map((s, i) =>
                <div key={i} className="p-3 bg-skill-hover rounded-md border border-border">
                    <p className="text-sm text-foreground/80 text-pretty leading-relaxed">{s}</p>
                  </div>
                )}
              </div>
            </section>);

        })()}

        {/* Assinatura */}
        <section className="mt-12 pt-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-64 border-t border-foreground/40" />
            <p className="text-sm text-muted-foreground">Assinatura do(a) Professor(a)</p>
          </div>
        </section>

        <div className="h-8" />
      </div>
    </div>);

};

export default LessonPlanForm;