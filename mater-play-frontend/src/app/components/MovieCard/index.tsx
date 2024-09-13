import Paper from "@mui/material/Paper";
import { TMovieCardProps } from "./movie-card-type";

function MovieCard({ capa }: TMovieCardProps) {
  return (
    <Paper elevation={0} component="a" href="/1" sx={{ minWidth: "10rem"}}>
      <img src={capa} alt="Movie capa" style={{ width: "20%" }} />
    </Paper>
  );
};

export default MovieCard;
