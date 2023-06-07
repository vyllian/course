import {React, useState} from 'react'
import like from "../media/heart.svg"
import liked from "../media/fullheart.svg"

const OutfitContainer =(props)=>{
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

        return(
            <div className="inspo-outfit-container">
                <div className="img-block">
                    <img src={props.imageUrl} alt="outfit-image"></img>
                </div>
                <div className="outfit-description">
                    <time>{props.data}</time>
                    <div className="likes">
                        <p>{props.likes}</p>
                        <button type="button" onClick={toggleLike} id='like-button'>
                            <img src={isLiked ? liked : like} alt="like" />
                        </button>
                    </div>
                </div>
            </div>
        )
    
}

export default OutfitContainer