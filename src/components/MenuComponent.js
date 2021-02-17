import React,{useState,useEffect} from 'react'


function MenuComponent(props) {
    
    const[dishes,setDishes]=useState(props.dishes)
    

        const menu=dishes.map((dish)=>{
            return(
                <div key={dish.id} className='card col-md-3'   onClick={()=>props.onClick(dish.id)}>
                    
                    <img className='card-img-top' src={dish.image} alt={dish.name}/>
                    <div className='card-body' >
                        
                        <h6 className='card-heading'>{dish.name}</h6>
                        <p className='card-text'>{dish.description}</p>
                    </div>
                </div>
            )
        })

    

    return (
        <>
        <div className='container bg-success p4 mt-2 col-md-12' style={{width:'90%'}}>
            <div className='row'>
                 {menu}   
            </div>           
            
        </div>

        

        

        </>
    )
}

export default MenuComponent
