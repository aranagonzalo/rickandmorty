import {Link} from "react-router-dom";
import logo from '../../assets/rym_logo.png';
import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav({onSearch}) {

   

   return (
      <div className={style.navbar}>
         <Link className={style.logoLink} to="/">
            <img className={style.logo} src={logo} alt="Logo" />
         </Link>
         <Link to="/home"><button className={style.button}>Home</button></Link>
         <Link to="/favorites"><button className={style.button}>Favorites</button></Link>
         <Link to="/about"><button className={style.button}>About</button></Link>
         <SearchBar onSearch={onSearch}/>
      </div>
   );
}

