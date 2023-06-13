import {React, useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OutfitContainer from "../components/OutfitContainer";
import ColorButton from "../components/ColorButton";

import animal from "../media/colors/animal.jpg"
import beige from "../media/colors/beige.png"
import black from "../media/colors/black.jpg"
import blue from "../media/colors/blue.png"
import brown from "../media/colors/brown.png"
import checkered from "../media/colors/checkered.jpg"
import floral from "../media/colors/floral.jpg"
import green from "../media/colors/green.png"
import gray from "../media/colors/grey.jpg"
import orange from "../media/colors/orange.png"
import pink from "../media/colors/pink.jpg"
import purple from "../media/colors/purple.png"
import red from "../media/colors/red.png"
import striped from "../media/colors/striped.jpg"
import white from "../media/colors/white.jpg"
import yellow from "../media/colors/yellow.png"

const ALL_OUTFITS_URL="http://localhost:8080/outfits"


const Inspiration =()=>{
    const[data,setData]=useState([]);
    
    useEffect(()=>{
        fetch(ALL_OUTFITS_URL)
        .then(res=>res.json())
        .then((result)=>{
            setData(result);
        })
    },[]);
    

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
                                <option selected value="none">Style</option>
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
                                <option selected value="none">Mood</option>
                                <option value="sportic">Sportic</option>
                                <option value="relaxing">Relaxing</option>
                                <option value="interesting">Interesting</option>
                                <option value="sexy">Sexy</option>
                                <option value="sad">Sad</option>
                                <option value="cheerful">Cheerful</option>
                            </select>
                            <select name="season" id="season">
                                <option selected value="none">Season</option>
                                <option value="winter">Winter</option>
                                <option value="spring">Spring</option>
                                <option value="summer">Summer</option>
                                <option value="autumn">Autumn</option>

                            </select>
                        </div>
                        <div className="colors">
                            <ColorButton color="white" colorUrl={white} />
                            <ColorButton color="beige" colorUrl={beige} />
                            <ColorButton color="yellow" colorUrl={yellow} />
                            <ColorButton color="pink" colorUrl={pink} />
                            <ColorButton color="orange" colorUrl={orange} />
                            <ColorButton color="brown" colorUrl={brown} />
                            <ColorButton color="blue" colorUrl={blue} />
                            <ColorButton color="green" colorUrl={green} />
                            <ColorButton color="purple" colorUrl={purple} />
                            <ColorButton color="red" colorUrl={red} />
                            <ColorButton color="gray" colorUrl={gray}/>
                            <ColorButton color="black" colorUrl={black} />

                            <ColorButton color="floral" colorUrl={floral} />
                            <ColorButton color="striped" colorUrl={striped} />
                            <ColorButton color="checkered" colorUrl={checkered} />
                            <ColorButton color="animal" colorUrl={animal} />
                                                        
                        </div>
                    </div>
                    <div className='col-md-12'>
                            {data.length===0 ? 
                                ( 
                                    <div className='empty-text-inspo'>
                                        <h1>*no sutible outfits*</h1>
                                    </div>
                                ) :(
                                data.map((values)=>{
                                    return(
                                        <OutfitContainer imageUrl={values.imageUrl} date={values.date} likes={values.likes}/>
                                    )
                                }))
                            } 
                    </div>

                </div>
                <Footer/>
            </div>
    )
    
}

export default Inspiration