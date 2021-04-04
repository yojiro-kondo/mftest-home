import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Page1 from "./Pages/page1";
import Page2 from "./Pages/page2";
import Page3 from "./Pages/page3";
import { Toolbar } from "@material-ui/core";

export default function Root(props) {
  return (
    <>
      <section>
        <BrowserRouter basename="/home">
          <Switch>
            <Route path="/Page1" component={Page1} />
            <Route path="/Page2" component={Page2} />
            <Route path="/Page3" component={Page3} />
            <Route path="/">
              <ul>
                <li>
                  <Link to="/Page1">1</Link>
                </li>
                <li>
                  <Link to="/Page2">2</Link>
                </li>
                <li>
                  <Link to="/Page3">3</Link>
                </li>
                <li>
                  <a href="../about">about</a>
                </li>
              </ul>
            </Route>
          </Switch>
        </BrowserRouter>
      </section>
    </>
  );
}
