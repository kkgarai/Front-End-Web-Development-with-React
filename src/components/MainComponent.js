import React,{useState} from 'react'
import MenuComponent from "./MenuComponent"
import DishdetailComponent from './DishdetailComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import {DISHES} from '../shared/dishes'

function MainComponent() {
    const [dishes,setDishes]=useState([...DISHES])
    const[selectedDish,setSelectedDish]=useState(null)

    const onDishSelect=(dishId)=>{
        setSelectedDish(dishId)
    } 

    return (
        <div>
            
           <HeaderComponent/> 
        
     
        <MenuComponent dishes={DISHES} 
            onClick={(dishId)=>setSelectedDish(dishId)}/>
        <DishdetailComponent dish={dishes.filter((dish)=>dish.id===selectedDish)[0]}/>
            

            <FooterComponent/>
        </div>
    )
}

export default MainComponent
