import React from "react";
import './Header.css'
import logo from '../../images'

function Header() {
    return (
        <div className='header'>
            <header className='headerObj'>
                <img src={logo}/>
                <nav>
                    <ul className='nav-links'>
                        <li><a href='/savelist'>저장 목록</a></li>
                        <li><a href='/memo'>기록</a></li>
                        <li><a href='/account'>내 계정</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;