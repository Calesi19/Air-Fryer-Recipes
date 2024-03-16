import "./style.css";
import { useState } from "preact/hooks";

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

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section>
      <article>
        <section>
          <img src={recipe.image} alt="Hello" />
        </section>
        <hgroup>
          <h2>{recipe.name}</h2>
          <p>
            Cook at {recipe.temperature} for {recipe.time} minutes
          </p>
        </hgroup>
        <footer>
          <details>
            <summary>Ingredients</summary>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={`${recipe.id}-ingredient-${index}`}>{ingredient}</li>
              ))}
            </ul>
          </details>

          <hr />

          <details>
            <summary>Process</summary>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={`${recipe.id}-instruction-${index}`}>{instruction}</li>
              ))}
            </ol>
          </details>
          <div className="grid"></div>
        </footer>
      </article>
    </section>
  );
}
