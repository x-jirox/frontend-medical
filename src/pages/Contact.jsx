import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='text-gray-700 font-semibold'>CONTACTANOS</p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt='' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Nuestras Oficinas</p>
          <p className='text-gray-500'>1234 Elm Street, Suite 500<br />Miami, FL 33132, USA</p>
          <p className='text-gray-500'>Tel: (+593) 0991530112 <br />Email: correalenin045@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Trabaja con nosotros</p>
          <p className='text-gray-500'>
            Únete a Prescripto y sé parte de un equipo que impulsa la innovación en el cuidado de la salud digital.
          </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explorar Empleos</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
