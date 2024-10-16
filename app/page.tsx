import React from 'react';
import Link from 'next/link';
import styles from './style.module.css'

export default function Home() {
  return (
   <div> <div > <div><nav className={styles.navbar}> <ul className={styles.ul} > <li className={styles.li} > <Link href="/about" target = "_blank"> about page </Link> </li>
    <li className={styles.li} ><Link href="/contact" target = "_blank"> contact page</Link> </li>
    <li className={styles.li} ><Link href="/servicess" target="_blank"> service page </Link></li>
    <li className={styles.li} ><Link href="/skill" target="_blank"> skill page </Link></li></ul></nav></div></div>
    <div className={styles.rollnumber}> <p> Assignment1 by 00106157 <br />
    Name : Hina </p> 

       
    </div> <div>
    <footer className={styles.footer}>
     <span>hello</span> <span>i'm a footer</span><p>&copy;2024 Your business. All rights reserved.</p>

    </footer></div></div>
    
  )
}
