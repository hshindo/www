type Publication = {
  title: string;
  authors: string[];
  booktitle: string;
  date: string; // '2018' or '2018-09' or '2018-09-10'
  notes: string[];
  links: {
    title?: string;
    booktitle?: string;
    bibtex?: string;
    github?: string;
    googleSlides?: string; // embed url
    pdf?: string;
    slides?: string;
    video?: string;
    youtube?: string; // embed url
  };
};

type Award = {
  name: string;
  title: string;
  authors: string[];
  booktitle: string;
  date: string;
  links: {
    title?: string;
    booktitle?: string;
    bibtex?: string;
    github?: string;
    googleSlides?: string; // embed url
    pdf?: string;
    slides?: string;
    video?: string;
    youtube?: string; // embed url
  };
};
