import { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard/Card";

type Recipe = {
  id: string;
  name: string;
  temperature: string;
  time: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  video: string;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://us-central1-airfryerrecipes-bf3ea.cloudfunctions.net/fetchRecipes"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <section>
      {isLoading ? (
        <section>
          <span aria-busy="true">Loading...</span>
        </section>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
