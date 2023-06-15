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
import goUp from "../media/Up_Duo.svg"

const ALL_OUTFITS_URL="http://localhost:8080/outfits"


const Inspiration =()=>{
    const[data,setData]=useState([]);
    const [selectedMood, setSelectedMood] = useState('Mood');
    const [selectedStyle, setSelectedStyle] = useState('Style');
    const [selectedSeason, setSelectedSeason] = useState('Season');
    const [colors, setColors]=useState([]);


    
    useEffect(()=>{
        let tem1, tem2;
        let moodProp = selectedMood==="Mood"?'none' :selectedMood.toLowerCase() ;
        let styleProp = selectedStyle==="Style"?'none' :selectedStyle.toLowerCase() ;
        let seasonProp = selectedSeason==="Season"?'none' :selectedSeason.toLowerCase() ;
        
        fetch(ALL_OUTFITS_URL)
        .then(res=>res.json())
        .then((result)=>{
            if (moodProp!=='none'){
                tem1=result.filter(item => item.mood === moodProp);
            }else{
                tem1=result
            }
            if (styleProp!=='none'){
                tem2=tem1.filter(item => item.style === styleProp);
            }else{
                tem2=tem1
            }
            if (seasonProp!=='none'){
                tem1=tem2.filter(item => item.season === seasonProp);
            }
            else{
                tem1=tem2
            }
            if (colors.length>0){
                setData(filterOutfitsByColor(tem1,colors))}
            else{
               setData(tem1); }    
        })
        
    
    },[selectedMood,selectedSeason,selectedStyle,colors])
    

    function filterOutfitsByColor(clothes, neededColors) {
        return clothes.filter(clothing => {
            return clothing.colors.some(color => neededColors.includes(color));
    });
    }
    const addColor = (color) => {
        setColors((prevColors) => [...prevColors, color]);
    };
    
    const removeColor = (color) => {
        setColors((prevColors) => prevColors.filter((c) => c !== color));
    };
    const goUpFunc=()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

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
                            
                            <select name="style" id="style" value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)} >
                                <option selected value="none">Style</option>
                                <option value="casual">Casual</option>
                                <option value="sport">Sport</option>
                                <option value="formal">Formal</option>
                                <option value="vintage">Vintage</option>
                                <option value="grunge">Grunge</option>
                                <option value="chick">Chick</option>
                                <option value="bohemian">Bohemian</option>
                                <option value="preppy">Preppy</option>
                                <option value="tomboy">Tomboy</option>
                            </select>
                            <select name="mood" id="mood" value={selectedMood} onChange={(e) => setSelectedMood(e.target.value)}>
                                <option selected value="none">Mood</option>
                                <option value="sportic">Sportic</option>
                                <option value="relaxing">Relaxing</option>
                                <option value="interesting">Interesting</option>
                                <option value="sexy">Sexy</option>
                                <option value="sad">Sad</option>
                                <option value="cheerful">Cheerful</option>
                            </select>
                            <select name="season" id="season" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
                                <option selected value="none">Season</option>
                                <option value="winter">Winter</option>
                                <option value="spring">Spring</option>
                                <option value="summer">Summer</option>
                                <option value="autumn">Autumn</option>

                            </select>
                        </div>
                        <div className="colors">
                            <ColorButton color="white" colorUrl={white} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="beige" colorUrl={beige}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="yellow" colorUrl={yellow} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="pink" colorUrl={pink} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="orange" colorUrl={orange}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="brown" colorUrl={brown} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="blue" colorUrl={blue}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="green" colorUrl={green}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="purple" colorUrl={purple} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="red" colorUrl={red}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="gray" colorUrl={gray} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="black" colorUrl={black}addColor={addColor} removeColor={removeColor} />

                            <ColorButton color="floral" colorUrl={floral} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="striped" colorUrl={striped}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="checkered" colorUrl={checkered}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="animal" colorUrl={animal} addColor={addColor} removeColor={removeColor}/>
                                                        
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
                                        <OutfitContainer outfit={values} />
                                    )
                                }))
                            } 
                    </div>

                </div>
                <div className="goUp svg">
                    <button className="goUp-button" onClick={goUpFunc} >
                        <img src={goUp} alt="go up"></img>
                    </button>
                </div>
                <Footer/>
            </div>
    )
    
}

export default Inspiration