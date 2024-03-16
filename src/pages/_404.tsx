import { FaFaceSadCry } from "react-icons/fa6";

export function NotFound() {
  return (
    <section className="container">
      <h1>
        <FaFaceSadCry />
        <br />
        404: Not Found
      </h1>

      <p>It's gone :(</p>
    </section>
  );
}
