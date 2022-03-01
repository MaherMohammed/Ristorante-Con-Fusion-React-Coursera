import React,{Component} from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes.js'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetails from "./DishDetailComponent";

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            dishes:DISHES,
            selectedDish:null
        }
    }

    onDishSelect(dishId){
        this.setState({selectedDish: dishId})
    }

render(){
  return (
    <div className="App">
      <Header/>
      <Menu dishes = {DISHES} onClick = {(dishId)=> this.onDishSelect(dishId)}/>
      <DishDetails details = {this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} />
      <Footer/>
    </div>
  );
    }
}

export default Main;
