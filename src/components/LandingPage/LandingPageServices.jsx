
import CustomerServices from "./Services/CustomerServices"
import FarmerServices from "./Services/FarmerServices"
import Track from "./Services/Track"
import Convenience from "./Services/Convenience"
import Connection from "./Services/Connect"


function LandingPageServices  () {
  return (
    <main>
      <div className="container">
          <section className="services text-neutral-800">
              <h2 className="services-title uppercase font-bold text-center">services</h2>
              <div className="customer-and-farmer-services | flex">
                  <CustomerServices/>
                  <FarmerServices/>
              </div>
              <div className="other-services-wrapper | flex flex-col">
                <Track/>
                <Connection/>
                <Convenience/>
              </div>
          </section>
      </div>
    </main>
  )
}

export default LandingPageServices