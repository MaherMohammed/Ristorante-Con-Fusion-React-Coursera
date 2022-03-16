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
                            <Label htmlFor = 'Rating'>Rating</Label>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default CommentForm;