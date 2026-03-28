import React, { useState, useEffect, useCallback, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Check, X, Download, FilePlus, LogOut, Clock, Minus, Plus } from "lucide-react";
import { curriculumData, type Habilidade } from "@/data/curriculum";
import logoSecretaria from "@/assets/logo-secretaria-educacao.png";
import { exportToPdf } from "@/utils/exportPdf";
import { exportToDocx } from "@/utils/exportDocx";
import SavedPlansManager from "@/components/SavedPlansManager";

export interface ObjetoSelecionado {
  id: string;
  subtopicos: string[];
}

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
  observacoes: string;
  referencias: string;
  habilidades: Habilidade[];
  objetosConhecimento: ObjetoSelecionado[];
  estimativaAulas: Record<string, number>;
}

interface LessonPlanFormProps {
  plan: LessonPlan;
  onChange: (plan: LessonPlan | ((prev: LessonPlan) => LessonPlan)) => void;
  onAnoChange: (ano: string) => void;
  onTrimestreChange: (trimestre: number | null) => void;
  onNewPlan?: () => void;
  activeId: string | null;
  onActiveIdChange: (id: string | null) => void;
  onSignOut?: () => void;
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

const LessonPlanForm = ({ plan, onChange, onAnoChange, onTrimestreChange, onNewPlan, activeId, onActiveIdChange, onSignOut }: LessonPlanFormProps) => {
  const [saved, setSaved] = useState(false);

  const update = useCallback(
    (field: keyof LessonPlan, value: string) => {
      onChange({ ...plan, [field]: value });
    },
    [plan, onChange]
  );

  const handleAnoChange = (ano: string) => {
    onChange({ ...plan, ano, trimestre: null, habilidades: [], objetosConhecimento: [] });
    onAnoChange(ano);
  };

  const anoData = useMemo(() => curriculumData.find((a) => a.ano === plan.ano), [plan.ano]);
  const availableTrimestres = useMemo(() => anoData?.trimestres.map(t => t.numero) ?? [], [anoData]);

  const removeSkill = (codigo: string) => {
    onChange({
      ...plan,
      habilidades: plan.habilidades.filter((h) => h.codigo !== codigo)
    });
  };

  const removeObjeto = (id: string) => {
    onChange({
      ...plan,
      objetosConhecimento: plan.objetosConhecimento.filter((o) => o.id !== id)
    });
  };

  const removeSubtopico = (objetoId: string, subtopico: string) => {
    onChange({
      ...plan,
      objetosConhecimento: plan.objetosConhecimento.map((o) =>
        o.id === objetoId
          ? { ...o, subtopicos: o.subtopicos.filter((s) => s !== subtopico) }
          : o
      )
    });
  };

  const addSubtopico = (objetoId: string, subtopico: string) => {
    onChange({
      ...plan,
      objetosConhecimento: plan.objetosConhecimento.map((o) =>
        o.id === objetoId
          ? { ...o, subtopicos: [...o.subtopicos, subtopico] }
          : o
      )
    });
  };

  // Resolve objeto names from IDs, merging curriculum data with selected subtopics
  const selectedObjetos = useMemo(() => {
    const anoData = curriculumData.find((a) => a.ano === plan.ano);
    if (!anoData) return [];
    const all = anoData.trimestres.flatMap((t) => t.objetos);
    return plan.objetosConhecimento
      .map((sel) => {
        const obj = all.find((o) => o.id === sel.id);
        if (!obj) return null;
        return {
          id: obj.id,
          titulo: obj.titulo,
          allSubtopicos: obj.subtopicos ?? [],
          selectedSubtopicos: sel.subtopicos,
        };
      })
      .filter(Boolean) as { id: string; titulo: string; allSubtopicos: string[]; selectedSubtopicos: string[] }[];
  }, [plan.ano, plan.objetosConhecimento]);

  // Auto-suggest 3 aulas per new object
  useEffect(() => {
    const updated = { ...plan.estimativaAulas };
    let changed = false;
    for (const obj of plan.objetosConhecimento) {
      if (!(obj.id in updated)) {
        updated[obj.id] = 3;
        changed = true;
      }
    }
    // Clean up removed objects
    for (const id of Object.keys(updated)) {
      if (!plan.objetosConhecimento.some((o) => o.id === id)) {
        delete updated[id];
        changed = true;
      }
    }
    if (changed) {
      onChange((prev) => ({ ...prev, estimativaAulas: updated }));
    }
  }, [plan.objetosConhecimento]);

  const updateEstimativa = useCallback((id: string, value: number) => {
    const clamped = Math.max(1, Math.min(20, value));
    onChange((prev) => ({
      ...prev,
      estimativaAulas: { ...prev.estimativaAulas, [id]: clamped },
    }));
  }, [onChange]);

  const totalAulas = useMemo(() => {
    return Object.values(plan.estimativaAulas).reduce((sum, v) => sum + v, 0);
  }, [plan.estimativaAulas]);

  const totalSemanas = useMemo(() => Math.ceil(totalAulas / 3), [totalAulas]);

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
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 w-full sm:w-auto">
          <img src={logoSecretaria} alt="Prefeitura de Montes Claros — Secretaria de Educação" className="h-7 sm:h-10 object-contain shrink-0" />
          <div className="h-5 sm:h-8 w-px bg-border shrink-0" />
          <div className="min-w-0 flex-1">
            <h1 className="text-xs sm:text-lg text-foreground font-mono font-extrabold leading-tight">Plano de Aula — História</h1>
            <p className="text-[9px] sm:text-xs text-muted-foreground leading-tight">Referencial Curricular — Montes Claros/MG</p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <AnimatePresence>
            {saved && <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            data-print-hide
            className="flex items-center gap-1.5 text-success text-xs font-medium">
                <Check className="h-3.5 w-3.5" />
                Salvo
              </motion.div>
            }
          </AnimatePresence>
          <div data-print-hide className="flex items-center gap-1.5 flex-wrap">
            {onNewPlan && (
              <button
                onClick={onNewPlan}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-input bg-background hover:bg-accent transition-colors"
                title="Iniciar novo planejamento"
              >
                <FilePlus className="h-3.5 w-3.5" />
                Novo
              </button>
            )}
            <SavedPlansManager currentPlan={plan} onLoad={(p) => onChange(p)} activeId={activeId} onActiveIdChange={onActiveIdChange} />
            <button
              onClick={exportToPdf}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-input bg-background hover:bg-accent transition-colors"
              title="Exportar como PDF"
            >
              <Download className="h-3.5 w-3.5" />
              PDF
            </button>
            <button
              onClick={() => exportToDocx(plan)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-input bg-background hover:bg-accent transition-colors"
              title="Exportar como Word (editável)"
            >
              <FileText className="h-3.5 w-3.5" />
              DOCX
            </button>
            {onSignOut && (
              <button
                onClick={onSignOut}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-input bg-background hover:bg-accent transition-colors"
                title="Sair da conta"
              >
                <LogOut className="h-3.5 w-3.5" />
                Sair
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-4 sm:p-6 max-w-3xl space-y-6 sm:space-y-8">
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
            <InputGroup label="Trimestre">
              <div className="flex gap-2">
                {availableTrimestres.map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => onTrimestreChange(plan.trimestre === num ? null : num)}
                    className={`flex-1 px-3 py-2 text-sm rounded-md border transition-all ${
                      plan.trimestre === num
                        ? "bg-skill-badge text-skill-badge-foreground border-skill-badge font-semibold"
                        : "bg-background border-input text-foreground hover:bg-accent"
                    }`}
                  >
                    {num}º
                  </button>
                ))}
              </div>
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
                    <React.Fragment key={obj.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-2 p-2 rounded-md bg-accent border border-border">
                      
                          <span className="flex-1 text-sm text-foreground/90 leading-relaxed text-justify">{obj.titulo}</span>
                          <button
                        onClick={() => removeObjeto(obj.id)}
                        className="mt-0.5 p-0.5 rounded-sm hover:bg-foreground/10 transition-colors">
                        
                            <X className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                        </motion.div>
                        {obj.allSubtopicos.length > 0 && (
                          <div className="ml-4 mb-1 space-y-0.5">
                            {/* Selected subtopics */}
                            {obj.selectedSubtopicos.map((sub, idx) => (
                              <div key={`sel-${idx}`} className="text-xs text-foreground/70 flex items-center gap-1.5 group/sub">
                                <span className="mt-0.5 h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                                <span className="flex-1">{sub}</span>
                                <button
                                  onClick={() => removeSubtopico(obj.id, sub)}
                                  className="opacity-0 group-hover/sub:opacity-100 p-0.5 rounded-sm hover:bg-foreground/10 transition-all"
                                  title="Remover subtópico"
                                >
                                  <X className="h-3 w-3 text-muted-foreground" />
                                </button>
                              </div>
                            ))}
                            {/* Available (not selected) subtopics to add back */}
                            {obj.allSubtopicos
                              .filter((s) => !obj.selectedSubtopicos.includes(s))
                              .map((sub, idx) => (
                                <button
                                  key={`avail-${idx}`}
                                  onClick={() => addSubtopico(obj.id, sub)}
                                  className="w-full text-left text-xs text-muted-foreground/50 flex items-center gap-1.5 hover:text-foreground/70 transition-colors py-0.5 line-through decoration-muted-foreground/30"
                                  title="Adicionar subtópico"
                                >
                                  <span className="mt-0.5 h-1 w-1 rounded-full bg-muted-foreground/20 shrink-0" />
                                  {sub}
                                </button>
                              ))}
                          </div>
                        )}
                    </React.Fragment>
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
                            <span className="text-sm text-foreground/80 text-justify leading-relaxed">
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
        {(plan.habilidades.length > 0 || plan.objetosConhecimento.length > 0) && (() => {
          const anoData = curriculumData.find((a) => a.ano === plan.ano);
          const sugestoes = new Set<string>();
          if (anoData) {
            for (const t of anoData.trimestres) {
              for (const o of t.objetos) {
                const matchBySkill = o.habilidades.some((h) => plan.habilidades.some((s) => s.codigo === h.codigo));
                const matchByObjeto = plan.objetosConhecimento.some((sel) => sel.id === o.id);
                if (o.sugestaoMetodologica && (matchBySkill || matchByObjeto)) {
                  sugestoes.add(o.sugestaoMetodologica);
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
                    <p className="text-sm text-foreground/80 text-justify leading-relaxed">{s}</p>
                  </div>
                )}
              </div>
            </section>);

        })()}

        {/* Seção: Observações */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 pb-2 border-b border-border">
            Observações
          </h2>
          <textarea
            className={textareaClass}
            placeholder="Registre aqui observações adicionais que julgar necessárias..."
            rows={4}
            value={plan.observacoes}
            onChange={(e) => update("observacoes", e.target.value)}
          />
        </section>

        {/* Seção: Referências */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 pb-2 border-b border-border">
            Referências
          </h2>
          <textarea
            className={textareaClass}
            placeholder="Liste os livros, textos e materiais que subsidiaram a elaboração deste plano..."
            rows={4}
            value={plan.referencias}
            onChange={(e) => update("referencias", e.target.value)}
          />
        </section>

        {/* Assinatura - never alone on a page */}
        <div className="flex flex-col items-center gap-2 mt-12 pt-8" style={{ breakBefore: 'avoid', pageBreakBefore: 'avoid' }}>
          <div className="w-64 border-t border-foreground/40" />
          <p className="text-sm text-muted-foreground">Assinatura do(a) Professor(a)</p>
        </div>

        <footer className="mt-10 pb-4 text-center" data-print-hide>
          <p className="text-xs text-muted-foreground/60">Assistente de planejamento Adria — desenvolvida por Rômulo Ferreira — 2026</p>
        </footer>
      </div>
    </div>);

};

export default LessonPlanForm;