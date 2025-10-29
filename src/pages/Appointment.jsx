import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  const daysOfWeek = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB']
  const [doctInfo, setDoctInfo] = useState(null)
  const [doctSlots, setDoctSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDoctorInfo = async () => {
    const doctInfo = doctors.find(doc => doc._id === docId)
    setDoctInfo(doctInfo)
  }

  const getAvailableSlots = async () => {
    setDoctSlots([])
    //getting current day
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      //getting date whit index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      //seting end time of the date whit index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      //seting hours
      if(today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        //add slot to array
        timeSlots.push({
          datetime:new Date(currentDate),
          time:formattedTime
        })
        //increment 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDoctSlots(prev => ([...prev, timeSlots ]))
    }
  }

  useEffect(() => {
    fetchDoctorInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  },[doctInfo])

  useEffect(() => {
    console.log(doctSlots)
  }, [doctSlots])

  return doctInfo && (
    <div>
      {/*doc details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={doctInfo.image} alt='' />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-70px] sm:mt-0'>
          {/*doc info */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {doctInfo.name}
            <img className='w-5' src={assets.verified_icon} alt='' />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{doctInfo.degree} - {doctInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{doctInfo.experience}</button>
          </div>
          {/*dcotor about */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'><img src={assets.info_icon} alt='' /></p>
            <p className='text-sm text-gray-500 max-w-[700ox] mt-1'>{doctInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>Consuslta gratis</p>
        </div>
      </div>

    </div>
  )
}

export default Appointment
