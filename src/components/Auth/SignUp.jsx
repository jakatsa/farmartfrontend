import {NavLink} from 'react-router-dom'

const SignUp = () => {
  return (   
    <div className="sign-up-redirect-wrapper | flex">
            <div className="sign-up-redirect | flex">
            <NavLink  className="sign-up-redirect-card | flex flex-col rounded-sm shadow capitalize"to="/farmerSignUp">
              <div className ="sign-up-redirect-card-img-wrapper"> 
              <img className ="sign-up-redirect-card-img" src="https://t3.ftcdn.net/jpg/06/33/73/72/360_F_633737264_q4ZqafZzsZAnViH5Vc7ip2UvUpoGCJVy.jpg" alt="farmer "/>
              </div>

              <div className="sign-up-redirect-card-text">
              <p className="uppercase font-bold text-2xl">farmers sign up</p>
              <p className="capitalize font-semibold">
                Join us today! 
              </p>              
              <p className="capitalize font-semibold">
                &
              </p>              
              <p className="capitalize">
              Sell your products directly, to your consumers!
              </p>
           </div>
            </NavLink>
            <NavLink  className="sign-up-redirect-card | rounded-sm shadow capitalize"to="/customerSignUp">
              <div className ="sign-up-redirect-card-img-wrapper"> 
              <img className ="sign-up-redirect-card-img" src="data:image/jpeg;base64,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" alt="farmer "/>
              </div>
              <div className="sign-up-redirect-card-text">
              <p className="uppercase font-bold text-2xl">customer sign up</p>
              <p className="capitalize font-semibold">
                Join us today! 
              </p>              
              <p className="capitalize font-semibold">
                &
              </p>              
              <p className="capitalize">
              buy the very best products directly, from famrmers near you!
              </p> 
            </div>
            </NavLink>
            </div>

    </div>
    
  )
}

export default SignUp