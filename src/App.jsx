import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VehicleDetail from "./components/VehicleDetails";
import VehicleList from "./components/VehicleList";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <VehicleList />
        </Route>
        <Route path="/vehicles/:name">
          <VehicleDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
