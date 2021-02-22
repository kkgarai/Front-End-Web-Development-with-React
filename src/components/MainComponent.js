import React, { useState } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import HomeComponent from './HomeComponent'
import MenuComponent from "./MenuComponent"
import Contact from './ContactComponent'
import DishdetailComponent from './DishdetailComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import AboutComponent from './AboutComponent'


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

function MainComponent(props) {


    {/*
    const [dishes, setDishes] = useState([...DISHES])
    const [selectedDish, setSelectedDish] = useState(null)
    const [comments, setComments] = useState([...COMMENTS])
    const [leaders, setLeaders] = useState([...LEADERS])
    const [promotions, setPromotions] = useState([...PROMOTIONS])
*/}
    const [selectedDish, setSelectedDish] = useState(null)
    const onDishSelect = (dishId) => {
        setSelectedDish(dishId)
    }

    const HomePage = () => {
        return (
            <HomeComponent dish={props.dishes.filter((dish) => dish.featured)[0]}
                promotion={props.promotions.filter((promo) => promo.featured)[0]}
                leader={props.leaders.filter((leader) => leader.featured)[0]} />
        )
    }

    const DishWithId = ({ match }) => {
        return (
            <DishdetailComponent selectedDish={props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
        )
    }

    return (
        <div>

            <HeaderComponent />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <MenuComponent dishes={props.dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path="/contactus" component={Contact} />
                <Route path="/aboutus" component={() => <AboutComponent leaders={props.leaders} />} />
                <Redirect to='/home' />
            </Switch>


            <FooterComponent />
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(MainComponent))
