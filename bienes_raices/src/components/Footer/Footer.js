import React from 'react';
import casa2 from './../../img/casa2.jpg';
import casa3 from './../../img/casa3.jpg';
import casa4 from './../../img/casa4.jpg';
import casa5 from './../../img/casa5.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contenedor">
                <div className="widget">
                    <h3>Nosotros</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda!</p>
                </div>
                <div className="widget navegacion">
                    <h3>Navegacion</h3>
                    <nav>
                        <a href="/">Nosotros</a>
                        <a href="/">Casas</a>
                        <a href="/">Contacto</a>
                    </nav>
                </div>
                <div className="widget">
                    <h3>Casas a la Venta</h3>
                    <div className="contenedor-casas">
                        <div className="casa">
                            <div className="foto">
                                <img src={casa2} alt="casa2"/>
                            </div>
                            <div className="info">
                                <p>Casa 2</p>
                                <p>$3,000,000</p>
                            </div>
                        </div>
                        <div className="casa">
                            <div className="foto">
                                <img src={casa3} alt="casa3"/>
                            </div>
                            <div className="info">
                                <p>Casa 3</p>
                                <p>$3,000,000</p>
                            </div>
                        </div>
                        <div className="casa">
                            <div className="foto">
                                <img src={casa4} alt="casa4"/>
                            </div>
                            <div className="info">
                                <p>Casa 4</p>
                                <p>$3,000,000</p>
                            </div>
                        </div>
                        <div className="casa">
                            <div className="foto">
                                <img src={casa5} alt="casa5"/>
                            </div>
                            <div className="info">
                                <p>Casa 5</p>
                                <p>$3,000,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="copyright">Derechos Reservados Bienes Raices 2020</p> 
        </footer>
    );
}
 
export default Footer;