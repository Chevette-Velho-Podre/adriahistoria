import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAdmin } from "@/hooks/useAdmin";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, FileText, Activity } from "lucide-react";

interface UserStats {
  user_id: string;
  email: string;
  nome: string;
  escola: string;
  plans_count: number;
  last_login: string | null;
  login_count: number;
}

const Admin = () => {
  const { isAdmin, loading: adminLoading } = useAdmin();
  const { loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (adminLoading || authLoading) return;
    if (!isAdmin) {
      navigate("/", { replace: true });
      return;
    }

    const fetchData = async () => {
      // Fetch profiles
      const { data: profiles } = await supabase
        .from("profiles")
        .select("user_id, nome, escola");

      if (!profiles) { setLoading(false); return; }

      // Fetch plan counts per user
      const { data: plans } = await supabase
        .from("lesson_plans")
        .select("user_id");

      // Fetch activity
      const { data: activity } = await supabase
        .from("user_activity")
        .select("user_id, email, created_at")
        .order("created_at", { ascending: false });

      const planCounts: Record<string, number> = {};
      plans?.forEach((p) => {
        planCounts[p.user_id] = (planCounts[p.user_id] || 0) + 1;
      });

      const loginData: Record<string, { count: number; last: string; email: string }> = {};
      activity?.forEach((a) => {
        if (!loginData[a.user_id]) {
          loginData[a.user_id] = { count: 0, last: a.created_at, email: a.email };
        }
        loginData[a.user_id].count++;
      });

      const merged: UserStats[] = profiles.map((p) => ({
        user_id: p.user_id,
        email: loginData[p.user_id]?.email || "—",
        nome: p.nome || "—",
        escola: p.escola || "—",
        plans_count: planCounts[p.user_id] || 0,
        last_login: loginData[p.user_id]?.last || null,
        login_count: loginData[p.user_id]?.count || 0,
      }));

      merged.sort((a, b) => {
        if (!a.last_login) return 1;
        if (!b.last_login) return -1;
        return new Date(b.last_login).getTime() - new Date(a.last_login).getTime();
      });

      setUsers(merged);
      setLoading(false);
    };

    fetchData();
  }, [isAdmin, adminLoading, authLoading, navigate]);

  if (adminLoading || authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-sm text-muted-foreground">Carregando painel...</p>
      </div>
    );
  }

  if (!isAdmin) return null;

  const totalUsers = users.length;
  const totalPlans = users.reduce((s, u) => s + u.plans_count, 0);
  const totalLogins = users.reduce((s, u) => s + u.login_count, 0);

  const formatDate = (d: string | null) => {
    if (!d) return "Nunca";
    return new Date(d).toLocaleDateString("pt-BR", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Painel Administrativo</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Usuários</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{totalUsers}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Planos Criados</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{totalPlans}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Logins</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{totalLogins}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Usuários e Atividade</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Escola</TableHead>
                  <TableHead className="text-center">Planos</TableHead>
                  <TableHead className="text-center">Logins</TableHead>
                  <TableHead>Último Acesso</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                      Nenhum usuário encontrado
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((u) => (
                    <TableRow key={u.user_id}>
                      <TableCell className="font-medium text-foreground">{u.email}</TableCell>
                      <TableCell>{u.nome}</TableCell>
                      <TableCell>{u.escola}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">{u.plans_count}</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline">{u.login_count}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {formatDate(u.last_login)}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
