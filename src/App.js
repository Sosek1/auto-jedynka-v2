import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Offer from "./pages/Offer";
import FAQ from "./pages/FAQ";
import UselessPage from "./pages/UselessPage";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import News from "./pages/News";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/strona-główna" />
        </Route>
        <Route path="/strona-główna" exact>
          <Homepage />
        </Route>
        <Route path="/oferta">
          <Offer />
        </Route>
        <Route path="/aktualności">
          <News />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/dekalog-ekokierowcy">
          <UselessPage />
        </Route>
        <Route path="/galeria">
          <Gallery />
        </Route>
        <Route path="/admin-panel">
          <AdminPanel />
        </Route>
        <Route path="/kontakt">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
export default App;
