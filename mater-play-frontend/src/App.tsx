import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import Section from "./app/components/Section";
import HighlightSection from "./app/components/HighlightSection";
import { useEffect, useState } from "react";
import { ICategory } from "./app/@libs/types";
import { CategoryService } from "./app/services/category.service";

function App() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    CategoryService.getAll()
      .then((result) => {
        console.log(result);
        setCategories(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main
        style={{
          marginTop: "8rem",
        }}
      >
        <HighlightSection />
        {categories.map((item) => (
          <Section key={item.id} category={item} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
