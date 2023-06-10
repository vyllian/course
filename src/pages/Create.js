import {React, useState }from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PublishForm from "../components/PublishForm";
import ClothesSearch from "../components/ClothesSearch";

import download from "../media/download.svg";
import plus from "../media/plus.svg"
import hat from "../media/clothes_template/beret.svg"
import coat from "../media/clothes_template/coat.svg"
import tshirt from "../media/clothes_template/tshirt.svg"
import jeans from "../media/clothes_template/jeans.svg"
import glasses from "../media/clothes_template/glasses.svg"
import bag from "../media/clothes_template/bag.svg"
import shoes from "../media/clothes_template/shoes.svg"



const Create =()=>{
    const [isPubVis, setisPubVis] = useState(false);
    const [isSchVis, setisSchVis] = useState(false);
    const handleClick = () => {
        setisPubVis(current => !current);
    };
    const openSearchForm = ()=>{
        setisSchVis(current => !current);
    }

    
    return(
            <div>
                <div className="noise"></div>
                <Header/>
                <div className="publish-window" >
                    <PublishForm imageUrl={glasses} style={isPubVis}/>
                    
                </div>
                <div className="search-window">
                    <ClothesSearch style={isSchVis}/>
                </div> 
                <div className="create-page page">
                    <div className="header-pow">
                        <h1>ADD CLOTHES TO THE TEMPLATE</h1>
                        <h1 id="ques-mark"><small><a href="#tutor">?</a></small></h1>
                    </div>
                   <div className="creating-container">
                        <div className="creating-template">
                            <div className="template-section">
                                <div className="item">
                                    <button type="button" className="plus-button" onClick={openSearchForm} >
                                        <img src={plus} alt="add"/>
                                    </button>
                                    <img src={hat} alt="hat"></img>
                                </div>
                                <div className="item">
                                    <button type="button"className="plus-button" onClick={openSearchForm}>
                                        <img src={plus} alt="add"/>
                                    </button>
                                    <img src={coat} alt="coat"></img>
                                </div>
                            </div>
                            <div className="template-section" id="main-fit-section">
                                <div className="item">
                                    <button type="button"className="plus-button" onClick={openSearchForm}>
                                        <img src={plus} alt="add"></img>
                                    </button>
                                    <img src={tshirt} alt="t-shirt"></img>
                                </div>
                                <div className="item">
                                    <button type="button"className="plus-button" onClick={openSearchForm}>
                                        <img src={plus} alt="add"></img>
                                    </button>
                                    <img src={jeans} alt="jeans"></img>
                                </div>
                            </div>
                            <div className="template-section">
                                <div className="item">
                                    <button type="button"className="plus-button" onClick={openSearchForm}>
                                        <img src={plus} alt="add"></img>
                                    </button>
                                    <img src={glasses} alt="glasses"></img>
                                </div>
                                <div className="item">
                                    <button type="button"className="plus-button"onClick={openSearchForm} >
                                        <img src={plus} alt="add"></img>
                                    </button>
                                    <img src={bag} alt="bag"></img>
                                </div>
                                <div className="item">
                                    <button type="button"className="plus-button" onClick={openSearchForm} >
                                        <img src={plus} alt="add"></img>
                                    </button>
                                    <img src={shoes} alt="shoes"></img>
                                </div>
                            </div>
                        </div>
                        <div className="template-bar">
                            <button className="button-container create-button"onClick={handleClick}>Publish</button>
                            <button className="button-container down-button">
                                <img src={download} alt="download"></img>
                            </button>
                        </div>
                   </div>
                   <div className="tutor-section">
                        <h1 id="tutor">HOW TO MAKE AN OUTFIT</h1>
                        <ol>
                            <li>Go to the template above</li>
                            <li>Press “+” near the element you want to add</li>
                            <li>Choose type and/or color in this category</li>
                            <li>Take a look on offered clothes, find desirable item</li>
                            <li>Add more & express yourself</li>
                            <li>When your outfit is done press “Publish” button to add the image to the Inspiration page</li>
                            <li>Download image to your computer</li>                                
                            <li>Start over again and create another one!</li>
                        </ol>
                   </div>
                </div>
                <Footer/>
            </div>
    )
    
}

export default Create