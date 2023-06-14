import {React, useState} from 'react'
import like from "../media/heart.svg"
import liked from "../media/fullheart.svg"

const UPDATE_LIKES = 'http://localhost:8080/outfits/update/'

const OutfitContainer =(props)=>{
    const { outfit} = props;
 /*   const [isLiked, setIsLiked] = useState(false);
    const [likesNumber, setLikesNumber] =useState(outfit.likes);
    const toggleLike = () => {   
      const outfitUpd=  {
            mood: outfit.mood,
            style: outfit.style,
            season: outfit.season,
            colors: outfit.colors,
            date:outfit.date,
            likes: isLiked ? outfit.likes-1 : outfit.likes+1 ,
            image: outfit.image
        }
       let action= isLiked ? 'dislike' : 'like';
       fetch(UPDATE_LIKES+action+outfit.id,{
            method: 'put',
            mode: 'cors',
            cache: 'no-cache',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(outfit.id),
        } ).then((response) =>{
            if (response.status===200)
            alert("Liked!")
        })
        isLiked ? setLikesNumber(likesNumber-1) :setLikesNumber(likesNumber+1);
        setIsLiked(!isLiked);
    };*/

        return(
            <div className="inspo-outfit-container">
                <div className="img-block">
                    <img src={outfit.image} alt="outfit"></img>
                </div>
                <div className="outfit-description">
                    <time>{outfit.date}</time>
                    {/* <div className="likes">
                        <p>{likesNumber}</p>
                        <button type="button" onClick={toggleLike} id='like-button'>
                            <img src={isLiked ? liked : like} alt="like" />
                        </button>
                    </div> */}
                    <div className='tags'>
                        <p className={outfit.season==='none'? 'undisplayed': ''}>#{outfit.season}</p>
                        <p className={outfit.style==='none'? 'undisplayed': ''}>#{outfit.style}</p>
                        <p className={outfit.mood==='none'? 'undisplayed': ''}>#{outfit.mood}</p>
                    </div>
                </div>
            </div>
        )
    
}

export default OutfitContainer