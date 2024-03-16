import { useLocation } from "preact-iso";
import { GrEdit } from "react-icons/gr";

export function Header() {
  const { url } = useLocation();

  return (
    <header className="container">
      <section className="container">
        <nav>
          <ul>
            <li>
              <strong>Recipes</strong>
            </li>
          </ul>
          <ul>
            <li>
              <button>
                <GrEdit />
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
