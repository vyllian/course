import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OutfitContainer from "../components/OutfitContainer";
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

class Inspiration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            colorButtons: {
                animal: false,
                beige: false,
                black: false,
                blue:false,
                brown: false,
                checkered: false,
                floral: false,
                green:false,
                gray: false,
                orange: false,
                pink: false,
                purple:false,
                red: false,
                striped: false,
                white: false,
                yellow:false,
              },
        };
    }
    
    toggleColor = (color) => {
        this.setState((prevState) => ({
            colorButtons: {
              ...prevState.colorButtons,
              [color]: !prevState.colorButtons[color],
            },
        }));
    };
    render(){
        const { colorButtons } = this.state;
        return(
            <div>
                <div className="noise"></div>
                <Header/>
                <div className="inspiration-page page">
                    <div className="header">
                        <h1>ALL</h1>
                        <h1>AWESOME OUTFITS</h1>
                    </div>
                    <div className="filters-container">
                        <div className="properties">
                            
                            <select name="style" id="style">
                                <option selected hidden>Style</option>
                                <option value="casual">Casual</option>
                                <option value="sport">Sport</option>
                                <option value="formal">Formal</option>
                                <option value="vintage">Vintage</option>
                                <option value="grunge">Grunge</option>
                                <option value="chic">Chic</option>
                                <option value="bohemian">Bohemian</option>
                                <option value="preppy">Preppy</option>
                                <option value="tomboy">Tomboy</option>
                            </select>
                            <select name="mood" id="mood">
                                <option selected hidden>Mood</option>
                                <option value="sportic">Sportic</option>
                                <option value="relaxing">Relaxing</option>
                                <option value="interesting">Interesting</option>
                                <option value="sexy">Sexy</option>
                                <option value="sad">Sad</option>
                                <option value="cheerful">Cheerful</option>
                            </select>
                            <select name="season" id="season">
                                <option selected hidden>Season</option>
                                <option value="winter">Winter</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                                <option value="Autumn">Autumn</option>
                            </select>
                        </div>
                        <div className="colors">
                             <button type="button" className="color-button" onClick={this.toggleColor("beige")} >
                                <img title="beige" className={`color-img ${colorButtons.beige ? "active" : ""}`} src={beige} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("blue")} >
                                <img title="blue" className={`color-img ${colorButtons.blue ? "active" : ""}`} src={blue} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("brown")} >
                                <img title="brown" className={`color-img ${colorButtons.brown ? "active" : ""}`}src={brown} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("green")} >
                                <img title="green" className={`color-img ${colorButtons.green ? "active" : ""}`} src={green} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("gray")} >
                                <img title="gray" className={`color-img ${colorButtons.gray ? "active" : ""}`} src={gray} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("orange")} >
                                <img title="orange" className={`color-img ${colorButtons.orange ? "active" : ""}`} src={orange} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("pink")} >
                                <img title="pink" className={`color-img ${colorButtons.pink ? "active" : ""}`} src={pink} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("purple")} >
                                <img title="purple" className={`color-img ${colorButtons.purple ? "active" : ""}`} src={purple} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("red")} >
                                <img title="red" className={`color-img ${colorButtons.red ? "active" : ""}`} src={red} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("white")} >
                                <img title="white" className={`color-img ${colorButtons.white ? "active" : ""}`} src={white} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("yellow")} >
                                <img title="yellow" className={`color-img ${colorButtons.yellow ? "active" : ""}`} src={yellow} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("black")} >
                                <img title="black" className={`color-img ${colorButtons.black ? "active" : ""}`} src={black} alt="color" />
                            </button>

                            <button type="button" className="color-button" onClick={this.toggleColor("animal")} >
                                <img title="animal print" className={`color-img ${colorButtons.animal ? "active" : ""}`} src={animal} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("checkered")} >
                                <img title="checkered print" className={`color-img ${colorButtons.checkered ? "active" : ""}`} src={checkered} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("floral")} >
                                <img title="floral print" className={`color-img ${colorButtons.floral ? "active" : ""}`} src={floral} alt="color" />
                            </button>
                            <button type="button" className="color-button" onClick={this.toggleColor("striped")} >
                                <img title="striped print" className={`color-img ${colorButtons.striped ? "active" : ""}`} src={striped} alt="color" />
                            </button>
                           
                        </div>
                    </div>
                    <OutfitContainer imageUrl={"../media/heart.svg"} data={"23/dec/2023"} likes={1000}/>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default Inspiration