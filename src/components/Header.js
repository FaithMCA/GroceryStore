//React imports
import React from 'react'

//Component Imports


//import Image
import cartImg from './images/cart.png'




function Header({showBoolean, counter}) {


    return(
        <div className="row HeaderRow">
            <div className="col-sm-12 d-flex justify-content-center Header">

                <div className="col-sm-2">
                </div>

                <div className="col-sm-9 d-flex align-items-center justify-content-center">
                    <h1 className='Logo'>The Farmer's Market</h1>
                </div>

                <ItemCart showCart={showBoolean} counter={counter}/>
                
            </div>
        </div>
    )
}//end Header function



function ItemCart({showCart, counter}) {
    //sets up hiding and showing the cart menu
    const[isShown, setIsShown] = React.useState(true)

    //sets up telling how much items are int the cart
    const[itemMessages, setitemMessages] = React.useState(['item 1, item 2'])

    function toggleShown() {
        showCart(prevIsShown => !prevIsShown)
        setIsShown(prevIsShown => !prevIsShown)
    }

    return(
        <div className='col-sm-2 d-flex align-items-center justify-content-center ItemCart'>
            
            <button className="rounded ItemCartBtn" onClick={toggleShown}> <img src={cartImg} alt="Show/Hide Cart" />
            <div>
            {isShown ? "Hide" : "Show" } 
            </div>
            <div className="numberofItems rounded-circle d-flex justify-content-center align-items-center">
                {counter > 0 ? 
                <h4>{counter} {counter > 1 ? 'items in cart' : 'item in cart'}</h4> : <h4>{counter} items in cart</h4> }
            </div>
            </button>
        </div>
    )
}



export default Header