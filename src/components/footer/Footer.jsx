import style from "./footer.module.css"
//arrow function
const footer = () => {
    return (
      <div className={style.container}>
        <div className={style.logo}>Logo</div>
        <div className={style.text}>@all right reserved</div>
      </div>
    );
  };
  
  export default footer;