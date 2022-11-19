import { MouseEvent, useState } from 'react';
import menu from './menu.svg';
import './Header.css';
import github from '../icons/github.png';
import linkedIn from '../icons/linkedIn.png';

export default function Header() {

    const [ scrolling, setScrolling ] = useState(false);
    const [ burgerOpen, setBurgerOpen ] = useState(false);

    window.addEventListener('scroll', () => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) setScrolling(true);
        else setScrolling(false);
    });

    function checkWidthOnClick(e: MouseEvent) {
        if(e.pageX < window.innerWidth / 2) {
            setBurgerOpen(false);
        }
    }

    return (
        <div className={`header ${scrolling ? 'scrolling' : ''}`}>
            <h1 className='title'>Mathys Gasnier</h1>
            <div className='nav'>
                <a href='#presentation' className='nav-item'>Presentation</a>
                <a href="#techno" className='nav-item'>Knowledge</a>
                <a href='#projects' className='nav-item'>Projects</a>
                <div className='nav-item' id='contacts'>
                    <a className='contacts-link' href="https://github.com/mateoox600" target='_blank' rel='noreferrer'><img src={github} alt="" /></a>
                    <a className='contacts-link' href="https://www.linkedin.com/in/mathys-g" target='_blank' rel='noreferrer'><img src={linkedIn} alt="" /></a>
                </div>
            </div>
            <div className='burger-nav'>
                <img onClick={() => setBurgerOpen(!burgerOpen)} className={`burger-menu ${burgerOpen ? 'open' : ''}`} src={menu} alt="" />
                <div className={`menu ${burgerOpen ? 'open' : ''}`} onClick={checkWidthOnClick}>
                    <a onClick={() => setBurgerOpen(false)} href='#presentation' className={`burger-item ${burgerOpen ? '' : 'disabled'}`}>Presentation</a>
                    <a onClick={() => setBurgerOpen(false)} href="#techno" className={`burger-item ${burgerOpen ? '' : 'disabled'}`}>Knowledge</a>
                    <a onClick={() => setBurgerOpen(false)} href='#projects' className={`burger-item ${burgerOpen ? '' : 'disabled'}`}>Projects</a>
                    <div onClick={() => setBurgerOpen(false)} className={`burger-item ${burgerOpen ? '' : 'disabled'}`} id='burger-contacts'>
                        <a className='burger-contacts-link' href="https://github.com/mateoox600" target='_blank' rel='noreferrer'><img src={github} alt="" /></a>
                        <a className='burger-contacts-link' href="https://www.linkedin.com/in/mathys-g" target='_blank' rel='noreferrer'><img src={linkedIn} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
