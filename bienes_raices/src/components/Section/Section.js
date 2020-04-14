import React from 'react';
import nosotros from './../../img/nosotros.jpg';

const Section = () => {
    return (
        <section className="nosotros contenedor">
            <div className="imagen">
                <img src={nosotros} alt="nosotros" className="imagen"/>
            </div>
            <div className="contenido-nosotros">
                <h1>Sobre Nosotros</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem corrupti, quam illo voluptatum consequatur eveniet dolore accusamus sit molestias id nam qui sunt minus eius ducimus ipsa adipisci nesciunt laudantium.Nemo dolorem dolor, ad quisquam ullam quaerat eos? Nisi inventore totam animi iusto. Eum nisi quibusdam illo maiores similique, sapiente qui ipsam, omnis odio doloribus error quos placeat et voluptatum!</p>
            </div>
        </section>
    );
}
 
export default Section;  