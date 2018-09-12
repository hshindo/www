type Publication = {
  title: string;
  authors: string[];
  booktitle: string;
  date: string; // '2018' or '2018-09' or '2018-09-10'
  notes: string[];
  links: {
    title?: string;
    booktitle?: string;
    slides?: string;
    video?: string;
    pdf?: string;
    bibtex?: string;
  };
};

type Award = {
  name: string;
  title: string;
  authors: string[];
  booktitle: string;
  date: string;
  links: {
    slides?: string;
    video?: string;
    pdf?: string;
    github?: string;
  };
};
