type Associations = {
  title: string;
  authors: string[];
  at: string;
  atUrl?: string;
  year: string;
  award?: string;
};

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

type Books = {
  title: string;
  authors: string[];
  TODO_what_is_this: string;
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

type Others = {
  title: string;
  at: string;
  atUrl?: string;
  yearOrDate: string;
  slides?: string;
};

type Paper = {
  title: string;
  authors: string[];
  press: string;
  link?: string;
};
