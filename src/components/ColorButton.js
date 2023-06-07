import {React, useState }from 'react'


const ColorButton =(props)=>{
    const [isActive, setIsActive] = useState(false);

    const toggleColor = () => {
        setIsActive(!isActive);
    };
    return(
        <button type="button" className="color-button" onClick={toggleColor} >
            <img title={props.color} className={`color-img ${isActive ? 'active-col' : ''}`} src={props.colorUrl} alt="color" />
        </button>
    );
    
};

export default ColorButton