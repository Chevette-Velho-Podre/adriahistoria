import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import logoSecretaria from "@/assets/logo-secretaria-educacao.png";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Listen for the PASSWORD_RECOVERY event
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setReady(true);
      }
    });

    // Also check if we already have a session (user clicked the link)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (password.length < 8) {
      setError("A senha deve ter no mínimo 8 caracteres.");
      return;
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      setError("A senha deve conter pelo menos 1 caractere especial.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => navigate("/", { replace: true }), 2000);
    }
    setSubmitting(false);
  };

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          <img src={logoSecretaria} alt="Secretaria de Educação" className="h-12 mx-auto" />
          <p className="text-sm text-muted-foreground">Verificando link de recuperação...</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          <img src={logoSecretaria} alt="Secretaria de Educação" className="h-12 mx-auto" />
          <div className="p-6 rounded-lg border border-border bg-card space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Senha atualizada!</h2>
            <p className="text-sm text-muted-foreground">Redirecionando...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <img src={logoSecretaria} alt="Secretaria de Educação" className="h-12 mx-auto" />
          <h1 className="text-lg font-bold text-foreground font-mono">Redefinir senha</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg border border-border bg-card">
          {error && (
            <p className="text-xs text-destructive bg-destructive/10 rounded-md p-2 text-center">{error}</p>
          )}

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
              Nova senha
            </label>
            <input
              type="password"
              required
              minLength={8}
              pattern="^(?=.*[!@#$%^&*()_+\-=\[\]{};':&quot;\\|,.<>\/?]).{8,}$"
              title="Mínimo 8 caracteres com pelo menos 1 caractere especial"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring/30"
              placeholder="Mínimo 8 caracteres com caractere especial"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
              Confirmar senha
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring/30"
              placeholder="Repita a nova senha"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {submitting ? "Atualizando..." : "Redefinir senha"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
