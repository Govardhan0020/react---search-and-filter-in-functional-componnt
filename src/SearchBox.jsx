 import React from "react"

 const SearchBox =(props)=> {
   return(
     <div>
       <label> Search : </label>
       <input type="search"
       placeholder="search product"
       onChange={props.search}
       />
       </div>
   )
 }
 export default SearchBox;