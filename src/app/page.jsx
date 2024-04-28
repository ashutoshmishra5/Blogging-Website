import Image from "next/image";
import styles from "./home.module.css"


const Home = () => {
  //throw new Error('Error in Home');
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Throughts Agency</h1>
        <p className={styles.desc}>
          jvhurihvvvvvvvvvv vihvtg tuibniu5v 
          5bhujgnbrg btbh5uhbbntb
        </p>
        <div className={styles.button}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill />
      </div>
    </div>
  );
};

export default Home;