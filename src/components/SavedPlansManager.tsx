import React, { useState, useEffect, useCallback } from "react";
import { FolderOpen, Save, Trash2, Clock, RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import type { LessonPlan } from "@/components/LessonPlanForm";

export interface SavedPlanEntry {
  id: string;
  name: string;
  plan: LessonPlan;
  updatedAt: string;
}

const generateName = (plan: LessonPlan): string => {
  const parts: string[] = [];
  if (plan.tema) parts.push(plan.tema.slice(0, 40));
  if (plan.ano) parts.push(plan.ano);
  if (parts.length === 0) {
    return `Planejamento ${new Date().toLocaleDateString("pt-BR")}`;
  }
  return parts.join(" — ");
};

interface Props {
  currentPlan: LessonPlan;
  onLoad: (plan: LessonPlan) => void;
  activeId: string | null;
  onActiveIdChange: (id: string | null) => void;
  onSaveTrigger?: () => void;
  saveTriggerRef?: React.MutableRefObject<(() => Promise<void>) | null>;
}

const SavedPlansManager = ({ currentPlan, onLoad, activeId, onActiveIdChange, saveTriggerRef }: Props) => {
  const { user } = useAuth();
  const [plans, setPlans] = useState<SavedPlanEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPlans = async () => {
    if (!user) return;
    setLoading(true);
    const { data } = await supabase
      .from("lesson_plans")
      .select("*")
      .order("updated_at", { ascending: false });
    if (data) {
      setPlans(
        data.map((row) => ({
          id: row.id,
          name: row.name,
          plan: row.plan_data as unknown as LessonPlan,
          updatedAt: row.updated_at,
        }))
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    if (open) fetchPlans();
  }, [open]);

  // Expose save function for external "Salvar" button
  const handleQuickSave = useCallback(async () => {
    if (!user) return;
    if (activeId) {
      await handleUpdate(activeId);
    } else {
      await handleSaveNew();
    }
  }, [user, activeId, currentPlan]);

  useEffect(() => {
    if (saveTriggerRef) {
      saveTriggerRef.current = handleQuickSave;
    }
  }, [handleQuickSave, saveTriggerRef]);

  const handleSaveNew = async () => {
    if (!user) return;
    const name = generateName(currentPlan);
    const { data, error } = await supabase
      .from("lesson_plans")
      .insert([{ user_id: user.id, name, plan_data: JSON.parse(JSON.stringify(currentPlan)) }])
      .select()
      .single();
    if (error) { toast.error("Erro ao salvar"); return; }
    if (data) {
      onActiveIdChange(data.id);
      fetchPlans();
      toast.success("Planejamento salvo");
    }
  };

  const handleUpdate = async (id: string) => {
    const name = generateName(currentPlan);
    const { error } = await supabase
      .from("lesson_plans")
      .update({ name, plan_data: JSON.parse(JSON.stringify(currentPlan)) })
      .eq("id", id);
    if (error) { toast.error("Erro ao atualizar"); return; }
    fetchPlans();
    toast.success("Planejamento atualizado");
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("lesson_plans").delete().eq("id", id);
    if (error) { toast.error("Erro ao excluir"); return; }
    if (activeId === id) onActiveIdChange(null);
    fetchPlans();
  };

  const handleLoad = (entry: SavedPlanEntry) => {
    onLoad(entry.plan);
    onActiveIdChange(entry.id);
    setOpen(false);
    toast.success("Planejamento carregado");
  };

  const handleRename = async (id: string) => {
    const { error } = await supabase
      .from("lesson_plans")
      .update({ name: editName.trim() })
      .eq("id", id);
    if (error) { toast.error("Erro ao renomear"); return; }
    setEditingId(null);
    fetchPlans();
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleString("pt-BR", {
        day: "2-digit", month: "2-digit", year: "2-digit",
        hour: "2-digit", minute: "2-digit",
      });
    } catch { return ""; }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-input bg-background hover:bg-accent transition-colors"
          title="Meus planejamentos salvos"
        >
          <FolderOpen className="h-3.5 w-3.5" />
          Meus Planos
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Meus Planejamentos</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2">
          <button
            onClick={handleSaveNew}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Save className="h-4 w-4" />
            Salvar como novo
          </button>
          {activeId && plans.some((p) => p.id === activeId) && (
            <button
              onClick={() => handleUpdate(activeId)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              Atualizar atual
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 mt-2">
          {loading ? (
            <p className="text-sm text-muted-foreground text-center py-8">Carregando...</p>
          ) : plans.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              Nenhum planejamento salvo ainda.
            </p>
          ) : (
            plans.map((entry) => (
              <div
                key={entry.id}
                className={`flex items-start gap-3 p-3 rounded-lg border transition-colors group ${
                  entry.id === activeId
                    ? "border-primary/50 bg-primary/5"
                    : "border-border hover:bg-accent/50"
                }`}
              >
                <div className="flex-1 min-w-0">
                  {editingId === entry.id ? (
                    <form
                      onSubmit={(e) => { e.preventDefault(); handleRename(entry.id); }}
                      className="flex gap-1.5"
                    >
                      <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="flex-1 px-2 py-1 text-sm border border-input rounded bg-background"
                        autoFocus
                      />
                      <button type="submit" className="text-xs text-primary font-medium">OK</button>
                    </form>
                  ) : (
                    <button onClick={() => handleLoad(entry)} className="text-left w-full">
                      <p className="text-sm font-medium text-foreground truncate flex items-center gap-1.5">
                        {entry.name}
                        {entry.id === activeId && (
                          <span className="text-[10px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                            atual
                          </span>
                        )}
                      </p>
                      <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Clock className="h-3 w-3" />
                        {formatDate(entry.updatedAt)}
                        {entry.plan.professor && ` · ${entry.plan.professor}`}
                      </p>
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <button
                    onClick={() => handleUpdate(entry.id)}
                    className="p-1.5 rounded hover:bg-muted text-muted-foreground"
                    title="Sobrescrever com dados atuais"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => { setEditingId(entry.id); setEditName(entry.name); }}
                    className="p-1.5 rounded hover:bg-muted text-muted-foreground text-xs"
                    title="Renomear"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="p-1.5 rounded hover:bg-destructive/10 text-destructive"
                    title="Excluir"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SavedPlansManager;
