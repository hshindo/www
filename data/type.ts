type Publications = {
  title: string;
  authors: string[];
  journal: string;
  date: string; // yearのみの指定も可
  notes: string[];
  links: {
    detail: string; // 論文詳細へのリンク、講演会詳細へのリンク、学会HPへのリンク
    slides?: string;
    video?: string;
    pdf?: string;
    bibtex?: string;
  };
};
