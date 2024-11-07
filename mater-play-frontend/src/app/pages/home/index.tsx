import { useEffect, useState } from "react";
import HighlightSection from "../../components/HighlightSection";
import Section from "../../components/Section";
import { ICategory } from "../../@libs/types";
import { CategoryService } from "../../services/category.service";

function homePage() {
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
  );
}

export default homePage;
