import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../media/logo.svg'

class Header extends React.Component{
    render(){
        return(
            <header>
                <img src={logo} alt='logo'></img>
                <div className='navigation'>
                    <h3 className='menu-item active'><Link to="/">Home</Link></h3>
                    <h3 className='menu-item'><Link to="/inspiration">Inspiration</Link></h3>
                    <h3 className='menu-item'><Link to="/create">Create</Link></h3>
                </div>
            </header>
        )
    }
}

export default Header