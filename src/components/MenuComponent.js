import React, { useState, useEffect } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

function MenuComponent(props) {

    const [dishes, setDishes] = useState(props.dishes)


    const menu = dishes.map((dish) => {
        return (
            <div key={dish.id} className='card col-md-3' >
                <Link to={`/menu/${dish.id}`}>

                    <img className='card-img-top' src={dish.image} alt={dish.name} />
                    <div className='card-body' >

                        <h6 className='card-heading'>{dish.name}</h6>
                        <p className='card-text'>{dish.description}</p>
                    </div>
                </Link>
            </div>
        )
    })



    return (
        <>
            <div className='container  p4 mt-2 col-md-12' style={{ width: '90%' }}>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>HOME</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>

            </div>


        </>
    )
}

export default MenuComponent
