import React, { useState, useEffect } from "react";
import { FolderOpen, Save, Trash2, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { LessonPlan } from "@/components/LessonPlanForm";

export interface SavedPlanEntry {
  id: string;
  name: string;
  plan: LessonPlan;
  updatedAt: string;
}

const PLANS_KEY = "adria-saved-plans";

export const loadAllPlans = (): SavedPlanEntry[] => {
  try {
    const raw = localStorage.getItem(PLANS_KEY);
    return raw ? (JSON.parse(raw) as SavedPlanEntry[]) : [];
  } catch {
    return [];
  }
};

const persistPlans = (plans: SavedPlanEntry[]) => {
  localStorage.setItem(PLANS_KEY, JSON.stringify(plans));
};

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
}

const SavedPlansManager = ({ currentPlan, onLoad }: Props) => {
  const [plans, setPlans] = useState<SavedPlanEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    if (open) setPlans(loadAllPlans());
  }, [open]);

  const handleSave = () => {
    const entry: SavedPlanEntry = {
      id: crypto.randomUUID(),
      name: generateName(currentPlan),
      plan: currentPlan,
      updatedAt: new Date().toISOString(),
    };
    const updated = [entry, ...plans];
    persistPlans(updated);
    setPlans(updated);
  };

  const handleDelete = (id: string) => {
    const updated = plans.filter((p) => p.id !== id);
    persistPlans(updated);
    setPlans(updated);
  };

  const handleLoad = (entry: SavedPlanEntry) => {
    onLoad(entry.plan);
    setOpen(false);
  };

  const handleRename = (id: string) => {
    const updated = plans.map((p) =>
      p.id === id ? { ...p, name: editName.trim() || p.name } : p
    );
    persistPlans(updated);
    setPlans(updated);
    setEditingId(null);
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-input bg-background hover:bg-accent transition-colors"
          title="Meus planejamentos salvos"
        >
          <FolderOpen className="h-3.5 w-3.5" />
          Salvos
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">
            Meus Planejamentos
          </DialogTitle>
        </DialogHeader>

        {/* Save current */}
        <button
          onClick={handleSave}
          className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Save className="h-4 w-4" />
          Salvar planejamento atual
        </button>

        {/* List */}
        <div className="flex-1 overflow-y-auto space-y-2 mt-2">
          {plans.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              Nenhum planejamento salvo ainda.
            </p>
          ) : (
            plans.map((entry) => (
              <div
                key={entry.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors group"
              >
                <div className="flex-1 min-w-0">
                  {editingId === entry.id ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleRename(entry.id);
                      }}
                      className="flex gap-1.5"
                    >
                      <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="flex-1 px-2 py-1 text-sm border border-input rounded bg-background"
                        autoFocus
                      />
                      <button type="submit" className="text-xs text-primary font-medium">
                        OK
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => handleLoad(entry)}
                      className="text-left w-full"
                    >
                      <p className="text-sm font-medium text-foreground truncate">
                        {entry.name}
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
                    onClick={() => {
                      setEditingId(entry.id);
                      setEditName(entry.name);
                    }}
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
