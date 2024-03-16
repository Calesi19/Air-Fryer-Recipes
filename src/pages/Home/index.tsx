import React, { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard/Card";
import "./style.css";

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

const Salmon: Recipe = {
  id: "1",
  name: "Salmon",
  temperature: "400",
  time: "20",
  image:
    "https://evuecezehrh.exactdn.com/wp-content/uploads/2020/08/best-damn-air-fryer-salmon1.jpg",
  ingredients: ["Salmon", "Salt", "Pepper"],
  instructions: ["Step 1", "Step 2"],
  video: "https://www.youtube.com/watch?v=9sYEl9wJ6w4",
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // Fetch recipes

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://us-central1-airfryerrecipes-bf3ea.cloudfunctions.net/fetchRecipes"
      );
		
		const data = await response.json();
		console.log(data);
      setRecipes(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <section>
      <h1>Recipes</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
