

function ProductForm  () {
  return (
    <div className="container">
<section className="product-form-section">  
    {/* Form title */}
    <h2 className="product-form-title | uppercase font-semibold text-primary-800 text-2xl">product form</h2>
    <div className="product-form-wrapper">
      {/* form */}
      <form action="" className="farmer-product-form | shadow rounded-md  ">
        <div className="product-form-elements-wrapper | flex flex-col">
          {/* Form  segment 1 */}
          {/* Type and Category Wrapper */}
          <div className="type-category-wrapper | flex">
            {/* Type */}
            <div className="product-form-item flex flex-col">
              <label htmlFor="type" className="uppercase font-semibold">animal type</label>
              <input type="text" className="farmer-product-input-text product-input" name="type" id="type" placeholder="eg.cattle,goat,sheep"required/>
            </div>
            {/* Category */}
            <div className="product-form-item flex flex-col">
              <label htmlFor="farmer-product-form-category" className="uppercase font-semibold">animal category</label>
              <select className="farm-input-form-select | product-input capitalize" name="category" id="farmer-product-form-category" required>
                <option className="capitalize" style={{display:"none"}}></option>
                <option className="capitalize" value="layers">layers</option>
                <option className="capitalize" value="meat">meat</option>
                <option className="capitalize" value="dairy">dairy</option>
                <option className="capitalize" value="work">work</option>
              </select>
            </div>
          </div>
          {/* End of type and category wrapper */}
          {/* Breed and  number wrapper */}
          <div className="breed-number-wrapper | flex">
            {/* Breed */}
            <div className="product-form-item flex flex-col">
              <label htmlFor="breed" className="uppercase font-semibold">animal breed</label>
              <input type="text" className="farmer-product-input-text | product-input" name="breed" id="breed" placeholder="eg.chianina,limousin cattle,brown swiss cattle" required/>
            </div>
            {/*Number/ Available */}
            <div className="product-form-item flex flex-col">
              <label htmlFor="available" className="uppercase font-semibold">number</label>
              <input type="number" className="farmer-product-input-number | product-input" name="available" id="available" required/>
            </div>
          </div>
          {/* End of breed and number wrapper */}
          {/* Description */}
          <div className="product-form-item flex flex-col">
            <label htmlFor="description" className="uppercase font-semibold">description</label>
            <textarea name="image" id="farm-form-image"className="farm-form-textarea | product-input" rows="6" required></textarea>
          </div>
          {/* Age and price wrapper */}
          <div className="age-price-wrapper | flex">
            {/* Age */}
            <div className="product-form-item flex flex-col">
              <label htmlFor="age" className="uppercase font-semibold">age in months</label>
              <input type="number" className="farmer-product-input-text | product-input" name="age" id="age" required/>
            </div>
            {/* Price */}
            <div className="product-form-item flex flex-col">
              <label htmlFor="price" className="uppercase font-semibold">price</label>
              <input type="number" className="farmer-product-input-number | product-input" name="price" id="price" required/>
            </div>
          </div>
          {/* End of age and price wrapper */}
          {/* Image */}
          <div className="product-form-item flex flex-col">
            <label htmlFor="farm-form-image" className="uppercase font-semibold">animal image url</label>
            <textarea name="image" id="farm-form-image"className="farm-form-textarea | product-input" rows="6" required></textarea>
          </div>
          {/* Gender */}
          <div className="product-form-item flex flex-col">
            <label htmlFor="gender" className="uppercase font-semibold">gender</label>
            <select className="farm-input-form-select | product-input capitalize" name="category" id="farmer-product-form-category" required>
              <option className="capitalize" style={{display:"none"}}></option>
              <option className="capitalize" value="male">male</option>
              <option className="capitalize" value="female">female</option>
            </select>
          </div>
          {/* Submit Button */}
          <div className="farmer-product-form-btn-wrapper">
            <button className="btn farmer-product-form-btn font-bold">submit</button>
          </div>
        </div>
      </form>
    </div>
</section>
      </div>
  
  )
}

export default ProductForm