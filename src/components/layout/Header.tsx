import { useLocation } from "preact-iso";
import { FaPlus } from "react-icons/fa";

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
                  <FaPlus />
                </button>
              </li>
            </ul>
          </nav>
        
      </section>
    </header>
  );
}
