import Link from "next/link";
import style from "./postCard.module.css";
import Image from "next/image";

const postCard = () => {
    return (
      <div className={style.container}>
        <div className={style.top}>
            <div className={style.imgContainer}>
                <Image src="/post.png" alt="" fill className={style.img} />
            </div>
            <span className={style.date}>01.01.2024</span>
        </div>
        <div className={style.bottom}>
            <h1 className={style.title}>Title</h1>
            <p className={style.desc}>The BJP needed to accommodate the HAM(S) and the RLM as well. Kushwaha seems to have suffered a loss due to the return of Nitish – who had shifted to the Mahagathbandhan camp in August 2022 – back to the NDA fold in January this year. In the 2014 polls, Kushwaha’s then party RLSP had won three seats it contested as part of the NDA. But he had then got more weightage in the NDA because Nitish had parted ways with it. Kushwaha’s space in the NDA has shrunk further following the rise of state BJP chief Samrat Choudhary, the deputy CM, who also belongs to the Kushwaha community.</p>
            <Link href="/blog/post" className={style.link}>READ MORE</Link>
        </div>
      </div>
    );
  };
  
  export default postCard;