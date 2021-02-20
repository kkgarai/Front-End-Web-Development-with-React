import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function DishdetailComponent(props) {




    const RenderComments = ({ comments }) => {
        if (comments == 0)
            return (
                <div></div>
            )
        else
            return (
                <div className='container  p-1 mt-5 ml-0 col-md-5 col-xs-12' >
                    <h4>COMMENTS</h4>
                    {
                        comments.map((comment) => {
                            return (
                                <div>

                                    <li className="list-unstyled" key={comment.id}>{comment.comment}</li>
                                    <li className="list-unstyled">
                                        {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                                    </li>
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
                    <div className='container  p-1 mt-5 mr-0 col-md-5 col-xs-12' >

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
            <div className='row'>


                <RenderDish selectedDish={props.selectedDish} />
                <RenderComments comments={props.comments} />



            </div>
        </div>
    )
}

export default DishdetailComponent
