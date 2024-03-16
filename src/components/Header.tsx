import { useLocation } from "preact-iso";
import { FaPlus } from "react-icons/fa";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <section>
        <nav className="container grid">
          <a href="/" class={url == "/" && "active"}>
            <h1>Home</h1>
          </a>
          <a href="/" class={url == "/" && "active"}>
            <h1>Home</h1>
          </a>
          <a href="/" class={url == "/" && "active"}>
            <h1>Home</h1>
          </a>
          <a href="/" class={url == "/" && "active"}>
            <button>
              <FaPlus />
              Add
            </button>
          </a>
        </nav>
      </section>
    </header>
  );
}
