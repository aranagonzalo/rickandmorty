import style from "./SearchBar.module.css";
import {useState} from "react";


export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const pickRandom = () => {
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      if (randomNumber !== id) {
         setId(randomNumber);
         props.onSearch(randomNumber, setId);
      } else {
         pickRandom();
      }
   };

   const handleSearch = () => {
    setId("");  
    props.onSearch(id, setId);
  };

   return (
      <div className={style.searchBar}>
         <button onClick={pickRandom} className={style.random}>Randomizer</button>
         <input onChange={handleChange} value={id} type='text' placeholder="Enter a number" />
         <button onClick={handleSearch}>Add</button>
      </div>
   );
}
