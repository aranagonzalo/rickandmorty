import gonzalo from '../../assets/gonzalo.png';
import style from './About.module.css';

export default function About() {
    return (
        <>
            <div className={`${style.container} row`}>
                <div className={`${style.left} col-lg-6`}>
                    <img src={gonzalo} alt="profile" />
                </div>
                <div className={`${style.right} col-lg-6`}>
                    <h1>About me!</h1>
                    <p>My name is Gonzalo Arana, and this is my Rick & Morty-based application. It was made during the Soy Henry bootcamp in July 2023. I hope you like it a lot!</p>
                </div>
            </div>
        </>
    )
}