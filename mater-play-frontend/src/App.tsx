import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import MovieCard from "./app/components/MovieCard";
import Section from "./app/components/Section";
import HighlightSection from "./app/components/HighlightSection";
import { Container } from "@mui/material";
import { movies } from "./app/consts/const";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <HighlightSection></HighlightSection>
        <Section title="Recomendados para Você"></Section>
      </main>
      <Container>
        {movies.map((movie, index) => (
          <MovieCard key={index} capa={movie.poster} />
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
