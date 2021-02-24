import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Row, Label, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form'
import { useState } from 'react';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);



function DishdetailComponent(props) {


    const [isModelOpen, setIsModalOpen] = useState(false)
    const toggleModal = () => {
        setIsModalOpen(!isModelOpen)
    }


    const CommentForm = (props) => {
        const handleSubmit = (values) => {
            console.log("Current State is " + JSON.stringify(values))
            alert("Current State is " + JSON.stringify(values))
            props.addComment(props.dishId, values.rating, values.author, values.comment)
            toggleModal()
        }


        return (
            <Modal isOpen={isModelOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row className='form-group'>
                            <Label htmlFor="rating" md={2}>Rating</Label>
                            <Col md={10}>
                                <Control.select model=".rating" name="rating"
                                    className='form-control'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Label htmlFor="name" md={2}>Your Name</Label>
                            <Col md={10}>
                                <Control.text model=".author" name="author" id="author"
                                    className='form-control' placeholder="Enter Your Name"
                                    validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}>

                                </Control.text>
                                <Errors
                                    className='text-danger'
                                    model='.name'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }} />
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Label htmlFor="comment" md={2}>Comment</Label>
                            <Col md={10}>
                                <Control.textarea model=".comment" name="comment" id="comment"
                                    className='form-control' placeholder="Please say something" rows="5">

                                </Control.textarea>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        )
    }

    const RenderComments = ({ comments, addComment, dishId }) => {
        if (comments == 0)
            return (
                <div></div>
            )
        else
            return (
                <div >
                    <h4>COMMENTS</h4>
                    {
                        comments.map((comment) => {
                            return (
                                <div>

                                    <li className="list-unstyled" key={comment.id}>{comment.comment}</li>
                                    <li className="list-unstyled">
                                        {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                                    </li>
                                    <CommentForm dishId={dishId} addComment={addComment} />
                                </div>
                            )
                        })
                    }
                </div >
            )
    }

    const RenderDish = ({ selectedDish }) => {
        if (selectedDish == null)
            return (<></>)
        else
            return (
                <>
                    <div >

                        <div className='card col-sm-10 col-md-12'  >

                            <img className='card-img-top' src={selectedDish.image} alt={selectedDish.name} />
                            <div className='card-body' >

                                <h6 className='card-heading'>{selectedDish.name}</h6>
                                <p className='card-text'>{selectedDish.description}</p>
                            </div>
                        </div>

                    </div>

                </>


            )
    }


    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.selectedDish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className='row ml-2'>

                <div className='col  p-1 mt-5 mr-0 col-md-5 col-sm-12' >
                    <RenderDish selectedDish={props.selectedDish} />
                </div>
                <div className='col  p-1 mt-5 ml-0 col-md-5  col-sm-12' >
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.selectedDish.id} />
                    <Button outline className='m-4' onClick={toggleModal}>
                        <span className='fa fa-pencil'>&nbsp;Submit Comment</span>
                    </Button>

                </div>



            </div>
        </div >
    )
}

export default DishdetailComponent
