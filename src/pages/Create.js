import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import download from "../media/download.svg";


class Create extends React.Component{
    render(){
        return(
            <div>
                <div className="noise"></div>
                <Header/>
                <div className="create-page page">
                    <div className="header-pow">
                        <h1>ADD CLOTHES TO THE TEMPLATE</h1>
                        <h1 id="ques-mark"><small><a href="#tutor">?</a></small></h1>
                    </div>
                   <div className="creating-container">
                        <div className="creating-template">

                        </div>
                        <div className="template-bar">
                            <button className="button-container create-button">Publish</button>
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
}

export default Create