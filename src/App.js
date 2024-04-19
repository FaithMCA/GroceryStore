//React import
import React from "react";

//Stylesheet import
import './style.css'

//Components folder imports
import Header from "./components/Header";
import Body from "./components/Body";




function App() {
    const[isShown, setIsShown] = React.useState(true)

    const[counter, setCounter] = React.useState(0)
    // console.log(isShown)


    return(
        <div className="App">
            <Header showBoolean={setIsShown} counter={counter} />
            <Body showValue={isShown} setCounter={setCounter} />
        </div>
    )
}//end App function




export default App;