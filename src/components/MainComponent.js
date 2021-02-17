import React,{useState} from 'react'
import MenuComponent from "./MenuComponent"
import DishdetailComponent from './DishdetailComponent'
import {DISHES} from '../shared/dishes'

function MainComponent() {
    const [dishes,setDishes]=useState([...DISHES])
    const[selectedDish,setSelectedDish]=useState(null)

    const onDishSelect=(dishId)=>{
        setSelectedDish(dishId)
    } 

    return (
        <div>
            
            <nav className='navbar p-2 navbar-dark bg-primary justify-content-center'>
            <ul className='navbar-nav' style={{color:'white'}}>
            <li className='nav-item'>NAVIGATION BAR</li>
            </ul>
            </nav>
        
     
        <MenuComponent dishes={DISHES} 
            onClick={(dishId)=>setSelectedDish(dishId)}/>
        <DishdetailComponent dish={dishes.filter((dish)=>dish.id===selectedDish)[0]}/>
            
        </div>
    )
}

export default MainComponent
