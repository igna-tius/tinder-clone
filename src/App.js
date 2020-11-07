import "./App.css";
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
import SwipeButtons from "./SwipeButtons.js";
import Chats from "./Chats.js";
import Chatscreen from "./Chatscreen.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <Chatscreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
