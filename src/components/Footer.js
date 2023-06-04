import React from 'react'
import logo from '../media/logo.svg'
import fbook from '../media/socials/Facebook - Negative.svg'
import insta from '../media/socials/Instagram - Negative.svg'
import pint from '../media/socials/Pinterest - Negative.svg'
import twit from '../media/socials/Twitter - Negative.svg'
import lines from '../media/element2.svg'


class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='add'>
                    <img className='element' src={lines} alt='lines'></img>
                </div>
                <div className='main-footer'>
                    <div className='container'>
                        <img className='logo' src={logo} alt='logo'></img>
                        <div className='socials' >
                           <a href='#'><img src={fbook} alt='faceboook'></img></a> 
                           <a href='#'><img src={insta} alt='instagram'></img></a> 
                           <a href='#'><img src={pint} alt='pinterest'></img></a> 
                           <a href='#'><img src={twit} alt='twitter'></img></a> 
                        </div>
                    </div>
                    <div className='navigation'>
                        <h3 className='active-footer'>Home</h3>
                        <h3>Inspiration</h3>
                        <h3>Create</h3>
                    </div>
                    <div className='container'>
                        <p className='nevil-org'>Contact us:<br/>nevil.org@gmail.com</p>
                        <p className='nevil-org'>©All right Reversed.<br/>Nevil Corporation 2023</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer