import React from 'react'

function DishdetailComponent(props) {
    const selectedDish=props.dish;
    


    const renderComments=(comments)=>{
        if(comments==0)
        return(
            <div></div>
        )
        else
        return(
            comments.map((comment)=>{
                return(
                    <div>
                        <h4>COMMENTS</h4>
                        <li className="list-unstyled" key={comment.id}>{comment.comment}</li>
                        <li className="list-unstyled">
                            {comment.author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </li>
                    </div>
                )
            })
        )
    }

    const renderDish=(selectedDish)=>{
        if(selectedDish==null)
        return(<></>)
        else
        return(
            <>
            <div className='container  p-1 mt-5 mr-0 col-md-5 col-xs-12' >
            
            <div className='card col-sm-10 col-md-12'  >
                    
                    <img className='card-img-top' src={selectedDish.image} alt={selectedDish.name}/>
                    <div className='card-body' >
                        
                        <h6 className='card-heading'>{selectedDish.name}</h6>
                        <p className='card-text'>{selectedDish.description}</p>
                    </div>
                </div>

            </div>
            <div className='container  p-1 mt-5 ml-0 col-md-5 col-xs-12' >
                {renderComments(selectedDish.comments)}
            </div>
            </>
                
           
        )
    }
    
    
    return (
        <div className='row'>


            
                {renderDish(selectedDish)}
               
            
            
        </div>
    )
}

export default DishdetailComponent
