import React,{Component} from "react";
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'
import {Media} from 'reactstrap';

class DishDetails extends Component{
   
    render(){
        if (this.props.details != null) {
            const comments = this.props.details.comments.map((commentDetails)=>{
                return (
                    <div key={commentDetails.id}>
                        <p>{commentDetails.comment}</p>
                        <p>-- {commentDetails.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(commentDetails.date)))}</p>
                    </div>
                )
            })
           
            return(
          <div className="container">
            <div className="row">
              
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
                 <div className="col-12 col-md-5 m-1">
                     <Media body>
                        <Media heading> Comments</Media>
                        {comments}
                     </Media>
                    
                 </div>
            </div>
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