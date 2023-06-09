import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import logo from '../media/logo.svg'


const Header =()=>{
        const location = useLocation();
        const { pathname } = location;
        return(
            <header>
                <Link to="/"><img src={logo} alt='logo'></img></Link>
                <div className='navigation'>
                    <h3 className={pathname === '/' ? 'menu-item active-menu' : 'menu-item'}>
                        <Link to="/">Home</Link>
                    </h3>
                    <h3 className={pathname === '/inspiration' ? 'menu-item active-menu' : 'menu-item'}>
                        <Link to="/inspiration">Inspiration</Link>
                    </h3>
                    <h3 className={pathname === '/create' ? 'menu-item active-menu' : 'menu-item'}>
                        <Link to="/create">Create</Link>
                    </h3>
                </div>
            </header>
        )
    
}

export default Header