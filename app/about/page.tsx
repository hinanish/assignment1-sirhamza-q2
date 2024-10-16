import React from 'react'
import aboutcss from './about.module.css'
import Link from "next/link"
export default function About() {
  return (
    <div> <h1 className={aboutcss.h1css}> About page</h1> <span className={aboutcss.aboutcss}>
   <Link href="/about/review" target='_blank'> <a>i contain nested route for review </a> </Link>
    </span>  <footer className={aboutcss.footer}>
     <span>hello</span> <span>i'm a footer</span><p>&copy;2024 Your business. All rights reserved.</p>

    </footer></div>
    
  )
}
