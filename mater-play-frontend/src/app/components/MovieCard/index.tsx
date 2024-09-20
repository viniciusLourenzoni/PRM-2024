import Paper from "@mui/material/Paper";
import type { TMovie } from "../../consts/const";

interface MovieCardProps {
  movie: TMovie;
  onSelect: (movie: TMovie) => void;
}

function MovieCard({ movie, onSelect }: MovieCardProps) {
  return (
    <Paper
      elevation={0}
      component="a"
      onClick={() => onSelect(movie)}
      sx={{
        minWidth: "10rem",
        margin: "0.5rem",
        cursor: "pointer",
      }}
    >
      <img
        src={movie.poster}
        alt="Movie capa"
        style={{
          width: "200px",
          paddingTop: "1rem",
        }}
      />
    </Paper>
  );
}

export default MovieCard;
