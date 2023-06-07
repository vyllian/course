import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../media/logo.svg'
import fbook from '../media/socials/Facebook - Negative.svg'
import insta from '../media/socials/Instagram - Negative.svg'
import pint from '../media/socials/Pinterest - Negative.svg'
import twit from '../media/socials/Twitter - Negative.svg'


const Footer =()=>{
    const location = useLocation();
    const { pathname } = location;
        return(
            <footer>
                <div className='main-footer'>
                    <div className='container'>
                        <Link to="/"><img src={logo} alt='logo'></img></Link>
                        <div className='socials' >
                           <a href='#'><img src={fbook} alt='faceboook'></img></a> 
                           <a href='#'><img src={insta} alt='instagram'></img></a> 
                           <a href='#'><img src={pint} alt='pinterest'></img></a> 
                           <a href='#'><img src={twit} alt='twitter'></img></a> 
                        </div>
                    </div>
                    <div className='navigation'>
                    
                    <h3 className={pathname === '/' ? 'active-footer' : ''}>
                        <Link to="/">Home</Link>
                    </h3>
                    <h3 className={pathname === '/inspiration' ? 'active-footer' : ''}>
                        <Link to="/inspiration">Inspiration</Link>
                    </h3>
                    <h3 className={pathname === '/create' ? 'active-footer' : ''}>
                        <Link to="/create">Create</Link>
                    </h3>
                    </div>
                    <div className='container'>
                        <p className='nevil-org'>Contact us:<br/>nevil.org@gmail.com</p>
                        <p className='nevil-org'>©All right Reversed.<br/>Nevil Corporation 2023</p>
                    </div>
                </div>
            </footer>
        )
    
}

export default Footer