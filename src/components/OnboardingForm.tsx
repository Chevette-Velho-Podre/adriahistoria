import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import logoSecretaria from "@/assets/logo-secretaria-educacao.png";

interface OnboardingFormProps {
  userId: string;
  onComplete: () => void;
}

const OnboardingForm = ({ userId, onComplete }: OnboardingFormProps) => {
  const [nome, setNome] = useState("");
  const [escola, setEscola] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !escola.trim()) return;

    setSubmitting(true);
    const { error } = await supabase
      .from("profiles")
      .update({ nome: nome.trim(), escola: escola.trim() })
      .eq("user_id", userId);

    if (error) {
      toast.error("Erro ao salvar perfil.");
      console.error("Profile update error:", error.message);
    } else {
      toast.success("Perfil salvo com sucesso!");
      onComplete();
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <img src={logoSecretaria} alt="Secretaria de Educação" className="h-12 mx-auto" />
          <h1 className="text-lg font-bold text-foreground font-mono">Complete seu cadastro</h1>
          <p className="text-xs text-muted-foreground">Preencha seus dados para começar a usar a plataforma</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg border border-border bg-card">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
              Nome completo
            </label>
            <input
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring/30"
              placeholder="Seu nome completo"
              maxLength={200}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
              Instituição de origem
            </label>
            <input
              type="text"
              required
              value={escola}
              onChange={(e) => setEscola(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring/30"
              placeholder="Nome da escola ou instituição"
              maxLength={200}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {submitting ? "Salvando..." : "Continuar"}
          </button>
        </form>

        <p className="text-[10px] text-center text-muted-foreground/60">
          Adria, Assistente de Planejamento — por Rômulo Ferreira — 2026
        </p>
      </div>
    </div>
  );
};

export default OnboardingForm;
