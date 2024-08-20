import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navigationbar from "./components/Navbar/Navigationbar";

import Root from "./components/Pages/Root";
import Datenbanken from "./components/Pages/Datenbanken";
import Einstellungen from "./components/Pages/Einstellungen";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Root} />

          <Route path="/einstellungen" component={Einstellungen} />
          <Route path="/datenbanken" component={Datenbanken} />
  
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
