import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p> We create digital ideas that are bigger, bolder, braver and better.
           We create digital ideas that are bigger, bolder, braver and better.
           We create digital ideas that are bigger, bolder, braver and better.</p>
        <div className={styles.boxes}>

          <div className={styles.box}>
            <h2>10 k+</h2>
            <p>Year of experiance</p>
          </div>

          <div className={styles.box}>
            <h2>10 k+</h2>
            <p>Year of experiance</p>
          </div>

          <div className={styles.box}>
            <h2>10 k+</h2>
            <p>Year of experiance</p>
          </div>

        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src = "/about.png" alt="Picture of the author" fill className={styles.img} />
      </div>
    </div>
    )
  };
  
  export default AboutPage;