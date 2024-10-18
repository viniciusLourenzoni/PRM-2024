import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import Section from "./app/components/Section";
import HighlightSection from "./app/components/HighlightSection";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main
        style={{
          marginTop: "8rem",
        }}
      >
        <HighlightSection />
        <Section title="Recomendados para Você" />
        <Section title="Para toda sua Família" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
