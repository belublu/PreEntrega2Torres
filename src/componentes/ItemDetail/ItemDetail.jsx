import React from 'react'
import Row from 'react-bootstrap/Row';

const ItemDetail = ({ id, nombre, precio, genero, marca, tamano, img }) => {
    return (
        <div className='container mt-5'>
            <Row>
                <h3>{nombre}</h3>
                <h5>{marca}</h5>
                <h5>Género: {genero}</h5>
                <h5>Precio: ${precio}</h5>
                <h5>ID: {id}</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, quaerat recusandae, veniam, ex veritatis asperiores repellat quos quae doloribus debitis totam. Nemo, commodi natus. Consequuntur dolorum, dolore dolores amet nisi optio laborum dicta. Neque, dolore in labore id quas eveniet!
                </p>
                <img src='./img/perfumes/ckBeMan.jpg' className='img-fluid'/>
            </Row>
            
        </div>
    )
}

export default ItemDetail
/* 
<h6 className='marcaCard text-center'>{marca} </h6>
                    <p className='tamanoCard'>Tamaño: {tamano}ml</p>
                    <p className='generoCard'>Género: {genero} </p>
                    <p className='precioCard'>Precio: $ {precioPunto} </p> */

