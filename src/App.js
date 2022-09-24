import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="strona-główna" />
        </Route>
        <Route path="/strona-główna">
          <Homepage />
        </Route>
      </Switch>
    </>
  );
}
export default App;
