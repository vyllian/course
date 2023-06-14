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

const ALL_CLOTHES_URL="http://localhost:8080/clothes"
const ALL_ACCESSORIES_URL="http://localhost:8080/accessories"
const CLOTHES_BY_TYPE_URL="http://localhost:8080/clothes/category/"


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
        let url;
        if (selected==='' ||selected==='Top'||selected==='Glasses'||selected==='Bottom'||selected==='Footwear'|| selected==='Otter'|| selected==='Hat'|| selected==='Bag'){
            switch(props.type){
                case 'shoes':
                    url=ALL_CLOTHES_URL+"/footwears"
                    break;
                case 'top':
                    url=ALL_CLOTHES_URL+"/tops"
                    break;
                case 'bottom':
                    url=ALL_CLOTHES_URL+"/bottoms"
                    break;
                case 'otter wear':
                    url=ALL_CLOTHES_URL+"/otters"
                    break;
                case 'glasses':
                    url=ALL_ACCESSORIES_URL+"/glasses"
                    break
                case 'bag':
                    url=ALL_ACCESSORIES_URL+"/bag"
                    break
                case 'hat':
                    url=ALL_ACCESSORIES_URL+"/hat"
                    break
            }
        }
        else{
            if (props.type==="top"){
                switch(selected){
                    case 'Longsleeve':
                        url=CLOTHES_BY_TYPE_URL+"longsleeve"
                        break
                    case 'Bra':
                        url=CLOTHES_BY_TYPE_URL+"bra";
                        break
                    case 'Tanktop':
                        url=CLOTHES_BY_TYPE_URL+"tanktop"
                        break
                    case 'T-shirt':
                        url=CLOTHES_BY_TYPE_URL+"tshirt"
                        break
                    case 'Vest':
                        url=CLOTHES_BY_TYPE_URL+"vest"
                        break
                    case 'Jumpsuit':
                        url=CLOTHES_BY_TYPE_URL+"jumpsuit"
                        break
                    case 'Shirt':
                        url=CLOTHES_BY_TYPE_URL+"shirt"
                        break
                    case 'Hoodie':
                        url=CLOTHES_BY_TYPE_URL+"hoodie"
                        break
                    case 'Jumper':
                        url=CLOTHES_BY_TYPE_URL+"jumper"
                        break
                    case 'Cardigan':
                        url=CLOTHES_BY_TYPE_URL+"cardigan"
                        break
                    case 'Croptop':
                        url=CLOTHES_BY_TYPE_URL+"croptop"
                        break
                    case 'Dress':
                        url=CLOTHES_BY_TYPE_URL+"dress"
                        break
                }
            }else if (props.type==="shoes"){
                switch(selected){
                    case 'Shoes':
                        url=CLOTHES_BY_TYPE_URL+"shoes"
                        break
                    case 'Heels':
                        url=CLOTHES_BY_TYPE_URL+"heels";
                        break
                    case 'Sneakers':
                        url=CLOTHES_BY_TYPE_URL+"sneakers"
                        break
                    case 'Boots':
                        url=CLOTHES_BY_TYPE_URL+"boots"
                        break
                    case 'Sandals':
                        url=CLOTHES_BY_TYPE_URL+"sandals"
                        break
                }    
            }else if (props.type==="bottom"){
                switch(selected){
                    case 'Jumpsuit':
                        url=CLOTHES_BY_TYPE_URL+"jumpsuit"
                        break
                    case 'Pants':
                        url=CLOTHES_BY_TYPE_URL+"pants"
                        break
                    case "Jeans":
                        url=CLOTHES_BY_TYPE_URL+"jeans"
                        break
                    case 'Shorts':
                        url=CLOTHES_BY_TYPE_URL+"shorts"
                        break
                    case 'Skirt':
                        url=CLOTHES_BY_TYPE_URL+"skirt"
                        break
                    case 'Dress':
                        url=CLOTHES_BY_TYPE_URL+"dress"
                        break
                } 

            }else if (props.type==="otter wear"){
                switch(selected){
                    case 'Blazer':
                        url=CLOTHES_BY_TYPE_URL+"blazer"
                        break
                    case 'Coat':
                        url=CLOTHES_BY_TYPE_URL+"coat"
                        break
                } 
            }else {
                switch(selected){
                    case 'Hat':
                        url=ALL_ACCESSORIES_URL+"/hat"
                        break
                    case 'Belt':
                        url=ALL_ACCESSORIES_URL+"/belt"
                        break
                    case 'Bodychain':
                        url=ALL_ACCESSORIES_URL+"/bodychain"
                        break
                    case 'Gloves':
                        url=ALL_ACCESSORIES_URL+"/gloves"
                        break
                    case 'Neckerchief':
                        url=ALL_ACCESSORIES_URL+"/neckerchief"
                        break
                    case 'Tights':
                        url=ALL_ACCESSORIES_URL+"/tights"
                        break
                    case 'Glasses':
                        url=ALL_ACCESSORIES_URL+"/glasses"
                        break
                    case 'Accessory':
                        url=ALL_ACCESSORIES_URL
                        break
                } 
            }
            
        }
        fetch(url)
        .then(res=>res.json())
        .then((result)=>{
            if (colors.length>0)
                setClothes(filterClothesByColor(result,colors))
            else
                setClothes(result)
        })
       
    },[props.type, selected, colors]);
    
    function filterClothesByColor(clothes, neededColors) {
        return clothes.filter(clothing => {
            return clothing.colors.some(color => neededColors.includes(color));
    });
}
 

    const closeSearchForm = () => {
        setSelected('');
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
                return ['Hat', 'Belt','Bodychain','Gloves','Neckerchief','Tights','Accessory'];
            case 'bag':
                return ['Bag','Belt','Bodychain','Gloves','Neckerchief','Tights', 'Accessory'];
            case 'glasses':
                return ['Glasses', 'Belt','Bodychain','Gloves','Neckerchief','Tights','Accessory'];
            case 'top':
                return ['Top','Bra','Cardigan','Croptop','Hoodie','Jumper','Longsleeve','Shirt','Tanktop','T-shirt','Vest','Dress','Jumpsuit']  ;
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
                        {getOptionsByType().map((option,index)=>(
                            <option key={option} value={option} selected={index === 0} >{option}</option>
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
                    {clothes.length === 0 ? (
                        <div className='empty-text'>
                            <h2>No sutible options</h2>
                        </div>
                    ) : (
                        clothes.map((values)=>{
                                return(
                                    <div className='col-md-3 mb-4'>
                                        <div className="outfit-card">
                                            <button type='button' className='item-button' key={values.image}  onClick={() => handleItemClick(values.image)}>
                                                <img src={values.image} ></img>
                                            </button>
                                        </div>
                                    </div>
                                )  
                        }))
                    } 
                    </div>
                </div>
        </div>
    )
    
}

export default ClothesSearch