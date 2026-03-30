import { useState, useCallback, useEffect, useRef } from "react";
import { Menu, X, LogOut } from "lucide-react";
import CurriculumSidebar from "@/components/CurriculumSidebar";
import LessonPlanForm, { type LessonPlan } from "@/components/LessonPlanForm";
import { curriculumData, type Habilidade } from "@/data/curriculum";
import { useAuth } from "@/hooks/useAuth";
import AIChatAssistant from "@/components/AIChatAssistant";
import OnboardingForm from "@/components/OnboardingForm";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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
  estimativaAulas: {},
};

const Index = () => {
  const { user, signOut } = useAuth();
  const [plan, setPlan] = useState<LessonPlan>(initialPlan);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load profile data to pre-fill professor/escola
  useEffect(() => {
    if (!user || profileLoaded) return;
    supabase
      .from("profiles")
      .select("nome, escola")
      .eq("user_id", user.id)
      .single()
      .then(({ data }) => {
        if (data && data.nome && data.escola) {
          setPlan((prev) => ({
            ...prev,
            professor: data.nome || prev.professor,
            escola: data.escola || prev.escola,
          }));
          setNeedsOnboarding(false);
        } else {
          setNeedsOnboarding(true);
        }
        setProfileLoaded(true);
      });
  }, [user, profileLoaded]);

  // Save profile when professor/escola change
  useEffect(() => {
    if (!user || !profileLoaded || needsOnboarding) return;
    const t = setTimeout(() => {
      supabase
        .from("profiles")
        .update({ nome: plan.professor, escola: plan.escola })
        .eq("user_id", user.id);
    }, 2000);
    return () => clearTimeout(t);
  }, [plan.professor, plan.escola, user, profileLoaded, needsOnboarding]);

  const handleNewPlan = useCallback(() => {
    if (!window.confirm("Deseja iniciar um novo planejamento?")) return;
    setPlan((prev) => ({ ...initialPlan, professor: prev.professor, escola: prev.escola }));
    setActiveId(null);
    toast.success("Novo planejamento iniciado");
  }, []);

  const handleToggleSkill = useCallback((h: Habilidade) => {
    setPlan((prev) => {
      const exists = prev.habilidades.some((s) => s.codigo === h.codigo);
      return {
        ...prev,
        habilidades: exists
          ? prev.habilidades.filter((s) => s.codigo !== h.codigo)
          : [...prev.habilidades, h],
      };
    });
  }, []);

  const handleToggleObjeto = useCallback((id: string) => {
    setPlan((prev) => {
      const exists = prev.objetosConhecimento.some((o) => o.id === id);
      if (exists) {
        return { ...prev, objetosConhecimento: prev.objetosConhecimento.filter((o) => o.id !== id) };
      }
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
  }, []);

  const handleAnoChange = useCallback((ano: string) => {
    setPlan((prev) => ({ ...prev, ano, trimestre: null, habilidades: [], objetosConhecimento: [] }));
  }, []);

  const handleTrimestreChange = useCallback((trimestre: number | null) => {
    setPlan((prev) => ({ ...prev, trimestre }));
  }, []);

  const handleSignOut = async () => {
    await signOut();
  };

  if (needsOnboarding && user) {
    return (
      <OnboardingForm
        userId={user.id}
        onComplete={() => {
          setNeedsOnboarding(false);
          setProfileLoaded(false);
        }}
      />
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <span className="text-sm font-semibold text-foreground">Adria — Assistente de Planejamento</span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSignOut}
            className="p-2 rounded-md hover:bg-accent transition-colors text-muted-foreground"
            title="Sair"
          >
            <LogOut className="h-4 w-4" />
          </button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-accent transition-colors"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-10 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

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

        <div className="flex-1 flex flex-col overflow-hidden w-full">
          <LessonPlanForm
            plan={plan}
            onChange={setPlan}
            onAnoChange={handleAnoChange}
            onTrimestreChange={handleTrimestreChange}
            onNewPlan={handleNewPlan}
            activeId={activeId}
            onActiveIdChange={setActiveId}
            onSignOut={handleSignOut}
          />
        </div>
      </div>
      <AIChatAssistant />
    </div>
  );
};

export default Index;
