import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <div className={s.main}>
        <div><img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        </div>
        <div className={s.nameSite}>Social Network</div>
         </div>
    </header>
}

export default Header;