//React imports
import React from 'react'

//Image imports
import addImg from './images/add.png'


//trying to figure out how to add items into the cart...
function ItemCard(props) {
    //const[addToCart, setaddToCart] = React.useState([])
    //console.log(props)

    //console.log(addToCart)


    return(
        <div className="col-sm-2 itemContainer">
            <div className="container">

                {/* Item image */}
                <div className="row itemImg">
                    <img className="square bg-dark rounded px-0" src={props.imgPath} alt="item Img" />
                </div>

                {/* Item price */}
                <div className="row rounded priceRow">
                    <div className="col-sm-6 itemPrice">
                        <h5>{props.price}</h5>
                    </div>

                    {/* Button to add to cart */}
                    <div className="col-sm-6 itemButton">
                        <button onClick={() => props.handleCart(props.name, props.price)} className="rounded">Add to cart</button>
                    </div>


                    {/* Name of Item */}
                    <div className="row">
                        <div className="col-sm-8 itemName">
                            <h5>{props.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}//end ItemCard function



export default ItemCard