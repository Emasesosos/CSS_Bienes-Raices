import React from 'react';
import casa1 from './../../img/casa1.jpg';
import casa2 from './../../img/casa2.jpg';
import casa3 from './../../img/casa3.jpg';
import casa4 from './../../img/casa4.jpg';
import casa5 from './../../img/casa5.jpg';

const Contenido = () => {
    return (
        <section className="contenedor">
            <h2>A la venta</h2>
            <div className="venta">
                <div className="anuncio destacada">
                    <img src={casa1} alt="casa1"/>
                    <div className="card">
                        <h3 className="titulo">Casa 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus iure quisquam est atque dolor itaque et?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea eveniet molestiae aut corrupti consequatur quia iste.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim, delectus consectetur doloremque ea error odio in.</p>
                        <p className="precio">
                            Precio: <span>$3,000,000</span>
                        </p>
                        <a href="/" className="boton">Más Información</a>
                    </div>
                </div>
                <div className="anuncio">
                    <img src={casa2} alt="casa2"/>
                    <div className="card">
                        <h3 className="titulo">Casa 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus iure quisquam est atque dolor itaque et?</p>
                        <p className="precio">
                            Precio: <span>$3,000,000</span>
                        </p>
                        <a href="/" className="boton">Más Información</a>
                    </div>
                </div>
                <div className="anuncio">
                    <img src={casa3} alt="casa3"/>
                    <div className="card">
                        <h3 className="titulo">Casa 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus iure quisquam est atque dolor itaque et?</p>
                        <p className="precio">
                            Precio: <span>$3,000,000</span>
                        </p>
                        <a href="/" className="boton">Más Información</a>
                    </div>
                </div>
                <div className="anuncio">
                    <img src={casa4} alt="casa4"/>
                    <div className="card">
                        <h3 className="titulo">Casa 4</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus iure quisquam est atque dolor itaque et?</p>
                        <p className="precio">
                            Precio: <span>$3,000,000</span>
                        </p>
                        <a href="/" className="boton">Más Información</a>
                    </div>
                </div>
                <div className="anuncio">
                    <img src={casa5} alt="casa5"/>
                    <div className="card">
                        <h3 className="titulo">Casa 5</h3> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim, delectus consectetur doloremque ea error odio in.</p>
                        <p className="precio"> 
                            Precio: <span>$3,000,000</span> 
                        </p>
                        <a href="/" className="boton">Más Información</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Contenido;