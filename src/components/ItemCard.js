import {React} from 'react'

const ItemCard =(props)=>{
    
    return(
        <div className="outfit-card">
            <img src={props.imageUrl}></img>
        </div>
    )
    
}

export default ItemCard