import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ACERCA <span className='text-gray-700 font-medium'>DE</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            En <strong>Prescripto</strong> transformamos la forma en que pacientes y profesionales de la salud se conectan.
            Ofrecemos una plataforma digital confiable y fácil de usar para gestionar citas médicas, optimizar el tiempo
            y garantizar una atención más eficiente.
          </p>
          <p>
            Nuestro compromiso es brindar una experiencia médica moderna, segura y accesible para todos.
            Cada funcionalidad de Prescripto ha sido diseñada pensando en la comodidad del paciente y la organización del profesional.
          </p>
          <b className='text-gray-800'>Nuestra Visión</b>
          <p>
            Ser líderes en innovación tecnológica aplicada a la salud, impulsando la transformación digital del sector médico
            y facilitando el acceso a una atención eficiente, humana y de calidad para cada paciente.
          </p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>Por qué <span className='text-gray-900 font-semibold'>elegirnos</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Eficiencia</b>
          <p>Gestionamos las citas de forma rápida y sin complicaciones, ahorrando tiempo a pacientes y médicos.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Conveniencia</b>
          <p>Accede y agenda tus citas desde cualquier dispositivo, en cualquier momento.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalización</b>
          <p>Adaptamos la plataforma a las necesidades de cada paciente y profesional.</p>
        </div>
      </div>

    </div>
  )
}

export default About
