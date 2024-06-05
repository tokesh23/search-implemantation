import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './Compo.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const filteredImages = data.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="ipt" 
      />
      {filteredImages.map((item) => (
        <Card key={item.id} image={item.image} price={item.price} title={item.title} />
      ))}
    </div>
  );
}

export default App;
