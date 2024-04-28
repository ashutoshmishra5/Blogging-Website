import Image from "next/image";
import style from "./singlePost.module.css";


const SinglePostPage = () => {
    return (
      <div className={style.container}>
        <div className={style.imgContainer}>
        <Image
        className={style.img} 
        src="https://images.indianexpress.com/2024/03/Electoral-bonds-feature.jpg?w=640" 
        alt="" fill/>
        </div>

        <div className={style.textContainer}>
          <h1 className={style.title}>Title</h1>
          <div className={style.detail}>
            <Image className={style.avatar} src="/noavatar.png" alt="" width={50} height={50} />
            <div className={style.detailText}>
              <span className={style.detailTitle}>Author</span>
              <span className={style.detailValue}>Terry Jefferson</span>
            </div>
            <div className={style.detailText}>
              <span className={style.detailTitle}>Published</span>
              <span className={style.detailValue}>01.01.2024</span>
            </div>
          </div>
          
         <div className={style.content}>
        The BJP needed to accommodate the HAM(S) and the RLM as well.

Kushwaha seems to have suffered a loss due to the return of Nitish – who had shifted to the Mahagathbandhan camp in August 2022 – back to the NDA fold in January this year.

In the 2014 polls, Kushwaha’s then party RLSP had won three seats it contested as part of the NDA. But he had then got more weightage in the NDA because Nitish had parted ways with it.

Kushwaha’s space in the NDA has shrunk further following the rise of state BJP chief Samrat Choudhary, the deputy CM, who also belongs to the Kushwaha community.


          </div>
        </div>
      

      </div>
    );
  };
  
  export default SinglePostPage;