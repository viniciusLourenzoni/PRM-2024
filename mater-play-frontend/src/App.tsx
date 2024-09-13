import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import MovieCard from "./app/components/MovieCard";
import Section from "./app/components/Section";
import HighlightSection from "./app/components/HighlightSection";

export const movies = [
  {
    poster: "/assets/poster1.jpg",
  },
  {
    poster: "/assets/poster2.jpg",
  },
  {
    poster: "/assets/poster3.jpg",
  },
  {
    poster: "/assets/poster4.jpg",
  },
  {
    poster: "/assets/poster5.jpg",
  },
  {
    poster: "/assets/poster6.jpg",
  },
  {
    poster: "/assets/poster7.jpg",
  },
  {
    poster: "/assets/poster8.jpg",
  },
  {
    poster: "/assets/poster9.jpg",
  },
  {
    poster: "/assets/poster10.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <HighlightSection></HighlightSection>
        <Section title="Recomendados para Você"></Section>
        {/* <Section title="Para toda Família"></Section>
        <Section title="Filmes de Comédia"></Section>
        <Section title="Filmes de Suspense"></Section> */}
      </main>
      {movies.map((movie, index) => (
        <MovieCard key={index} capa={movie.poster} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
