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
  return (
    <section>
      <article>
        <section>
          <img src={recipe.image} alt="Hello" />
        </section>
        <hgroup>
          <h2>{recipe.name}</h2>
          <p>
            Airfry at {recipe.temperature} for {recipe.time} minutes
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
            {recipe.video && (
              <a href={recipe.video}>
                <div className="grid">
                  <button className="outline">Watch Video</button>
                </div>
              </a>
            )}
          </details>
        </footer>
      </article>
    </section>
  );
}
