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
        <Route path="/core-ui" exact render={()=>{return <Home />}} />
        <Route path="/core-ui/accordion" render={()=>{return <Accordion title="title123" >Accordion123</Accordion>}} />
        <Route path="/core-ui/anchormenu" render={()=>{return <AnchorMenu />}} />
        <Route path="/core-ui/sidebar" render={()=>{return <SideBar />}} />
        <Route path="/core-ui/tabs" render={()=>{return <Tabs />}} />
        <Route path="/core-ui/sign-in" render={()=>{return <Login />}} />
      </Switch>
    </Router>
  );
}

export default App;
