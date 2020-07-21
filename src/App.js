import React,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Navigation from "./layout/navbar.js"
import Footer from "./layout/footer.js"
import Blogicon from "./layout/blogicon.js"
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
import Details from './pages/details.js'
import Buildingdetails from './pages/buildingdetails.js'
import TouristDetails from './pages/touristdetails.js'
import Festsdetail from './pages/festdetail.js'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route  path="/books" component={Books}/>
        <Route  exact path="/buildings" component={Buildings}/>
        <Route  path="/canteen" component={Canteen}/>
        <Route  exact path="/busroutes" component={BusRoutes}/>
        <Route  path="/grade" component={Grade}/>
        <Route  path="/clubs" component={Clubs}/>
        <Route  exact path="/tourist" component={Tourist}/>
        <Route  exact path="/fest" component={Fest}/>
        <Route path="/busroutes/:id" component={Details}/>
        <Route path="/buildings/:id" component={Buildingdetails}/>
        <Route path="/tourist/:id" component={TouristDetails}/>
        <Route path="/fest/:id" component={Festsdetail}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
      <Blogicon/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
