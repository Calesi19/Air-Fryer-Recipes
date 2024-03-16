import RecipeCard from "../../components/Card";
import "./style.css";

export function Home() {
  return (
    <div class="home">
      <section>
        <RecipeCard />
      </section>
      <section>
        <RecipeCard />
      </section>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
