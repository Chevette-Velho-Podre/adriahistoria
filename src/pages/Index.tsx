import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import CurriculumSidebar from "@/components/CurriculumSidebar";
import LessonPlanForm, { type LessonPlan } from "@/components/LessonPlanForm";
import { curriculumData, type Habilidade } from "@/data/curriculum";

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
  habilidades: [],
  objetosConhecimento: [],
};

const Index = () => {
  const [plan, setPlan] = useState<LessonPlan>(initialPlan);
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
        <span className="text-sm font-semibold text-foreground">Clio — Planejador</span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md hover:bg-accent transition-colors"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - desktop always visible, mobile toggle */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } lg:block w-full lg:w-[400px] lg:min-w-[400px] absolute lg:relative z-20 h-[calc(100vh-49px)] lg:h-full`}
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
        <div className="flex-1 flex flex-col overflow-hidden">
          <LessonPlanForm
            plan={plan}
            onChange={setPlan}
            onAnoChange={handleAnoChange}
            onTrimestreChange={handleTrimestreChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
