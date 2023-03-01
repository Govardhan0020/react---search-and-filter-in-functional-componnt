import React, { useState, useEffect } from 'react';
import Table from './Table';
import SearchBox from './SearchBox';
import './style.css';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [ApiData, setApiData] = useState([]);

  console.log(ApiData, '10');
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((Data) => setApiData(Data));
  }, []);

 const Onsearch=(event)=> {
    const searchstring = event.target.value;
    setSearchInput(searchstring)
  }


  const filterdata = ApiData.filter((item) => item.category.includes(searchInput))
  

  return (
    <div>
      <h3> search and filter in functional component </h3>

      <SearchBox search={Onsearch} />
      <Table filterData={filterdata }/>
    </div>
  );
}
