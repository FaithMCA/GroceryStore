//React imports
import React from 'react'

//Component imports
import GroceryItems from './GroceryItems'
import Cart from './Cart'

//universally unique identifier generator can be used to separate and identify database records and as a key
import {v4 as uuidv4 } from 'uuid';
uuidv4(); //uses the standard random number generator



function Body({showValue, setCounter}) {
    //this usestate can see, grocery header and items, because its the parent of both
    const[itemData, setitemData] = React.useState([])


    
    function handleCart(name, price){ //name and price will be one object to send to the itemData array
                                      //id's will be needed
            // console.log(name, price)
            setitemData(previtemData => [...previtemData,
                {
                    id: uuidv4(),
                    name: name,
                    price: price
                }])
            setCounter(itemData.length+1)

            }

            console.log(itemData)


            const deleteItem = id => {
                //filtering each todo thats not equal to the id.
                //removing the todo with the id equal to the id we passed in.
                setitemData(itemData.filter(previtemData => previtemData.id !== id))
            }

      return(
        <>
            <GroceryHeader booleanValue={showValue} additemData={itemData} deleteItem={deleteItem}/>
            <GroceryItems handleCart={handleCart}/>
        </>
      )
}//end Body function




function GroceryHeader({booleanValue, additemData, deleteItem}) {
    console.log(`${booleanValue} CALLING FROM GROCERY HEADER`)
    // const[isShown, setIsShown] = React.useState(true)

    // function toggleShown() {
    //     setIsShown(prevIsShown => !prevIsShown)
    // }

    return(
        <div className="row GroceryHeaderRow">            
            <div className="col-sm-7 d-flex justify-content-center px-0">
                <h1 className='GroceryFoodCategory'>All Foods</h1>
            </div>
                <div className="col-2 d-flex justify-content-center px-0 align-items-start GroceryFoodCategoryButton">
                    <button className='rounded'><h3>All Food Category</h3></button>
                </div>
                <div className="col d-flex justify-content-center px-0">
                 {booleanValue && <Cart additemData={additemData} deleteItem={deleteItem}
                 />}
                </div>
        </div>
    ) 
}//end GroceryHeader function



export default Body