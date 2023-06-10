import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class App extends React.Component{
    render(){

        return(
            <div>
                <div className="noise"></div>
                <Header />
                <div className="home-page page">
                    <h1>NEVIL</h1>
                    <div className="container">
                        <p className="info">is a resource with clothes for clothes.
    Here you can create outfits using our database with items from different brands. Train your styling skills, find needed clothes for wardrobe or just have fun with us!</p>
                        <div className="button-container">
                            <Link to="/create" className="main-button" onClick={() => {window.scroll(0, 0);}}>
                                Create Outfit
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App