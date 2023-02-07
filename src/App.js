import React, {useEffect, useState} from "react";
import List from './components/List';

function App() {

  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('rice');
  const APP_ID = "76f3aaa6";
  const APP_KEY = "8fe30efef05783f64351648e8a98333f	";

  const getDetails = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setDetails(data.hits);
    console.log(data.hits);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  
  const handleClick = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getDetails();
  }, [query]);

  return (
    <div className="App">  
      <form onSubmit={clickSubmit} 
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: "center",
        }}>
        <h1 style={{ textAlign: "center", marginRight:"250px"}}>React Recipe App</h1>
            <input style={{fontSize:"20px", marginRight:"150px"}} placeholder="Search Recipe" type="text" value={search} onChange={handleClick} />
      </form>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {details.map(detail => (
          <List
            key={detail.recipe.totalWeight}
            title={detail.recipe.label}
            image={detail.recipe.image}
            ingredients={detail.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
