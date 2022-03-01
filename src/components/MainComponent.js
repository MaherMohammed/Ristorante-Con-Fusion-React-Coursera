import React,{Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes.js'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetails from "./DishDetailComponent";
import {Switch,Route,Redirect} from 'react-router-dom'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            dishes:DISHES
        }
    }


render(){
  const HomePage = ()=>{
    return(
      <Home />
    )
  }
  return (
    
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        {/* to pass props */}
        <Route exact path="/menu" component={()=> <Menu dishes = {this.state.dishes}/> }/> 
        <Redirect to="/home"/> 
        {/* default pass */}
      </Switch>
      
      <Footer/>
    </div>
  );
    }
}

export default Main;
