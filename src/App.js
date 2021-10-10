import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import MatchPage from "./pages/MatchPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/team/:teamName" component={TeamPage} />
        <Route path="/matches/:teamName/:year" component={MatchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
