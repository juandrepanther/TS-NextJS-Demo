import styles from '../styles/Layout.module.scss'
import NavBar from './NavBar'
import { IAuxProps } from '../interfaces/IAuxProps'

function Layout({ children }: IAuxProps) {
 return (
  <>
   <NavBar />
   <div className={styles.container}>
    <main className={styles.main}>{children}</main>
   </div>
  </>
 )
}

export default Layout
