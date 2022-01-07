import React from "react";
import Cls from "./component/parent";
import { Route, Redirect, Switch } from "react-router";
import SearchOnline from "./component/SerachParent";
import Contact from "./component/ContactUs";
import Navbar from "./component/Navbar";

class App extends React.Component {
 
  render() {
    return (
      <>
      
        <Navbar />
        <Switch>
          <Route exact path="/" component={Cls} />
          <Route path="/searchonline" component={SearchOnline} />
          <Route path="/contact/" component={Contact} />
          

          {/* <Route path="/aboutimg" component={SearchOnline} /> */}
          <Redirect from="/aboutimg" to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
