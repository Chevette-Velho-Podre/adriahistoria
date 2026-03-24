import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  AlignmentType,
  BorderStyle,
  WidthType,
  ShadingType,
  ImageRun,
  Header,
} from "docx";
import { saveAs } from "file-saver";
import type { LessonPlan } from "@/components/LessonPlanForm";
import { curriculumData } from "@/data/curriculum";
import logoSecretaria from "@/assets/logo-secretaria-educacao.png";

const cellBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };
const noBorders = {
  top: { style: BorderStyle.NONE, size: 0 },
  bottom: { style: BorderStyle.NONE, size: 0 },
  left: { style: BorderStyle.NONE, size: 0 },
  right: { style: BorderStyle.NONE, size: 0 },
};
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

function makeCell(text: string, opts?: { bold?: boolean; shading?: string; width?: number; colSpan?: number }) {
  return new TableCell({
    borders: cellBorders,
    width: opts?.width ? { size: opts.width, type: WidthType.DXA } : undefined,
    columnSpan: opts?.colSpan,
    shading: opts?.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children: [
      new Paragraph({
        children: [new TextRun({ text, bold: opts?.bold, font: "Arial", size: 20 })],
      }),
    ],
  });
}

function makeHeaderCell(text: string, width?: number) {
  return makeCell(text, { bold: true, shading: "D5E8F0", width });
}

function sectionTitle(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 300, after: 100 },
    children: [
      new TextRun({ text, bold: true, font: "Arial", size: 24, color: "2E5090" }),
    ],
  });
}

function resolveObjetos(plan: LessonPlan) {
  const anoData = curriculumData.find((a) => a.ano === plan.ano);
  if (!anoData) return [];
  const all = anoData.trimestres.flatMap((t) => t.objetos);
  return plan.objetosConhecimento
    .map((sel) => {
      const obj = all.find((o) => o.id === sel.id);
      if (!obj) return null;
      return { titulo: obj.titulo, subtopicos: sel.subtopicos };
    })
    .filter(Boolean) as { titulo: string; subtopicos: string[] }[];
}

function resolveSugestoes(plan: LessonPlan): string[] {
  const anoData = curriculumData.find((a) => a.ano === plan.ano);
  if (!anoData) return [];
  const sugestoes = new Set<string>();
  for (const t of anoData.trimestres) {
    for (const o of t.objetos) {
      const matchBySkill = o.habilidades.some((h) => plan.habilidades.some((s) => s.codigo === h.codigo));
      const matchByObjeto = plan.objetosConhecimento.some((sel) => sel.id === o.id);
      if (o.sugestaoMetodologica && (matchBySkill || matchByObjeto)) {
        sugestoes.add(o.sugestaoMetodologica);
      }
    }
  }
  return Array.from(sugestoes);
}

type LoadedLogo = {
  data: ArrayBuffer;
  width: number;
  height: number;
};

function fitLogoSize(width: number, height: number, maxWidth: number, maxHeight: number) {
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  return {
    width: Math.max(1, Math.round(width * ratio)),
    height: Math.max(1, Math.round(height * ratio)),
  };
}

async function loadLogo(): Promise<LoadedLogo | null> {
  try {
    const resp = await fetch(logoSecretaria);
    if (!resp.ok) return null;

    const blob = await resp.blob();
    const data = await blob.arrayBuffer();
    const dimensions = await new Promise<{ width: number; height: number }>((resolve, reject) => {
      const objectUrl = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = () => {
        resolve({ width: img.naturalWidth, height: img.naturalHeight });
        URL.revokeObjectURL(objectUrl);
      };

      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Não foi possível carregar a logomarca"));
      };

      img.src = objectUrl;
    });

    return { data, ...dimensions };
  } catch {
    return null;
  }
}

export async function exportToDocx(plan: LessonPlan) {
  const objetos = resolveObjetos(plan);
  const sugestoes = resolveSugestoes(plan);
  const logo = await loadLogo();
  // A4 content width = 11906 - 1134 - 1134 = 9638 DXA ≈ 6.7 inches ≈ 482 pixels (at 72dpi)
  // Logo is 1920x239, so scale to full content width preserving aspect ratio
  const logoSize = logo ? fitLogoSize(logo.width, logo.height, 480, 200) : null;
  const tableWidth = 9360;
  const col1 = 2400;
  const col2 = tableWidth - col1;

  const children: (Paragraph | Table)[] = [];

  // Header: logo centered on its own line, then titles — mirrors the PDF layout
  if (logo && logoSize) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 120 },
        children: [
          new ImageRun({
            type: "png",
            data: logo.data,
            transformation: logoSize,
            altText: { title: "Logo", description: "Secretaria de Educação", name: "logo" },
          }),
        ],
      })
    );
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
        children: [new TextRun({ text: "Plano de Aula — História", bold: true, font: "Arial", size: 32 })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
        children: [new TextRun({ text: "Referencial Curricular — Montes Claros/MG", font: "Arial", size: 18, color: "666666" })],
      })
    );
  } else {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
        children: [new TextRun({ text: "Plano de Aula — História", bold: true, font: "Arial", size: 32 })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
        children: [new TextRun({ text: "Referencial Curricular — Montes Claros/MG", font: "Arial", size: 18, color: "666666" })],
      })
    );
  }

  // Identificação
  children.push(sectionTitle("Identificação"));
  children.push(
    new Table({
      width: { size: tableWidth, type: WidthType.DXA },
      columnWidths: [col1, col2],
      rows: [
        new TableRow({ children: [makeHeaderCell("Professor(a)", col1), makeCell(plan.professor || "—", { width: col2 })] }),
        new TableRow({ children: [makeHeaderCell("Escola", col1), makeCell(plan.escola || "—", { width: col2 })] }),
        new TableRow({ children: [makeHeaderCell("Data", col1), makeCell(plan.data || "—", { width: col2 })] }),
        new TableRow({ children: [makeHeaderCell("Ano/Série", col1), makeCell(plan.ano, { width: col2 })] }),
        new TableRow({ children: [makeHeaderCell("Trimestre", col1), makeCell(plan.trimestre ? `${plan.trimestre}º Trimestre` : "—", { width: col2 })] }),
      ],
    })
  );

  // Conteúdo
  children.push(sectionTitle("Conteúdo"));

  // Tema
  children.push(
    new Table({
      width: { size: tableWidth, type: WidthType.DXA },
      columnWidths: [col1, col2],
      rows: [
        new TableRow({ children: [makeHeaderCell("Tema da Aula", col1), makeCell(plan.tema || "—", { width: col2 })] }),
      ],
    })
  );

  // Objetos de Conhecimento
  if (objetos.length > 0) {
    children.push(
      new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Objetos de Conhecimento:", bold: true, font: "Arial", size: 20 })] })
    );
    for (const obj of objetos) {
      children.push(
        new Paragraph({
          spacing: { before: 80 },
          bullet: { level: 0 },
          children: [new TextRun({ text: obj.titulo, bold: true, font: "Arial", size: 20 })],
        })
      );
      for (const sub of obj.subtopicos) {
        children.push(
          new Paragraph({
            indent: { left: 720 },
            children: [new TextRun({ text: `• ${sub}`, font: "Arial", size: 18 })],
          })
        );
      }
    }
  }

  // Habilidades
  if (plan.habilidades.length > 0) {
    children.push(
      new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Habilidades:", bold: true, font: "Arial", size: 20 })] })
    );
    for (const h of plan.habilidades) {
      children.push(
        new Paragraph({ alignment: AlignmentType.JUSTIFIED,
          spacing: { before: 40 },
          children: [
            new TextRun({ text: `${h.codigo} `, bold: true, font: "Arial", size: 18, color: "2E5090" }),
            new TextRun({ text: h.descricao, font: "Arial", size: 18 }),
          ],
        })
      );
    }
  }

  // Objetivos
  if (plan.objetivos) {
    children.push(
      new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Objetivos:", bold: true, font: "Arial", size: 20 })] }),
      new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ text: plan.objetivos, font: "Arial", size: 20 })] })
    );
  }

  // Execução
  children.push(sectionTitle("Execução"));

  if (plan.metodologia) {
    children.push(
      new Paragraph({ spacing: { before: 100, after: 80 }, children: [new TextRun({ text: "Metodologia:", bold: true, font: "Arial", size: 20 })] }),
      new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ text: plan.metodologia, font: "Arial", size: 20 })] })
    );
  }

  if (plan.avaliacao) {
    children.push(
      new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Avaliação:", bold: true, font: "Arial", size: 20 })] }),
      new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ text: plan.avaliacao, font: "Arial", size: 20 })] })
    );
  }

  // Sugestões Metodológicas
  if (sugestoes.length > 0) {
    children.push(sectionTitle("Sugestões Metodológicas do Referencial"));
    for (const s of sugestoes) {
      children.push(
        new Paragraph({
          spacing: { before: 60 },
          children: [new TextRun({ text: s, font: "Arial", size: 18, italics: true })],
        })
      );
    }
  }

  // Observações
  if (plan.observacoes) {
    children.push(sectionTitle("Observações"));
    children.push(new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ text: plan.observacoes, font: "Arial", size: 20 })] }));
  }

  // Referências
  if (plan.referencias) {
    children.push(sectionTitle("Referências"));
    children.push(new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ text: plan.referencias, font: "Arial", size: 20 })] }));
  }

  // Assinatura
  children.push(
    new Paragraph({ spacing: { before: 600 }, children: [] }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      border: { top: { style: BorderStyle.SINGLE, size: 1, color: "999999", space: 1 } },
      spacing: { before: 0 },
      children: [new TextRun({ text: "Assinatura do(a) Professor(a)", font: "Arial", size: 18, color: "666666" })],
    })
  );

  const doc = new Document({
    styles: {
      default: {
        document: { run: { font: "Arial", size: 20 } },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838 }, // A4
            margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 },
          },
        },
        children,
      },
    ],
  });

  const buffer = await Packer.toBlob(doc);
  const filename = `plano-de-aula${plan.data ? `-${plan.data}` : ""}.docx`;
  saveAs(buffer, filename);
}
