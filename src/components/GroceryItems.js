//React Imports
import React from 'react'

//Component Imports
import ItemCard from './ItemCard'

//Image Imports
import apple from './images/apple-pexels-magova.jpg'
import banana from './images/banana-pexels-kio.jpg'
import orange from './images/orange-pexels-pixabay.jpg'
import cant from './images/cantlope.jpg'
import russet from './images/russet-potatoes.png'
import bellpepper from './images/bellpepper.jpeg'
import yellowonion from './images/Yellow-Onions.jpg'
import broccoli from './images/broccoli.jpg'
import groundbeef from './images/groundbeefgrassfed.png'
import chicken from './images/chicken.jpg'
import steak from './images/steak.jpg'
import groundturkey from './images/groundturkey.jpg'
import oatmilk from './images/oatmilks.jpg'
import ricemilk from './images/navitalo-plant-based-milk-powders-rice-milk-powder.jpg'
import plantcheese from './images/plantcheese.jpg'
import plantyogurt from './images/plantyogurt.png'
import pasta from './images/pasta.jpg'
import jasminrice from './images/jasminrice.jpg'
import oats from './images/oats.jpg'
import cereal from './images/cereal.jpg'
import turmeric from './images/turmeric.jpg'
import spirulina from './images/spirulina.jpg'


//ARRAY OF ITEM DATA OBJECT
const itemData = [
    {
        name: "Apple",
        price: `$${1.00}.00`,
        category: "fruit",
        imgPath: `${apple}`,
        isSelected: false

    },
    {
        name: "Banana",
        price: `$${0.50}0`,
        category: "fruit",
        imgPath: `${banana}`,
        isSelected: false
    },
    {
        name: "Orange",
        price: `$${0.75}`,
        category: "fruit",
        imgPath: `${orange}`,
        isSelected: false
    },
    {
        name: "Canteloupe",
        price: `$${3.50}0`,
        category: "fruit",
        imgPath: `${cant}`,
        isSelected: false
    },
    {
        name: "Russet Potato",
        price: `$${0.50}0`,
        category: "vegetable",
        imgPath: `${russet}`,
        isSelected: false
    },
    {
        name: "Bell Pepper",
        price: `$${0.75}`,
        category: "vegetable",
        imgPath: `${bellpepper}`,
        isSelected: false
    },
    {
        name: "Yellow Onion",
        price: `$${1.0}00`,
        category: "vegetable",
        imgPath: `${yellowonion}`,
        isSelected: false
    },
    {
        name: "Broccoli",
        price: `$${1.50}0`,
        category: "vegetable",
        imgPath: `${broccoli}`,
        isSelected: false
    },
    {
        name: "Ground Beef",
        price: `$${3.50}0`,
        category: "meat",
        imgPath: `${groundbeef}`,
        isSelected: false
    },
    {
        name: "Chicken",
        price: `$${4.75}`,
        category: "meat",
        imgPath: `${chicken}`,
        isSelected: false
    },
    {
        name: "Steak",
        price: `$${10.50}0`,
        category: "meat",
        imgPath: `${steak}`,
        isSelected: false
    },
    {
        name: "Ground Turkey",
        price: `$${2.50}0`,
        category: "meat",
        imgPath: `${groundturkey}`,
        isSelected: false
    },
    {
        name: "Oat Milk",
        price: `$${3.50}0`,
        category: "totally dairy",
        imgPath: `${oatmilk}`,
        isSelected: false
    },
    {
        name: "Rice Milk",
        price: `$${2.50}0`,
        category: "totally dairy",
        imgPath: `${ricemilk}`,
        isSelected: false
    },
    {
        name: "Plant Cheese",
        price: `$${2.50}0`,
        category: "totally dairy",
        imgPath: `${plantcheese}`,
        isSelected: false
    },
    {
        name: "Plant Yogurt",
        price: `$${3.50}0`,
        category: "totally dairy",
        imgPath: `${plantyogurt}`,
        isSelected: false
    },
    {
        name: "Pasta",
        price: `$${1.50}0`,
        category: "dried goods",
        imgPath: `${pasta}`,
        isSelected: false
    },
    {
        name: "Jasmin Rice",
        price: `$${2.50}0`,
        category: "dried goods",
        imgPath: `${jasminrice}`,
        isSelected: false
    },
    {
        name: "Oats",
        price: `$${2.50}0`,
        category: "dried goods",
        imgPath: `${oats}`,
        isSelected: false
    },
    {
        name: "Cereal",
        price: "$2.50",
        category: "dried goods",
        imgPath: `${cereal}`,
        isSelected: false
    },
    {
        name: "Turmeric",
        price: `$${5.00}`,
        category: "spices",
        imgPath: `${turmeric}`,
        isSlected: false
    },
    {
        name: "Spirulina",
        price: `$${5.00}`,
        category: "algae",
        imgPath: `${spirulina}`,
        isSelected: false
    }
]//end itemData object array



function GroceryItems({handleCart}) {


    //map out all the items in the category
   const ItemDataMap = itemData.map((currentItem) => {
            return <ItemCard
            name={currentItem.name}
            price={currentItem.price}
            category={currentItem.category}
            imgPath={currentItem.imgPath}
            isSelected={currentItem.isSelected}
            handleCart={handleCart}
            />
        }           
    )
    

    return(
        <div className="row">
            {ItemDataMap}
        </div>
    )

}//end GroceryItems function



export default GroceryItems