"use client"
import Image from "next/image";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import { useState } from "react";
const Links = () => {

    //array of object
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    // for hiding and unhiding menu button
    const [open,setOpen] = useState(false)

    // Temporary
    const session = true;
    const isAdmin = true;

    return (
        <div classname={styles.container}>
        <div className = {styles.links}>
            {   /*map methord applies to array and use to create a new array (element) means each element of links array*/
                links.map((element) => (
                <NavLink item={element} key={element.title}/>
                //<Link href={element.path} key={element.title}>{element.title}</Link>
                ))}

            {session ? (
                <>
                {isAdmin && <NavLink item={{title:"Admin", path: "/admin"}} />}
                <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink item={{ title: "Login", path: "/login"}}/>
            )}
            
        </div>
        <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen(!open)/*setOpen((prev) => !prev))*/} />
        {open==true && (
            <div className={styles.mobileLinks}>
            {links.map((element) => (
                <NavLink item={element} key={element.title} />
            ))}
            </div>
        )}
        </div>
    );
    };
  
  export default Links;