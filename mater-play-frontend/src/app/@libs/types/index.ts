export interface IMovie {
  id?: string;
  title: string;
  description: string;
  ageRating: string;
  poster: string;
}

export interface ICategory {
  id?: string;
  name: string;
  active: boolean;
}
