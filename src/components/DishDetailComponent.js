import React from "react";
import {Card,CardImg,CardText,CardBody,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Media} from 'reactstrap';
import {Link} from 'react-router-dom'

function RenderComment({commentDetails}){
    return (
        <div key={commentDetails.id}>
            <p>{commentDetails.comment}</p>
            <p>-- {commentDetails.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(commentDetails.date)))}</p>
        </div>
    )
}


function RenderDish({dish}){
    return(
        <Card>
            <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                </CardBody>
        </Card>
    )
}

    const DishDetails = (props)=>{

       
        if (props.dish != null) {
            const comments = props.comments.map((commentDetails)=>{
                return (
                   <RenderComment commentDetails={commentDetails} />
                )
            })
           
            return(
          <div className="container">
               <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr />
                            </div>
                        </div>
            <div className="row">
              
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
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

export default DishDetails