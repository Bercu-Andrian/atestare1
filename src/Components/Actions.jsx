import question from "../assets/question.svg";
import styles from "../Components/Actions.module.css";
import Afisare from "./cartonas";
//import images from "../assets";


function Actions({onClick}){

return (
<div className={styles.container} >
<button className={styles.button}onClick={Afisare} >
    <img  className={styles.image}src={question} />
</button>
<button className={styles.button} onClick={Afisare}>
    <img  className={styles.image}src={question} />
</button>
<button className={styles.button}onClick={Afisare} >
    <img   className={styles.image}src={question} />
</button>
<button className={styles.button} onClick={Afisare}>
    <img  className={styles.image}src={question} />
</button>
<button className={styles.button} onClick={Afisare}>
    <img  className={styles.image}src={question} />
</button>
<button className={styles.button} onClick={Afisare}>
    <img  className={styles.image}src={question} />
</button>
<button className={styles.button} onClick={Afisare}>
    <img  className={styles.image}src={question} />
</button>
<button className={styles.button} onClick={Afisare}>
    <img className={styles.image}src={question} />
</button>
<button className={styles.button} onClick={Afisare}>
    <img  className={styles.image}src={question} />
</button>
<button className={styles.button} onClick={Afisare}>
    <img  className={styles.image} src={question} />
</button>


</div>

)

}

export default Actions;