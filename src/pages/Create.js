import {React, useState , useEffect}from "react";
import html2canvas from "html2canvas";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PublishForm from "../components/PublishForm";
import ClothesSearch from "../components/ClothesSearch";

import downloadIcon from "../media/download.svg";
import plus from "../media/plus.svg"
import bin from "../media/icons8-bin.svg";
import hat from "../media/clothes_template/beret.svg"
import coat from "../media/clothes_template/coat.svg"
import tshirt from "../media/clothes_template/tshirt.svg"
import jeans from "../media/clothes_template/jeans.svg"
import glasses from "../media/clothes_template/glasses.svg"
import bag from "../media/clothes_template/bag.svg"
import shoes from "../media/clothes_template/shoes.svg"



const Create =()=>{
    const [isPubVis, setisPubVis] = useState(false);
    const [isSchVis, setisSchVis] = useState(false);
    const [downloadBut, setDownloadBut]=useState(false)
    const [type, setType] = useState("type");
    const [imgToPub, setImgToPub]=useState('');

    const [selectedImageHat, setSelectedImageHat] = useState(null);
    const [selectedImageShoes, setSelectedImageShoes] = useState(null);
    const [selectedImageBag, setSelectedImageBag] = useState(null);
    const [selectedImageGlasses, setSelectedImageGlasses] = useState(null);
    const [selectedImageTop, setSelectedImageTop] = useState(null);
    const [selectedImageBottom, setSelectedImageBottom] = useState(null);
    const [selectedImageCoat, setSelectedImageCoat] = useState(null);
    
    const [shownBinHat, setshownBinHat] = useState(false);
    const [shownBinShoes, setshownBinShoes] = useState(false);
    const [shownBinBag, setshownBinBag] = useState(false);
    const [shownBinGlasses, setshownBinGlasses] = useState(false);
    const [shownBinTop, setshownBinTop] = useState(false);
    const [shownBinBottom, setshownBinBottom] = useState(false);
    const [shownBinCoat, setshownBinCoat] = useState(false);

    const handleImageSelection = (image) => {
        switch (type){
            case 'shoes':
                setSelectedImageShoes(image);
                break
            case 'hat':
                setSelectedImageHat(image);
                break
            case 'bag':
                setSelectedImageBag(image);
                break
            case 'glasses':
                setSelectedImageGlasses(image);
                break
            case 'top':
                setSelectedImageTop(image);
                break
            case 'bottom':
                setSelectedImageBottom(image);
                break
            case 'otter wear':
                setSelectedImageCoat(image);
                break
        }

    };
    const closePubForm = () => {
        setisPubVis(false);
      };
    const pressPublish = () => {
        setisPubVis(true);
    };
    useEffect(()=>{
        if(isPubVis){
            publish();
        }
    },[isPubVis])

    const publish=()=>{
         setDownloadBut(true)
        setTimeout(()=> imgForming(), 500)
         
       
        setTimeout(( ) => setDownloadBut(false), 500);
    }
    const imgForming =async()=>{
        await html2canvas(document.querySelector("#capture")).then(canvas=>{
            const image = canvas.toDataURL("image/png");
            setImgToPub(image);
        });
    }

    const openSearchForm = (plusType)=>{
        setisSchVis(current => !current);
        setType(plusType);
    }
    const showBin = (where) => {
        switch (where){
            case 'hat':
                setshownBinHat(!shownBinHat)
                break;
            case 'otter wear':
                setshownBinCoat(!shownBinCoat)
                break;  
            case 'shoes':
                setshownBinShoes(!shownBinShoes)
                break
            case 'bag':
                setshownBinBag(!shownBinBag)
                break
            case 'glasses':
                setshownBinGlasses(!shownBinGlasses)
                break
            case 'top':
                setshownBinTop(!shownBinTop)
                break
            case 'bottom':
                setshownBinBottom(!shownBinBottom)
                break
        }   
        
    };
    
    const deleteItem = (where) => {
        switch (where){
            case 'hat':
                setshownBinHat(false);
                setSelectedImageHat(null) 
                break;
            case 'otter wear':
                setshownBinCoat(false);
                setSelectedImageCoat(null) 
                break;  
            case 'shoes':
                setshownBinShoes(false);
                setSelectedImageShoes(null) 
                break;
            case 'bag':
                setshownBinBag(false);
                setSelectedImageBag(null) 
                break
            case 'glasses':
                setshownBinGlasses(false);
                setSelectedImageGlasses(null) 
                break
            case 'top':
                setshownBinTop(false);
                setSelectedImageTop(null) 
                break
            case 'bottom':
                setshownBinBottom(false);
                setSelectedImageBottom(null) 
                break
        }
    };
   
    const pressDownload=async ()=>{
        setDownloadBut(true)
        setTimeout(() =>  download() , 500);
       setTimeout(( ) => setDownloadBut(false), 500);
    }
    const download = async()=>{
        await html2canvas(document.querySelector("#capture")).then(canvas => {
            let image = canvas.toDataURL("image/png");
            let link = document.createElement("a");
            link.href = image;
            link.download = "outfit.png";
            link.click();
        });
    }
  
    return(
            <div>
                <div className="noise"></div>
                <Header/>
                <div className="publish-window" >
                    <PublishForm imageUrl={imgToPub} isPubVis={isPubVis} closePubForm={closePubForm}/>
                    
                </div>
                <div className="search-window">
                    <ClothesSearch style={isSchVis} type={type}  onSelectImage={handleImageSelection} />
                </div> 
                <div className="create-page page">
                    <div className="header-pow">
                        <h1>ADD CLOTHES TO THE TEMPLATE</h1>
                        <h1 id="ques-mark"><small><a href="#tutor">?</a></small></h1>
                    </div>
                   <div className="creating-container">
                        <div className="creating-template" id="capture">
                            <div className="template-section">
                                <div className="item hat">
                                    <div className={`item-actions ${downloadBut ? 'hidden' : ''}`}>
                                        <button type="button" className={`delete-button ${shownBinHat ? 'visible' : ''}`} onClick={()=>deleteItem("hat")}>
                                            <img src={bin} alt="delete"/>
                                        </button>
                                        <button type="button" className="plus-button" onClick={() => openSearchForm("hat")} >
                                            <img src={plus} alt="add"/>
                                        </button> 
                                    </div>
                                    <img src={selectedImageHat === null ? hat : selectedImageHat} className={selectedImageHat === null ? (downloadBut ? 'hidden' : ''):'' }  alt="hat" onClick={()=>showBin("hat")}></img>
                                </div>
                                <div className="item coat">
                                    <div className={`item-actions ${downloadBut ? 'hidden' : ''}`}>
                                        <button type="button" className={`delete-button ${shownBinCoat ? 'visible' : ''}`} onClick={()=>deleteItem("otter wear")}>
                                            <img src={bin} alt="delete"/>
                                        </button>
                                        <button type="button"className="plus-button" onClick={()=>openSearchForm("otter wear")}>
                                            <img src={plus} alt="add"/>
                                        </button>
                                    </div>
                                    <img src={selectedImageCoat === null ? coat : selectedImageCoat} className={selectedImageCoat === null ? (downloadBut ? 'hidden' : ''):'' } alt="coat" onClick={()=>showBin("otter wear")}></img>
                                    
                                </div>
                            </div>
                            <div className="template-section" id="main-fit-section">
                                <div className="item top">
                                    <div className={`item-actions ${downloadBut ? 'hidden' : ''}`}>
                                        <button type="button" className={`delete-button ${shownBinTop ? 'visible' : ''}`} onClick={()=>deleteItem("top")}>
                                            <img src={bin} alt="delete"/>
                                        </button>
                                        <button type="button"className="plus-button" onClick={()=>openSearchForm("top")}>
                                            <img src={plus} alt="add"></img>
                                        </button>
                                    </div>
                                    <img src={selectedImageTop === null ? tshirt : selectedImageTop} className={selectedImageTop === null ? (downloadBut ? 'hidden' : ''):'' } alt="t-shirt" onClick={()=>showBin("top")}></img>
                                </div>
                                <div className="item bottom">
                                     <div className={`item-actions ${downloadBut ? 'hidden' : ''}`}>
                                        <button type="button" className={`delete-button ${shownBinBottom ? 'visible' : ''}`} onClick={()=>deleteItem("bottom")}>
                                            <img src={bin} alt="delete"/>
                                        </button>
                                        <button type="button"className="plus-button" onClick={()=>openSearchForm("bottom")}>
                                            <img src={plus} alt="add"></img>
                                        </button>
                                    </div>
                                    <img src={selectedImageBottom === null ? jeans : selectedImageBottom} className={selectedImageBottom === null ? (downloadBut ? 'hidden' : ''):'' } alt="jeans" onClick={()=>showBin("bottom")}></img>
                                </div>
                            </div>
                            <div className="template-section">
                                <div className="item glasses">
                                    <div className={`item-actions ${downloadBut ? 'hidden' : ''}`}>
                                        <button type="button" className={`delete-button ${shownBinGlasses ? 'visible' : ''}`} onClick={()=>deleteItem("glasses")}>
                                            <img src={bin} alt="delete"/>
                                        </button>
                                        <button type="button"className="plus-button" onClick={()=>openSearchForm("glasses")}>
                                            <img src={plus} alt="add"></img>
                                        </button>
                                    </div>
                                    <img src={selectedImageGlasses === null ? glasses : selectedImageGlasses} className={selectedImageGlasses === null ? (downloadBut ? 'hidden' : ''):'' } alt="glasses" onClick={()=>showBin("glasses")}></img>
                                </div>
                                <div className="item bag">
                                    <div className={`item-actions ${downloadBut ? 'hidden' : ''}`}>
                                        <button type="button" className={`delete-button ${shownBinBag ? 'visible' : ''}`} onClick={()=>deleteItem("bag")}>
                                            <img src={bin} alt="delete"/>
                                        </button>
                                        <button type="button"className="plus-button"onClick={()=>openSearchForm("bag")} >
                                            <img src={plus} alt="add"></img>
                                        </button>
                                    </div>
                                    <img src={selectedImageBag === null ? bag : selectedImageBag} className={selectedImageBag === null ? (downloadBut ? 'hidden' : ''):'' } alt="bag" onClick={()=>showBin("bag")}></img>
                                </div>
                                <div className="item shoes">
                                    <div className={`item-actions ${downloadBut ? 'hidden' : ''}`}>
                                        <button type="button" className={`delete-button ${shownBinShoes ? 'visible' : ''}`} onClick={()=>deleteItem("shoes")}>
                                            <img src={bin} alt="delete"/>
                                        </button>
                                        <button type="button"className="plus-button" onClick={()=>openSearchForm("shoes")} >
                                            <img src={plus} alt="add"></img>
                                        </button>
                                    </div>
                                    <img src={selectedImageShoes === null ? shoes : selectedImageShoes} className={selectedImageShoes === null ? (downloadBut ? 'hidden' : ''):'' } alt="shoes" onClick={()=>showBin("shoes")}></img>
                                </div>
                            </div>
                        </div>
                        <div className="template-bar">
                            <button className="button-container create-button"onClick={pressPublish}>Publish</button>
                            <button className="button-container down-button" onClick={pressDownload}>
                                <img src={downloadIcon} alt="download"></img>
                            </button>
                        </div>
                   </div>
                   <div className="tutor-section">
                        <h1 id="tutor">HOW TO MAKE AN OUTFIT</h1>
                        <ol>
                            <li>Go to the template above</li>
                            <li>Press “+” near the element you want to add</li>
                            <li>Choose type and/or color in this category</li>
                            <li>Take a look on offered clothes, find desirable item</li>
                            <li>Add more & express yourself</li>
                            <li>When your outfit is done press “Publish” button to add the image to the Inspiration page</li>
                            <li>Download image to your computer</li>                                
                            <li>Start over again and create another one!</li>
                        </ol>
                   </div>
                </div>
                <Footer/>
            </div>
    )
    
}

export default Create