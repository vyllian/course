import {React} from 'react'
import ColorButton from './ColorButton'
import ItemCard from './ItemCard'

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


const ClothesSearch =()=>{
        return(
            <div className="search-container">
                <div className='search-filter'>
                    <select name="type">
                        <option selected value="none">Type</option>
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
                   
                        <button className='exit-button-search'>
                            <img className='exit-img' src={exit} alt='exit'></img>
                        </button>
               
                </div> 
        
                <div class="row mx-auto my-auto">
        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
            <div class="carousel-inner w-100" role="listbox">
                <div class="carousel-item active">
                    <div class="col-md-4">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=1"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=2"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=3"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=4"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=5"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=6"/>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </div>
                </div>
    
        )
    
}

export default ClothesSearch