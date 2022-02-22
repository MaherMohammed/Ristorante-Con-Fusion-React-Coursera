import React,{Component} from "react";
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'


class DishDetails extends Component{
    constructor(props){
        super(props)
        // this.state = {
        //     details:null
        // }
    }

    render(){
        if (this.props.details != null) {
            return(
          
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width = "100%" src = {this.props.details.image} alt = {this.props.details.name} />
                    <CardBody>
                        <CardTitle>{this.props.details.name}</CardTitle>
                        <CardText>
                            {this.props.details.description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
            
        );
        }else{
            return(
                <div></div>
            )
        }
        
    }
}


export default DishDetails