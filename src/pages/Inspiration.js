import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OutfitContainer from "../components/OutfitContainer";

class Inspiration extends React.Component{
    render(){
        return(
            <div>
                <div className="noise"></div>
                <Header/>
                <div className="inspiration-page page">
                    <div className="header">
                        <h1>ALL</h1>
                        <h1>AWESOME OUTFITS</h1>
                    </div>
                    
                    <div className="filters-container">
                        <div className="properties">
                            
                            <select name="style" id="style">
                                <option selected hidden>Style</option>
                                <option value="casual">Casual</option>
                                <option value="sport">Sport</option>
                                <option value="formal">Formal</option>
                                <option value="vintage">Vintage</option>
                                <option value="grunge">Grunge</option>
                                <option value="chic">Chic</option>
                                <option value="bohemian">Bohemian</option>
                                <option value="preppy">Preppy</option>
                                <option value="tomboy">Tomboy</option>
                            </select>
                            <select name="mood" id="mood">
                                <option selected hidden>Mood</option>
                                <option value="sportic">Sportic</option>
                                <option value="relaxing">Relaxing</option>
                                <option value="interesting">Interesting</option>
                                <option value="sexy">Sexy</option>
                                <option value="sad">Sad</option>
                                <option value="cheerful">Cheerful</option>
                            </select>
                            <select name="season" id="season">
                                <option selected hidden>Season</option>
                                <option value="winter">Winter</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                                <option value="Autumn">Autumn</option>
                            </select>
                        </div>
                        <div className="colors">
                    
                        </div>
                    </div>
                    <OutfitContainer imageUrl={"../media/heart.svg"} data={"23/dec/2023"} likes={1000}/>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default Inspiration