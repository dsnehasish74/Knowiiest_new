import React,{Component} from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Navigation from "./layout/navbar.js"
import Footer from "./layout/footer.js"
import Home from './pages/home.js'
import About from './pages/about.js'
import Books from './pages/books.js'
import Buildings from './pages/buildings.js'
import BusRoutes from './pages/busroutes.js'
import Canteen from './pages/canteen.js'
import Grade from './pages/grade.js'
import Clubs from './pages/clubs.js'
import Tourist from './pages/tourist.js'
import Fest from './pages/fest.js'

class App extends Component {
  render(){
  return (
    <HashRouter>
    <div className="App">
    <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route  path="/books" component={Books}/>
        <Route  path="/buildings" component={Buildings}/>
        <Route  path="/canteen" component={Canteen}/>
        <Route  path="/busroutes" component={BusRoutes}/>
        <Route  path="/grade" component={Grade}/>
        <Route  path="/clubs" component={Clubs}/>
        <Route  path="/tourist" component={Tourist}/>
        <Route  path="/fest" component={Fest}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </div>
    </HashRouter>
  );
}
}

export default App;
