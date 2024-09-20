import { Box, Button, Container, Stack, Typography } from "@mui/material";
import type { TMovie } from "../../consts/const";

interface HighlightSectionProps {
  movie: TMovie | null;
}
function HighlightSection({ movie }: HighlightSectionProps) {
  if (!movie) {
    return <div>Selecione um filme para ver detalhes</div>;
  }

  return (
    <Box>
      <Container>
        <Stack direction="row">
          <img
            src={movie.poster}
            alt={movie.title}
            style={{ width: "300px" }}
          />
          <Stack justifyContent="center" paddingLeft="3rem">
            <Typography variant="h4">{movie.title}</Typography>
            <Typography variant="subtitle2" marginBottom="2rem">
              <span
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  padding: "0.25rem",
                  marginRight: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                16
              </span>
              {movie.genero}
            </Typography>
            <Typography variant="subtitle1" marginBottom="0.5rem">
              Sinopse
            </Typography>
            <Typography variant="body2" marginBottom="0.75rem">
              {movie.descricao}
            </Typography>
            <Stack direction={"row"} gap={1}>
              <Button variant="outlined">Assistir</Button>
              <Button variant="outlined">Detalhes</Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HighlightSection;
