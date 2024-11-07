import Paper from "@mui/material/Paper";
import { IMovie } from "../../@libs/types";

type TMovieCardProps = {
  movie: IMovie;
};

function MovieCard({ movie }: TMovieCardProps) {
  return (
    <Paper
      elevation={0}
      component="a"
      href={{ movie.id}}
      sx={{
        minWidth: "10rem",
        margin: "0.5rem",
      }}
    >
      <img
        src={"/assets/" + movie.poster} 
        style={{
          width: "100%",
        }}
      />
    </Paper>
  );
}

export default MovieCard;
