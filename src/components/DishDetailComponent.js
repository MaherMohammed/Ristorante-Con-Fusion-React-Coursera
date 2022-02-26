import React from "react";
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'
import {Media} from 'reactstrap';


function RenderComment({commentDetails}){
    return (
        <div key={commentDetails.id}>
            <p>{commentDetails.comment}</p>
            <p>-- {commentDetails.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(commentDetails.date)))}</p>
        </div>
    )
}


function RenderDish({details}){
    return(
        <Card>
            <CardImg width = "100%" src = {details.image} alt = {details.name} />
                <CardBody>
                    <CardTitle>{details.name}</CardTitle>
                        <CardText>
                            {details.description}
                        </CardText>
                </CardBody>
        </Card>
    )
}

    const DishDetails = (props)=>{

       
        if (props.details != null) {
            const comments = props.details.comments.map((commentDetails)=>{
                return (
                   <RenderComment commentDetails={commentDetails} />
                )
            })
           
            return(
          <div className="container">
            <div className="row">
              
                <div className="col-12 col-md-5 m-1">
                    <RenderDish details={props.details} />
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