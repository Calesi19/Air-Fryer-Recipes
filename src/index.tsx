import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { Header } from "./components/layout/Header.js";
import Home from "./pages/Home/index.js";
import { NotFound } from "./pages/_404.js";
import "./style.scss";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main className="container">
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
