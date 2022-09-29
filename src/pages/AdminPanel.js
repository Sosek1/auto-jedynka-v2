import { Route, Switch, Redirect } from "react-router-dom";

import AdminStart from "../Components/admin/AdminStart";

const AdminPanel = () => {
  return (
    <>
      <Switch>
        <Route>
          <AdminStart to="/admin-panel" exact />
        </Route>
      </Switch>
    </>
  );
};

export default AdminPanel;
