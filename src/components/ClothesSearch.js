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


const ClothesSearch =(props)=>{
    const [clothes, setClothes]=useState([]);
    const [formVisible, setFormVisible] = useState(props.style);
    const [selected, setSelected] = useState('');
    const [fileBase64String, setFileBase64String] = useState('');

    useEffect(() => {
        setFormVisible(props.style);
    }, [props.style]);
    
    useEffect(()=>{
        fetch("http://localhost:8080/accessories")
        .then(res=>res.json())
        .then((result)=>{
            setClothes(result);
        })
    },[]);
    
      
    const closeSearchForm = () => {
      setFormVisible(false);
    };
    const selectValue=(event)=>{
        const selectedValue = event.target.value
        setSelected(selectedValue)
    }
   
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
                                        <button type='button'>
                                            <img src={values.image}></img>
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