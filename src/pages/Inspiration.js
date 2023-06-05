import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Inspiration extends React.Component{
    render(){
        return(
            <div>
                <div className="noise"></div>
                <Header currentPage="inspiration"/>
                <div className="create-page page">
                   
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Inspiration