import Paper from "@mui/material/Paper";

type TMovieCardProps = {
  poster: string;
};

function MovieCard({ poster }: TMovieCardProps) {
  return (
    <Paper
      elevation={0}
      component="a"
      href="/1"
      sx={{
        minWidth: "10rem",
        margin: "0.5rem",
      }}
    >
      <img
        src={poster}
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
