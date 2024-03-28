import React from 'react'
import { formatearDinero } from '../../helpers'

const CardSelector = ({producto}) => {

  const { nombre, precio, imagen} = producto
  return (
      <div className='aspect-square col-span-1 shadow rounded-md text-center'>
        <div className='h-1/5 w-full'>
        <img
          alt={`imagen ${nombre}`}
          className="w-full h-full object-cover"
          src={`/img/${imagen}.webp`}
        />
        </div>
        <div className='h-4/5 font-bold'>
        <p>{nombre}</p>
        <p>{formatearDinero(precio)}</p>
        </div>
       
      </div>
    )
}

const Selector = ({ img, text, productos, setInfoSeleccionada }) => {

  const handleClick = () => {
    const info = productos.map((producto) => (
      <CardSelector
        key={producto.imagen}
        producto={producto}
      />
    ));
    setInfoSeleccionada(info);
  };
  return (
    <div className='aspect-square col-span-1 shadow rounded-md text-center' onClick={handleClick}>
      <div className='h-4/5 w-full'>
        <img src={img} alt="" className="w-full h-full object-contain"/>
      </div>
      <div className='h-1/5 font-bold'>
      <p>{text}</p>
      </div>
     
    </div>
  )
}

export default Selector