import React from 'react';
import Navegador from './../Navegador/Navegador';
import logo from './../../img/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="barra contenedor">
                <div className="nombre-sitio">
                    <img src={logo} alt="logo"  className="logo"/>
                </div>
                <Navegador/>
            </div>
        </header>
    );
}
 
export default Header;