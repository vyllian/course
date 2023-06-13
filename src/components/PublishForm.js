import {React, useState, useEffect} from 'react'
import format from 'date-fns/format'
import ColorButton from './ColorButton'

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
import exit from "../media/exit.svg"


const PublishForm =(props)=>{
    const { imageUrl, isPubVis, closePubForm } = props;
    const [outfitColors, setColors]=useState([]);
    const [selectedMood, setSelectedMood] = useState('none');
    const [selectedStyle, setSelectedStyle] = useState('none');
    const [selectedSeason, setSelectedSeason] = useState('none');

    
    const addColor = (color) => {
        setColors((prevColors) => [...prevColors, color]);
    };
    
    const removeColor = (color) => {
        setColors((prevColors) => prevColors.filter((c) => c !== color));

    };
    useEffect(() => {
      setFormVisible(isPubVis);
    }, [isPubVis]);
    useEffect(() => {
        if (!isPubVis) {
          // Reset selected values when form is closed
          setSelectedMood('none');
          setSelectedSeason('none');
          setSelectedStyle('none');
        }
      }, [isPubVis]);
  
    const setFormVisible = (visible) => {
      document.body.style.overflow = visible ? "hidden" : "auto";
    };
    const close=()=>{
        closePubForm()

    }
  
    const handlePublish = () => {
        const outfit=  {
            mood: selectedMood,
            style: selectedStyle,
            season: selectedSeason,
            colors: outfitColors,
            date:format(new Date(), 'dd/MMM/yy'),
            likes:0,
            image:imageUrl
        }
        
        fetch('http://localhost:8080/outfits/add',{
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(outfit),
            
        } ).then((response) =>{
            if (response.status===200)
            alert("Outfit added!")
        })
        

        closePubForm();
      // Perform publishing logic here
    };
    
    return(
        <div className="publish-template" style={{visibility: isPubVis  ? 'visible' : 'hidden'}}>
            <div className='exit'>
                <button className='exit-button'onClick={close}>
                    <img className='exit-img' src={exit} alt='exit'></img>
                </button>
            </div>
            <div className='publish-img'>
                <img  src={props.imageUrl} alt='your outfit' ></img>
           </div>
            <div className='colors'>
                <ColorButton color="white" colorUrl={white}  addColor={addColor} removeColor={removeColor}/>
                <ColorButton color="beige" colorUrl={beige}  addColor={addColor} removeColor={removeColor}/>
                <ColorButton color="yellow" colorUrl={yellow}  addColor={addColor} removeColor={removeColor} />
                <ColorButton color="pink" colorUrl={pink}  addColor={addColor} removeColor={removeColor}/>
                <ColorButton color="orange" colorUrl={orange}  addColor={addColor} removeColor={removeColor}/>
                <ColorButton color="brown" colorUrl={brown}  addColor={addColor} removeColor={removeColor}/>
                <ColorButton color="blue" colorUrl={blue}  addColor={addColor} removeColor={removeColor}/>
                <ColorButton color="green" colorUrl={green}  addColor={addColor} removeColor={removeColor}/>
            </div>
            <div className='colors'>
                <ColorButton color="purple" colorUrl={purple} addColor={addColor} removeColor={removeColor} />
                <ColorButton color="red" colorUrl={red} addColor={addColor} removeColor={removeColor} />
                <ColorButton color="gray" colorUrl={gray} addColor={addColor} removeColor={removeColor}/>
                <ColorButton color="black" colorUrl={black}  addColor={addColor} removeColor={removeColor} />
                <ColorButton color="floral" colorUrl={floral} addColor={addColor} removeColor={removeColor} />
                <ColorButton color="striped" colorUrl={striped}  addColor={addColor} removeColor={removeColor}/>
                <ColorButton color="checkered" colorUrl={checkered} addColor={addColor} removeColor={removeColor} />
                <ColorButton color="animal" colorUrl={animal}  addColor={addColor} removeColor={removeColor}/>
            </div>
            <div className='publish-container'>
                <select name="style" id="style" value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
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
                <select name="season" id="season" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
                    <option selected value="none">Season</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                </select>
            </div>
            <div className='publish-container'>
            <select name="mood" id="mood" value={selectedMood} onChange={(e) => setSelectedMood(e.target.value)}>
                    <option selected value="none">Mood</option>
                    <option value="sportic">Sportic</option>
                    <option value="relaxing">Relaxing</option>
                    <option value="interesting">Interesting</option>
                    <option value="sexy">Sexy</option>
                    <option value="sad">Sad</option>
                    <option value="cheerful">Cheerful</option>
                </select>
                <button className='publish-button' onClick={handlePublish}>Publish</button>
            </div>
        </div>
    )
    
}

export default PublishForm