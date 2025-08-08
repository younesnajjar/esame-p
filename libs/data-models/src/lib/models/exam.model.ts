export interface ExamModel {
  id?: string;
  student: {
    first_name?: string;
    last_name?: string;
  };
  meeting_point?: string;
  date?: Date;
  status: ExamStatus;
}

export enum ExamStatus {
  TO_ORGANIZE = 'A organiser',
  IN_SEARCH_OF_PLACE = 'Recherche de place',
  CONFIRMED = 'Confirmé',
  CANCELLED = 'Annulé'
}
