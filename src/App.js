import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/core-ui" exact component={Home} />
        <Route path="/core-ui/page1" component={Page1} />
        <Route path="/core-ui/page2" component={Page2} />
        <Route path="/core-ui/page3" component={Page3} />
        <Route path="/core-ui/page4" component={Page4} />
      </Switch>
    </Router>
  );
}

export default App;
