import {React} from 'react'

const ItemCards =(props)=>{
    
    return(
        <div className='carousel-item'>
            <div className="outfit-card">
                <img src={props.imageUrl1}></img>
            </div>
            <div className="outfit-card">
                <img src={props.imageUrl2}></img>
            </div>
            <div className="outfit-card">
                <img src={props.imageUrl3}></img>
            </div>
            <div className="outfit-card">
                <img src={props.imageUrl4}></img>
            </div>
        </div>
        
    )
    
}

export default ItemCards