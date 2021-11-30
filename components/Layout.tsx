import React, {  ReactNode } from 'react'
import styles from '../styles/Layout.module.scss'

interface AuxProps {
 children: ReactNode
}

function Layout({ children }: AuxProps) {
 return (
  <div className={styles.container}>
   <main className={styles.main}>{children}</main>
  </div>
 )
}

export default Layout
