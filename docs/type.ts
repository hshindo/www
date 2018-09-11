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

type Book = {
  title: string;
  authors: string[];
  TODO_what_is_this: string;
};

type ConferenceDomestic = {
  title: string;
  authors: string[];
  conference: string;
  conferenceUrl?: string;
  year: string;
  award?: string;
};

type ConferenceInternational = {
  title: string;
  authors: string;
  conference: string;
  conferenceUrl?: string;
  year: string;
  award?: string;
  slides?: string;
  video?: string;
  pdf?: string;
  bibtex?: string;
};

type Other = {
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
  url?: string;
};
