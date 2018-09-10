type Award = {
  awardName: string;
  title?: string;
  organization: string;
  year: string;
  slides?: string;
  video?: string;
  github?: string;
};

type AwardStudents = {
  awardName: string;
  title: string;
  students: string[];
  year: string;
};

type Paper = {
  title: string;
  authors: string[];
  press: string;
  link?: string;
};

type InternationalConf = {
  title: string;
  authors: string;
  conference: string;
  conferenceLink?: string;
  slides?: string;
  video?: string;
  pdf?: string;
  bibtex?: string;
};
