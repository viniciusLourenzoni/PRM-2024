import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../@libs/types";
import { MoviesService } from "../../services/movie.service";

function HighLightSection() {
  const params = useParams();

  const [movie, setMovie] = useState<IMovie>({
    id: "",
    title: "",
    description: "",
    ageRating: "",
    poster: "",
    genre: [],
  });

  useEffect(() => {
    const movieId = params.id
      ? params.id
      : "b46617a2-7fe6-46b9-b761-4d6b05160f63";

    MoviesService.getMoviesById(movieId)
      .then((result) => {
        if (result) setMovie(result);
      })
      .catch((error) => {
        console.log("PAU: ", error);
      });
  }, [params]);

  return (
    <Box>
      <Container>
        <Stack direction="row">
          <img src={`assets/${movie.poster}`} />
          <Stack
            sx={{
              justifyContent: "center",
              paddingLeft: "3rem",
            }}
          >
            <Typography variant="h4">{movie.title}</Typography>
            <Typography variant="subtitle2">
              <span
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  padding: "0.2rem",
                  marginRight: "0.3rem",
                }}
              >
                {movie.ageRating}
              </span>
              {movie.genre.map((g) => g.name).join(", ")}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                paddingTop: "2rem",
                marginBottom: "0.5rem",
              }}
            >
              Sinopse
            </Typography>
            <Typography variant="body2">{movie.description}</Typography>
            <Stack
              gap={1}
              direction="row"
              sx={{
                paddingY: "1rem",
              }}
            >
              <Button variant="outlined">Assistir</Button>
              <Button variant="outlined">Detalhes</Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HighLightSection;
