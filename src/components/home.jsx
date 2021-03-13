import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FindFriend from "./../components/findFriend.jsx";
import AddFriend from "./../components/addFriend.jsx";

export default function App() {
  return (
    <>
      <Router>
            <div>
            <nav>
                <ul>
                {/* <button>
                    <Link to="*">Home</Link>
                </button> */}
                <button>
                    <Link to="/findFriend">Find friend</Link>
                </button>
                <button>
                    <Link to="/addFriend">+ Add new friend</Link>
                </button>
                </ul>
            </nav>

            <Switch>
                <Route path="/findFriend">
                <FindFriend />
                </Route>
                <Route path="/addFriend">
                <AddFriend />
                </Route>
                {/* <Route path="*">
                <Home />
                </Route> */}
            </Switch>
            </div>
        </Router>
    </>
  );
}
