import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gradient from "./components/Gradient";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="main-page page">
                    <h1>NEVIL</h1>
                    <div className="container">
                        <p className="info">is a resource with clothes for clothes.
    Here you can create outfits using our database with items from different brands. Train your styling skills, find needed clothes for wardrobe or just have fun with us!</p>
                        <div className="button-container">
                            <button className="main-button">Create Outfit</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App