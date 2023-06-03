import React from "react";
import Header from "./components/Header";

class App extends React.Component{
    render(){
        return(
            <div className="main-page">
                <Header/>
                <h1>NEVIL</h1>
                <div className="container">
                    <p>is a resource with clothes for clothes.
Here you can create outfits using our database with items from different brands. Train your styling skills, find needed clothes for wardrobe or just have fun with us!</p>
                    <div className="button-container">
                        <button className="main-button">Create Outfit</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default App