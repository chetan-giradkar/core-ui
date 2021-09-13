import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accordion from './Components/Accordion/Accordion';
import SideBar from './Components/SideBar/SideBar';
import AnchorMenu from './Components/AnchorMenu/AnchorMenu';
import Tabs from './Components/Tabs/Tabs';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/core-ui" exact component={Home} />
        <Route path="/core-ui/accordion" component={Accordion} />
        <Route path="/core-ui/anchormenu" component={AnchorMenu} />
        <Route path="/core-ui/sidebar" component={SideBar} />
        <Route path="/core-ui/tabs" component={Tabs} />
        <Route path="/core-ui/sign-in" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
