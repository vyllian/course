import {React, useState, useEffect} from 'react'
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
import exit from "../media/exit2.svg"

const ALL_CLOTHES_URL=""
const ALL_ACCESSORIES_URL="http://localhost:8080/accessories"


const ClothesSearch =(props)=>{
    const [clothes, setClothes]=useState([]);
    const [formVisible, setFormVisible] = useState(props.style);
    const [selected, setSelected] = useState('');
    const [colors, setColors]=useState([]);

    const handleItemClick = (image) => {
        props.onSelectImage(image);
    };

    useEffect(() => {
        setFormVisible(props.style);
    }, [props.style]);
    
    useEffect(()=>{
        fetch(ALL_ACCESSORIES_URL)
        .then(res=>res.json())
        .then((result)=>{
            setClothes(result);
        })
    },[props.type, selected]);
    
    useEffect(() => {
        console.log(colors);
      }, [colors]);  

    const closeSearchForm = () => {
      setFormVisible(false);
    };

    const selectValue=(event)=>{
        const selectedValue = event.target.value
        setSelected(selectedValue)
    }
    const addColor = (color) => {
        setColors((prevColors) => [...prevColors, color]);
    };
    
    const removeColor = (color) => {
        setColors((prevColors) => prevColors.filter((c) => c !== color));

    };
   
    const getOptionsByType = () => {
        switch (props.type) {
            case 'shoes':
                return ['Footwear','Shoes','Heels', 'Sneakers', 'Boots','Sandals'];
            case 'hat':
                return ['Accessory','Hat', 'Belt','Bodychain','Gloves','Neckerchives','Socks','Tights'];
            case 'bag':
                return ['Accessory','Bag', 'Belt','Bodychain','Gloves','Neckerchives','Socks','Tights'];
            case 'glasses':
                return ['Accessory','Glasses', 'Belt','Bodychain','Gloves','Neckerchives','Socks','Tights'];
            case 'top':
                return ['Top','Bra','Cardigan','Croptop','Hoodie','Jumper','Longsleve','Shirt','Tanktop','T-shirt','Vest','Dress','Jumpsuit']  ;
            case 'bottom':
                return ['Bottom','Pants','Jeans','Shorts','Skirt','Dress','Jumpsuit'] 
            case 'otter wear':
                return ['Otter','Blazer', 'Coat']
          default:
            return [];
        }
    };

        return(
            <div className="search-container" style={{visibility: formVisible ? 'visible' : 'hidden'}}>
                <div className='search-filter'>
                    <select name="type"onChange={selectValue}>
                        {getOptionsByType().map((option)=>(
                            <option key={option} value={option} >{option}</option>
                        ))}
                    </select>
                    <div className='colors'>
                            <ColorButton color="white" colorUrl={white} addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="beige" colorUrl={beige}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="yellow" colorUrl={yellow} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="pink" colorUrl={pink}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="orange" colorUrl={orange}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="brown" colorUrl={brown}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="blue" colorUrl={blue} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="green" colorUrl={green} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="purple" colorUrl={purple}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="red" colorUrl={red} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="gray" colorUrl={gray}addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="black" colorUrl={black} addColor={addColor} removeColor={removeColor}/>

                            <ColorButton color="floral" colorUrl={floral} addColor={addColor} removeColor={removeColor}/>
                            <ColorButton color="striped" colorUrl={striped}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="checkered" colorUrl={checkered}addColor={addColor} removeColor={removeColor} />
                            <ColorButton color="animal" colorUrl={animal}addColor={addColor} removeColor={removeColor} />                           
                    </div>
                   
                        <button className='exit-button-search' onClick={closeSearchForm}>
                            <img className='exit-img' src={exit} alt='exit'></img>
                        </button>
               
                </div> 
                <div className='col-md-11 items-panel'>
                    <div className="row">
                        {clothes.map((values)=>{
                            
                            return(
                                <div className='col-md-3 mb-4'>
                                    <div className="outfit-card">
                                        <button type='button' className='item-button' key={values.image}  onClick={() => handleItemClick(values.image)}>
                                            <img src={values.image} ></img>
                                        </button>
                                    </div>
                                </div>
                            )
                        })} 
                    </div>
                </div>
        </div>
    )
    
}

export default ClothesSearch