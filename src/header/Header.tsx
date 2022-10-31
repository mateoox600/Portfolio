import { useState } from 'react';
import menu from './menu.svg';
import './Header.css';

export default function Header() {

    const [ scrolling, setScrolling ] = useState(false);

    window.addEventListener('scroll', () => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) setScrolling(true);
        else setScrolling(false);
    });

    return (
        <div className={`header ${scrolling ? 'scrolling' : ''}`}>
            <h1 className='title'>Mathys Gasnier</h1>
            <div className='nav'>
                <a href='#presentation' className='nav-item'>Presentation</a>
                <a href="#techno" className='nav-item'>Knowledge</a>
                <a href='#projects' className='nav-item'>Projects</a>
                <a href='#contact' className='nav-item'>Contact</a>
            </div>
            <div className='burger-nav'>
                <img className='burger-menu' src={menu} alt="" />
                <div className='menu'>
                    <a href='#presentation' className='burger-item'>Presentation</a>
                    <a href="#techno" className='burger-item'>Knowledge</a>
                    <a href='#projects' className='burger-item'>Projects</a>
                    <a href='#contact' className='burger-item'>Contact</a>
                </div>
            </div>
        </div>
    );
}
