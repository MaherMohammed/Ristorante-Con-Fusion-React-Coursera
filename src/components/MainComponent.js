import React,{Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetails from "./DishDetailComponent";
import {Switch,Route,Redirect, withRouter} from 'react-router-dom'
//to connect our main component to the redux store
import { connect } from 'react-redux'
import About from './AboutComponent';


//the state that is a parameter is obtained from redux store
const mapStateToProps = state => {
  // these became props to my main component
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
    constructor(props){
        super(props)
    }

    

render(){
  const HomePage = ()=>{
    return(
      <Home dish = {this.props.dishes.filter((dish)=>dish.featured)[0]}
        promotion = {this.props.promotions.filter((promotion)=>promotion.featured)[0]}
        leader = {this.props.leaders.filter((leader)=>leader.featured)[0]}
      />
    )
  }
// this method will get the parameter that is required
  const DishwithId=({match})=>{
    return(
      <DishDetails dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]} 
      comments={this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
      />
    )
  }
  return (
    
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        {/* to pass props */}
        <Route exact path="/menu" component={()=> <Menu dishes = {this.props.dishes}/> }/> 
        <Route path="/menu/:dishId" component={DishwithId} />
        <Route exact path="/contactus" component={()=> <Contact/>} />
        <Route exact path="/aboutus"  component={()=> <About leaders = {this.props.leaders}/>}/>
        <Redirect to="/home"/> 
        {/* default pass */}
      </Switch>
      
      <Footer/>
    </div>
  );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
