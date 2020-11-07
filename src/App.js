import "./App.css";
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>This is chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
