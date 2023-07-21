import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

export default function Form({login}) {

const  [userData, setUserData] = useState({
    email: '',
    password: '',
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    setUserData({...userData, [property]: value});
    setErrors(validation({...userData, [property]: value}));
}

   return (
    <div className={style.container}>
      <form className={style.form} onSubmit={() => login(userData)}>
        <div className={style.inputBox}>
            <label className={style.label} htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={handleChange} value={userData.email}/>
            {errors.email && (<p className={style.danger}>{errors.email}</p>)}
        </div>
        <br />
        <div className={style.inputBox}>
            <label className={style.label} htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={handleChange} value={userData.password}/>
            {errors.password && (<p className={style.danger}>{errors.password}</p>)}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
   );
}