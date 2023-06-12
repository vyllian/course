import {React, useState }from 'react'


const ColorButton =(props)=>{
    const [isActive, setIsActive] = useState(false);

    const toggleColor = () => {
        if (isActive) {
      props.removeColor(props.color); // Remove color from the colors array
    } else {
      props.addColor(props.color); // Add color to the colors array
    }
    setIsActive(!isActive);

    };
    return(
        <button type="button" className="color-button" onClick={toggleColor} >
            <img title={props.color} className={`color-img ${isActive ? 'active-col' : ''}`} src={props.colorUrl} alt="color" />
        </button>
    );
    
};

export default ColorButton