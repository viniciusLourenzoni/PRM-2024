export interface IMovie {
  id?: string;
  title: string;
  description: string;
  ageRating: string;
  poster: string;
  genre: IGenre[];
}

export interface ICategory {
  id?: string;
  name: string;
  active: boolean;
}

export interface IGenre {
  id?: string;
  name: string;
}
