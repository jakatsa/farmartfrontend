import { NavLink } from "react-router-dom"

const Error = () => {
  return (
    <div className="grid place-items-center pt-5">
        <p className="font-bold text-xl">404 page not found</p>
        <NavLink to='/' className="uppercase btn primary-btn bg-primary-500 text-white mt-5 font-bold">home</NavLink>
    </div>
  )
}

export default Error