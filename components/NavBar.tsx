import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/NavBar.module.scss'

function NavBar() {
 return (
  <nav className={navStyles.nav}>
   <ul>
    <li>
     <Link href='/'>HOME</Link>
    </li>
    <li>
     <Link href='/products'>PRODUCTS</Link>
    </li>
    <li>
     <Link href='/about'>ABOUT</Link>
    </li>
   </ul>
  </nav>
 )
}

export default NavBar
