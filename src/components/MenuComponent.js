import React,{Component} from "react";
import {Media} from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import DishDetails from "./DishDetailComponent";

class Menu extends Component{
    
    constructor(props){
        super(props);

        this.state = {
          selectedDish: null
        }
        // console.log('Menu Component Constructor is invoked')
    }

    // componentDidMount(){
    //     console.log('Menu Component ComponentDidMount is invoked')
    // }

    onDishSelect(dish){
        
        this.setState({selectedDish: dish})
        console.log(this.state.selectedDish)
    }

    // renderDish(dish){
    //     if (dish != null) {
    //         return (
    //             <Card>
    //                 <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>
    //                         {dish.description}
    //                     </CardText>
    //                 </CardBody>
    //             </Card>
    //         )
    //     }
    //     else{
    //         return(
    //             <div></div>
    //         )
    //     }
    // }


    render(){
        // console.log('Menu Component Render is invoked')
       // console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {()=> this.onDishSelect(dish)}>
                        <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
                        
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>

                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                    <div>
                        <DishDetails details = {this.state.selectedDish}/>
                    </div>
            </div>
        );
    }
}

export default Menu;