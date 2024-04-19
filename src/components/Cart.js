//React imports
import React from 'react'

//Component Imports
import ItemCard from './ItemCard'



function Cart({additemData, deleteItem,setCounter}) {
    // console.log(additemData)
    // console.log(deleteItem)

    const CartMap = additemData.map((currentItem) => {
        return  <div className='container'>
                <div>
                    <p>{currentItem.name} {currentItem.price}</p>
                    <button className='rounded py-0 'onClick={() => deleteItem(currentItem.id)}> remove item </button>
                </div>
                </div>


    })


    return(
        <div className="container checkoutContainer ">
            <div className="row checkoutHeader">
                <div className="col-sm-12">
                    <h4>Grocery Cart</h4>
                </div>
            </div>
            <div className="row checkoutItemList">
                    {CartMap}
                <div className="d-flex col-sm-12 align-items-center">
                   
                </div>
                
            </div>
            <div className="row checkoutTotals">
                <div className="col-sm-12">
                    <h6>Subtotal: </h6>
                    <h5>Total: </h5>
                </div>
            </div>
        </div>
    )
}//end Cart function



export default Cart