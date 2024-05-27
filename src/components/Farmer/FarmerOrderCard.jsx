

function FarmerOrderCard () {
  return (
        <div className ='farmer-product-card-wrapper | rounded-sm bg-white shadow'>
    <div className="farmer-product-card flex flex-col">
        {/* Image */}
       <div className="farmer-product-img-wrapper">        
        <img className="farmer-product-img rounded-sm" src={`${animal_picture}`} alt={`a${animal_name}`}/>
        </div> 
        {/* Name and  Type*/}
        <div className='farmer-name-type-wrapper flex'>
        {/*Name  */}
        <p> <span className="farmer-product-title | capitalize font-semibold">name</span>:
        <span className="farmer-product-value | capitalize">{`${animal_name}`}</span>        
        </p>
        {/*Type  */}
        <p> <span className="farmer-product-title | capitalize font-semibold">type</span>:
        <span className="farmer-product-value | capitalize">{`${animal_type}`}</span>        
        </p>
        </div>
        {/*Breed  */}
        <p> <span className="farmer-product-title | capitalize font-semibold">breed</span>:
        <span className="farmer-product-value | capitalize">{`${animal_breed}`}</span>        
        </p>
        {/* Price and  Age*/}
        <div className='farmer-name-type-wrapper | flex'>
        {/*Price  */}
        <p> <span className="farmer-product-title | capitalize font-semibold">price</span>:
        <span className="farmer-product-value">{`${animal_price}`}</span>.ksh       
        </p>
        {/*Age */}
        <p> <span className="farmer-product-title | capitalize font-semibold">age</span>:
        <span className="farmer-product-value">{`${animal_age}`}</span> months        
        </p>
        </div>

        <div className="farmer-product-card-btn-wrapper flex">
            <button className="farmer-product-delete-btn | farmer-product-btn rounded-sm btn-ghost uppercase font-bold  ">delete</button>
            <button className="farmer-product-edit-btn | farmer-product-btn  rounded-sm btn-ghost uppercase font-bold  ">edit</button>
        </div>
    </div>
    </div>
  )
}

export default FarmerOrderCard