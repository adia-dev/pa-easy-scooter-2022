import React, { useRef, useState } from 'react'

import { useLoadScript } from '@react-google-maps/api'
import { BiStoreAlt } from 'react-icons/bi'
import { FaArrowLeft } from 'react-icons/fa'
import { MdElectricScooter } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Map from '../../components/Map'

const DashboardMap = () => {

  const libraries = ["places"]
  const navigate = useNavigate()


  const [pickupPoints, setPickupPoints] = useState([])
  const [scooters, setScooters] = useState([])
  const [target, setTarget] = useState(null)
  const [showScooters, setShowScooters] = useState(true)
  const [showPickupPoints, setShowPickupPoints] = useState(true)

  const mapRef = useRef(null);

  const panTo = (coords) => {
    mapRef.current?.panTo(coords)
  }


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  })


  return (
    <div className='w-screen h-screen relative'>
      <div className=" flex-col  absolute top-10 z-[100] left-0">
        <div onClick={() => navigate("/v2/dashboard")} className="m-5 font-semibold text-sm opacity-85 space-x-3 cursor-pointer hover:brightness-95 transition active:scale-95 bg-blue-500 text-white px-3 py-2 flex items-center rounded-lg">
          <FaArrowLeft />
          <span>Dashboard</span>
        </div>
        <div className="mx-5 mb-2 mt-10 font-semibold text-sm opacity-85 space-x-3 cursor-help bg-yellow-500 text-white px-3 py-2 flex items-center rounded-lg">
          <MdElectricScooter />
          <span>Scooters</span>
        </div>
        <div className="mx-5 font-semibold text-sm opacity-85 space-x-3 cursor-help bg-purple-500 text-white px-3 py-2 flex items-center rounded-lg">
          <BiStoreAlt />
          <span>Pickup Points</span>
        </div>

      </div>


      <Map mapRef={mapRef}
        target={target}
        isLoaded={isLoaded}
        pickupPoints={pickupPoints}
        scooters={scooters}
        setPickupPoints={setPickupPoints}
        setScooters={setScooters}
        params={{
          showPickupPoints,
          showScooters,
          clickableMarkers: false,
          showDirections: false
        }
        }
      />


    </div>
  )
}

export default DashboardMap