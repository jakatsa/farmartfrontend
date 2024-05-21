import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/DummyData";
export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    /** 
    singleProduct:
      JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
    error: false,*/
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        console.log("filter", filter);
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem(
          "filteredData",
          savedState
        ); /**we can also use local storage */
      } catch (err) {
        return err;
      }
    },
  },
});
export const {
  filterProducts,
  /** * singleProduct,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,*/
} = productSlice.actions;
export default productSlice.reducer;
