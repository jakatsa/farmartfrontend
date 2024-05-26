import { Outlet } from 'react-router-dom'
import FarmerNav from './FarmerNav'

function FarmerPage () {
  return (
    <div className="farmer-pg | text-primary-800 flex bg-gray-200">
      <FarmerNav/>
      <Outlet/>
    </div>

  )
}

export default FarmerPage