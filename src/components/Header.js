import React from 'react'
import Logo from '../media/logo.svg'

class Header extends React.Component{
    render(){
        return(
            <header>
                <img  src={Logo} alt='logo'></img>
                <div className='navigation'>
                    <h3 className='menu-item active'>Home</h3>
                    <h3 className='menu-item'>Inspiration</h3>
                    <h3 className='menu-item'>Create</h3>
                </div>
            </header>
        )
    }
}

export default Header