import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import logoSecretaria from "@/assets/logo-secretaria-educacao.png";

const Auth = () => {
  const { user, loading, signIn, signUp } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground text-sm">Carregando...</p>
      </div>
    );
  }

  if (user) return <Navigate to="/" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    if (forgotPassword) {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) {
        setError(error.message);
      } else {
        setResetSent(true);
      }
      setSubmitting(false);
      return;
    }

    if (isSignUp) {
      const { error } = await signUp(email, password);
      if (error) {
        setError(error);
      } else {
        setConfirmMessage(true);
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) setError(error);
    }
    setSubmitting(false);
  };

  if (resetSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          <img src={logoSecretaria} alt="Secretaria de Educação" className="h-12 mx-auto" />
          <div className="p-6 rounded-lg border border-border bg-card space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Verifique seu e-mail</h2>
            <p className="text-sm text-muted-foreground">
              Enviamos um link de recuperação para <strong>{email}</strong>. Acesse seu e-mail para redefinir sua senha.
            </p>
          </div>
          <button
            onClick={() => { setResetSent(false); setForgotPassword(false); }}
            className="text-sm text-primary hover:underline"
          >
            Voltar ao login
          </button>
        </div>
      </div>
    );
  }

  if (confirmMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          <img src={logoSecretaria} alt="Secretaria de Educação" className="h-12 mx-auto" />
          <div className="p-6 rounded-lg border border-border bg-card space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Verifique seu e-mail</h2>
            <p className="text-sm text-muted-foreground">
              Enviamos um link de confirmação para <strong>{email}</strong>. Acesse seu e-mail para ativar sua conta.
            </p>
          </div>
          <button
            onClick={() => { setConfirmMessage(false); setIsSignUp(false); }}
            className="text-sm text-primary hover:underline"
          >
            Voltar ao login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <img src={logoSecretaria} alt="Secretaria de Educação" className="h-12 mx-auto" />
          <h1 className="text-lg font-bold text-foreground font-mono">Adria — Assistente de Planejamento</h1>
          <p className="text-xs text-muted-foreground">Plano de Aula — História</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg border border-border bg-card">
          <h2 className="text-base font-semibold text-foreground text-center">
            {forgotPassword ? "Recuperar senha" : isSignUp ? "Criar conta" : "Entrar"}
          </h2>

          {error && (
            <p className="text-xs text-destructive bg-destructive/10 rounded-md p-2 text-center">{error}</p>
          )}

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
              E-mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring/30"
              placeholder="professor@email.com"
            />
          </div>

          {!forgotPassword && (
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                Senha
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring/30"
                placeholder="Mínimo 6 caracteres"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {submitting ? "Aguarde..." : forgotPassword ? "Enviar link de recuperação" : isSignUp ? "Criar conta" : "Entrar"}
          </button>

          {forgotPassword ? (
            <p className="text-xs text-center text-muted-foreground">
              <button
                type="button"
                onClick={() => { setForgotPassword(false); setError(null); }}
                className="text-primary hover:underline font-medium"
              >
                Voltar ao login
              </button>
            </p>
          ) : (
            <>
              {!isSignUp && (
                <p className="text-xs text-center">
                  <button
                    type="button"
                    onClick={() => { setForgotPassword(true); setError(null); }}
                    className="text-muted-foreground hover:text-primary hover:underline"
                  >
                    Esqueci minha senha
                  </button>
                </p>
              )}
              <p className="text-xs text-center text-muted-foreground">
                {isSignUp ? "Já tem conta?" : "Não tem conta?"}{" "}
                <button
                  type="button"
                  onClick={() => { setIsSignUp(!isSignUp); setError(null); }}
                  className="text-primary hover:underline font-medium"
                >
                  {isSignUp ? "Faça login" : "Cadastre-se"}
                </button>
              </p>
            </>
          )}
        </form>

        <p className="text-[10px] text-center text-muted-foreground/60">
          Adria, Assistente de Planejamento — por Rômulo Ferreira — 2026
        </p>
      </div>
    </div>
  );
};

export default Auth;
