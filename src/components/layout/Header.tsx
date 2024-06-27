import { GrEdit } from "react-icons/gr";

export function Header() {
  return (
    <header className="container">
      <section className="container">
        <nav>
          <ul>
            <li>
              <a href="/" className="contrast">
                <strong>Recipes</strong>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              {/* <button> */}
              {/*   <GrEdit /> */}
              {/* </button> */}
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
