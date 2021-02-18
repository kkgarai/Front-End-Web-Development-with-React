import React from 'react'

const HeaderComponent = () => {
    return (
        <React.Fragment>
            <ul class="nav navbar-dark justify-content-center" >
                <li class="nav-item">
                    <a class="nav-link" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" >Disabled</a>
                </li>
            </ul>

            <div className='jumbotron'>
                <div className="container">
                    <div className='row row-header justify-content-center'>
                        <div className="col-12 col-sm-6">
                            <h1>Restorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default HeaderComponent