"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Router } from "next/router";
import style from "./navigationtest.module.css"

const navigationTextPage = () => {

    const router = useRouter() /*useRouter imp*/
    const pathname = usePathname()
    const searchParams = useSearchParams()

  // js for js tutorial
  var value = 0;
  button = getElementById("incrementButton");

  function increase() {
    value += 1;
    button.innerHTML = value;
  }

  function reset() {
    value = 0;
    button.innerHTML = value;
  }







    const q = searchParams.get("q")

    console.log(q)

    const handleClick = ()=>{
      console.log("clicked")
      router.forward() /*history unrecorded by using .replace*/
    }
    return (
<div>
      <div>
        <Link href="/" prefetch={false} >click here</Link>
        <button onClick={handleClick}>Write and Redirect</button>
      </div>


    <div className={style.container}>
      <h2>JS simple function.</h2>
      <button id="incrementButton" className={style.btn} onClick="increase()">0</button>
      <button id="resetButton" className={style.btn} onClick="reset()">reset</button>
    </div>
</div>
    );
  };
  
  export default navigationTextPage;