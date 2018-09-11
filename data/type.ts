// Award                    => 受賞
// AwardStudents            => 指導学生の受賞
// Book                     => Books
// ConferenceDomestic       => 研究会、全国大会
// ConferenceInternational  => 国際会議
// Other                    => 招待講演・その他
// Paper                    => 論文誌

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
