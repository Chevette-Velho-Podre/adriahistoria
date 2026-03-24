import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
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

          {!forgotPassword && !isSignUp && (
            <>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">ou</span>
                </div>
              </div>

              <button
                type="button"
                onClick={async () => {
                  setError(null);
                  const result = await lovable.auth.signInWithOAuth("google", {
                    redirect_uri: window.location.origin,
                  });
                  if (result?.error) {
                    setError(result.error instanceof Error ? result.error.message : String(result.error));
                  }
                }}
                className="w-full py-2.5 text-sm font-medium rounded-md border border-input bg-background text-foreground hover:bg-accent transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Entrar com Google
              </button>
            </>
          )}

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
