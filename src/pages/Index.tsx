import { useState, useCallback, useEffect, useRef } from "react";
import { Menu, X, Save, Trash2 } from "lucide-react";
import CurriculumSidebar from "@/components/CurriculumSidebar";
import LessonPlanForm, { type LessonPlan } from "@/components/LessonPlanForm";
import { curriculumData, type Habilidade } from "@/data/curriculum";
import { toast } from "sonner";

const STORAGE_KEY = "adria-lesson-plan";

const initialPlan: LessonPlan = {
  professor: "",
  escola: "",
  data: "",
  ano: "6º Ano",
  trimestre: null,
  tema: "",
  objetivos: "",
  metodologia: "",
  avaliacao: "",
  observacoes: "",
  referencias: "",
  habilidades: [],
  objetosConhecimento: [],
};

const loadSavedPlan = (): LessonPlan | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved) as LessonPlan;
  } catch { /* ignore */ }
  return null;
};

const Index = () => {
  const [plan, setPlan] = useState<LessonPlan>(() => loadSavedPlan() ?? initialPlan);
  const isFirstRender = useRef(true);

  // Auto-save to localStorage on every change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
    } catch { /* storage full, ignore */ }
  }, [plan]);

  const handleNewPlan = useCallback(() => {
    if (!window.confirm("Deseja iniciar um novo planejamento? O rascunho atual será apagado.")) return;
    localStorage.removeItem(STORAGE_KEY);
    setPlan(initialPlan);
    toast.success("Novo planejamento iniciado");
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSkill = useCallback(
    (h: Habilidade) => {
      setPlan((prev) => {
        const exists = prev.habilidades.some((s) => s.codigo === h.codigo);
        return {
          ...prev,
          habilidades: exists
            ? prev.habilidades.filter((s) => s.codigo !== h.codigo)
            : [...prev.habilidades, h],
        };
      });
    },
    []
  );

  const handleToggleObjeto = useCallback(
    (id: string) => {
      setPlan((prev) => {
        const exists = prev.objetosConhecimento.some((o) => o.id === id);
        if (exists) {
          return {
            ...prev,
            objetosConhecimento: prev.objetosConhecimento.filter((o) => o.id !== id),
          };
        }
        // Find the object's subtopics from curriculum data
        const anoData = curriculumData.find((a) => a.ano === prev.ano);
        const allObjetos = anoData?.trimestres.flatMap((t) => t.objetos) ?? [];
        const obj = allObjetos.find((o) => o.id === id);
        return {
          ...prev,
          objetosConhecimento: [
            ...prev.objetosConhecimento,
            { id, subtopicos: obj?.subtopicos ? [...obj.subtopicos] : [] },
          ],
        };
      });
    },
    []
  );

  const handleAnoChange = useCallback((ano: string) => {
    setPlan((prev) => ({ ...prev, ano, trimestre: null, habilidades: [], objetosConhecimento: [] }));
  }, []);

  const handleTrimestreChange = useCallback((trimestre: number | null) => {
    setPlan((prev) => ({ ...prev, trimestre }));
  }, []);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <span className="text-sm font-semibold text-foreground">Adria — Assistente de Planejamento</span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md hover:bg-accent transition-colors"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Backdrop for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-10 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar - desktop always visible, mobile slide-over */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative z-20 h-[calc(100vh-49px)] lg:h-full w-[85vw] max-w-[400px] lg:w-[400px] lg:min-w-[400px] transition-transform duration-300 ease-in-out`}
        >
          <CurriculumSidebar
            selectedAno={plan.ano}
            selectedTrimestre={plan.trimestre}
            selectedSkills={plan.habilidades}
            selectedObjetos={plan.objetosConhecimento}
            onToggleSkill={handleToggleSkill}
            onToggleObjeto={handleToggleObjeto}
          />
        </div>

        {/* Editor */}
        <div className="flex-1 flex flex-col overflow-hidden w-full">
          <LessonPlanForm
            plan={plan}
            onChange={setPlan}
            onAnoChange={handleAnoChange}
            onTrimestreChange={handleTrimestreChange}
            onNewPlan={handleNewPlan}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
