import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import MovieCard from "./app/components/MovieCard";
import Section from "./app/components/Section";
import HighlightSection from "./app/components/HighlightSection";
import { Container } from "@mui/material";
import { movies } from "./app/consts/const";
import { useState } from "react";
function App() {
  const [movie, setSelecionarMovie] = useState(movies[3]);

  return (
    <div className="wrapper">
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <HighlightSection movie={movie}></HighlightSection>
        <Section title="Recomendados para Você"></Section>
      </main>
      <Container>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onSelect={setSelecionarMovie} />
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
