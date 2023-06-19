import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import TodoApp, { addItem } from "./Components/TodoApp/todoApp";
import Dashboard from "./Components/Dashboard/dashboard";
import PageNotFound from "./Components/PageNotFound/pageNotFound";

function App() {
  addItem();

  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <TodoApp />;
        </Route>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
