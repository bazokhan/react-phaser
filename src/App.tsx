import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game1 from "./pages/game";
import Nft from "./pages/nft";

const App = () => (
  <div>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/nft">NFT</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/game">
          <Game1 />
        </Route>
        <Route path="/nft">
          <Nft />
        </Route>
        <Route path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
