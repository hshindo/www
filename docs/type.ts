type Publication = {
  title: string;
  authors: string[];
  journal: string;
  date: string; // '2018' or '2018-09' or '2018-09-10'
  notes: string[];
  links: {
    detail?: string; // 論文詳細へのリンク、講演会詳細へのリンク、学会HPへのリンク
    slides?: string;
    video?: string;
    pdf?: string;
    bibtex?: string;
  };
};

type Award = {
  name: string;
  title: string;
  authors: string;
  journal: string;
  date: string;
  links: {
    slides?: string;
    video?: string;
    pdf?: string;
  };
};
