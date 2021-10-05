import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Homepage from "./components/Homepage";
import RQSuperheroes from "./components/RQSuperUsers";
import Superheroes from "./components/SuperUsers";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/super-heroes">
                  Super Users
                </Link>
              </li>
              <li>
                <Link className="link" to="/rq-super-heroes">
                  RQ Super Users
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/super-heroes">
              <Superheroes />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperheroes />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
