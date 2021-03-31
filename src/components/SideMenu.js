import React from "react"
import Link from "next/link"

import styles from "../styles/sideMenu.module.css"

export default function SideMenu({ visible }) {
  return (
    <div className={styles.overlay}>
      <div className={`${visible ? styles.open : styles.sideMenu}`}>
        <ul className={styles.text}>
          <li>
            <Link href="/">
              <h1>HOME</h1>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h1>SOBRE</h1>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h1>INTERESSES</h1>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h1>SKILLS</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

// export default sideMenu
