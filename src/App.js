import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Offer from "./pages/Offer";
import FAQ from "./pages/FAQ";
import UselessPage from "./pages/UselessPage";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import { AuthContextProvider } from "./store/auth-context";
import PrivateRoute from "./Components/admin/PrivateRoute";

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
        <Route path="/kontakt">
          <Contact />
        </Route>
        <AuthContextProvider>
          <PrivateRoute
            path="/admin-panel"
            component={AdminPanel}
          ></PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </AuthContextProvider>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
export default App;
