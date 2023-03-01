import React from 'react';

 const Table =(props)=> {
   const filterData = props.filterData;
   const Border ={border:"2px solid black"}
  return(
    <div>
       <div>
          {
            <table>
              <thead>
                <td style={Border}> S.No</td>
                <td style={Border}> Title </td>
                <td style={Border}> Description</td>
                <td style={Border}> Category </td>
                <td style={Border}> Price </td>
                <td style={Border}> count </td>
                <td style={Border}> Rating </td>
              </thead>
              <tbody>
                {filterData.map((item) => (
                  <tr>
                    <td style={Border}>{item.id} </td>
                    <td style={Border}>{item.title} </td>
                    <td style={Border}>{item.description} </td>
                    <td style={Border}>{item.category} </td>
                    <td style={Border}>$. {item.price} </td>
                    <td style={Border}>{item.rating.count} </td>
                    <td style={Border}>{item.rating.rate} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      </div>
  )
}
export default Table;