import { Box, Container, Stack, Typography } from "@mui/material";
import { TSectionProps } from "./section-props-type";
import { useEffect, useState } from "react";
import { IMovie } from "../../@libs/types";
import { MoviesService } from "../../services/movie-service";
import MovieCard from "../MovieCard";

function Section({ title }: TSectionProps) {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    MoviesService.getMovies().then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <Box>
      <Container>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            paddingTop: "2rem",
          }}
        >
          {title}
        </Typography>
        <Stack
          direction="row"
          gap={0.5}
          sx={{
            overflowY: "hidden",
            whiteSpace: "nowrap",
            paddingY: "1rem",
          }}
        >
          {movies.map((item) => (
            <MovieCard poster={"assets/" + item.poster} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Section;
