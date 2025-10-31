import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('sign up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHeadler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-b-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Crear Cuenta" : "Iniciar Sesion"}</p>
        <p>Porfavor {state === "Sign Up" ? "Sign Up" : "log in"} to book appoiment</p>
        {
          state === "Sign Up" &&
          <div className='w-full'>
            <p>Nombre Completo</p>
            <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.name)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Contraseña</p>
          <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.name)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Crear Cuenta" : "Iniciar Sesion"}</button>
        {
          state === "Sign Up" ? <p>Ya tienes una Cuenta?<span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'> Inicia Sesion aqui</span></p>
            : <p>Crear una Cuenta<span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'> Click aqui</span></p>
        }
      </div>
    </form>
  )
}

export default Login
