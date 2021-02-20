import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomeComponent from './HomeComponent'
import MenuComponent from "./MenuComponent"
import DishdetailComponent from './DishdetailComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import { DISHES } from '../shared/dishes'

function MainComponent() {
    const [dishes, setDishes] = useState([...DISHES])
    const [selectedDish, setSelectedDish] = useState(null)

    const onDishSelect = (dishId) => {
        setSelectedDish(dishId)
    }

    const HomePage = () => {
        return (
            <HomeComponent />
        )
    }

    return (
        <div>

            <HeaderComponent />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <MenuComponent dishes={DISHES} />} />
                <Redirect to='/home' />
            </Switch>


            {/*<MenuComponent dishes={DISHES}
                onClick={(dishId) => setSelectedDish(dishId)} />
            <DishdetailComponent dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
                */}

            <FooterComponent />
        </div>
    )
}

export default MainComponent
