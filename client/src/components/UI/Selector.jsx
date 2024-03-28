import React from 'react'

const Selector = (props) => {
  return (
    <div className='aspect-square col-span-1 shadow rounded-md text-center' onClick={props.onClick}>
      <div className='h-4/5 w-full'>
        <img src={props.img} alt="" className="w-full h-full object-contain"/>
      </div>
      <div className='h-1/5 font-bold'>
      <p>{props.text}</p>
      </div>
     
    </div>
  )
}

export default Selector