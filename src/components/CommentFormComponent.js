import React,{Component} from "react";
import { Control, LocalForm, Errors } from 'react-redux-form'
import {Button, Label, Col, Row, Modal, ModalHeader, ModalBody} from 'reactstrap'


class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleComment(){
        this.toggleModal();
    }

    render(){
        return(
            <div>
                <Button onClick = {this.toggleModal}>
                    <span className="fa fa-comment fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>Submit</ModalHeader>
                    <ModalBody>
                        <LocalForm>
                            <Row className="form-group">
                            <Col>
                                <Label htmlFor = 'rating'>Rating</Label>
                                <Control.select model='.rating' name = 'rating'
                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                            </Row>
                            <Row className="form-group">
                            <Col>
                                <Label htmlFor = 'yourname'>Your Name</Label>
                                <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className='form-control'
                                />
                            </Col>
                            </Row>
                            <Row className="form-group">
                            <Col md={{size: 10}}>
                                <Label htmlFor = 'comment'>Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className='form-control'
                                ></Control.textarea>
                            </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default CommentForm;