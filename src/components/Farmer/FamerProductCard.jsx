

function FamerProductCard ({
    animal_id ,
    animal_picture, 
    animal_name, 
    animal_type,
    animal_breed, 
    animal_price, 
    animal_location, 
    available, 
    animal_age,}) {

    function handelDelete(){

      
    }
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
        {/* Location and  Number*/}
        <div className='farmer-name-type-wrapper | flex'>
        {/*Location */}
        <p> <span className="farmer-product-title | capitalize font-semibold">location</span>:
        <span className="farmer-product-value | capitalize">{`${animal_location}`}</span>      
        </p>
        {/*Number /Available */}
        <p> <span className="farmer-product-title | capitalize font-semibold">number</span>:
        <span className="farmer-product-value">{`${available}`}</span>         
        </p>
        </div>
        <div className="farmer-product-card-btn-wrapper flex">
            <button onClick= {handelDelete} className="farmer-product-delete-btn | farmer-product-btn rounded-sm btn-ghost uppercase font-bold  ">delete</button>
        </div>
    </div>
    </div>
  )
}

export default FamerProductCard