import Navbars from "./compenents/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import SingIn from "./pages/SingIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbars />

          <div className="container ps-5 pe-5 ">
            <Switch>
         
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              
            
              <Route  path="/home">
                <Home />
              </Route>
              <Route path="/">
                <SingIn />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
