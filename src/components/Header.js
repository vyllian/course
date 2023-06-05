import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../media/logo.svg'


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          currentPage: 'home', // встановлюємо початкову сторінку
        };
    }
    
    handleClick = (page) => {
        this.setState({ currentPage: page });
    };

    render(){
        const { currentPage } = this.state;
        return(
            <header>
                <Link to="/"><img src={logo} alt='logo'></img></Link>
                <div className='navigation'>
                    <h3 className={currentPage === 'home' ? 'menu-item active' : 'menu-item'}><Link to="/">Home</Link></h3>
                    <h3 className={currentPage === 'inspiration' ? 'menu-item active' : 'menu-item'}><Link to="/inspiration">Inspiration</Link></h3>
                    <h3 className={currentPage === 'create' ? 'menu-item active' : 'menu-item'}><Link to="/create">Create</Link></h3>
                </div>
            </header>
        )
    }
}

export default Header