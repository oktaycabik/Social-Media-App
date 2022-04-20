import React from "react";
import Avatar from "../compenents/Avatar";
import Menu from "../compenents/Menu";
import Posts from "../compenents/Posts/Posts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post from "../compenents/Posts/Post";
function Home() {
  return (
    <>
      <Router>
        <div className="col-12 ">
          <div className="row pt-4">
            <div className=" col-lg-3 col-md-12 col-12 p-2 col-sections">
              <Avatar />
            </div>
            <div className=" col-lg-6 col-12 p-2  col-sections">
              <Switch>
                <Route  path="/post/:id">
                  <Post />
                </Route>
             
                  <Posts />
              
              </Switch>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 col-12 p-2 pe-5 ofset-4 col-sections ">
              <Menu />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Home;
