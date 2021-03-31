import React from "react"
import Link from "next/link"
import Image from "next/image"

import styles from "../styles/NavBar.module.css"

export default function NavBar({ visible }) {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.text}>
          <Link href="#home">
            <li>
              <Image src="/images/home.svg" height={24} width={24} />
            </li>
          </Link>
          <Link href="#about">
            <li>
              <Image src="/images/user.svg" height={24} width={24} />
            </li>
          </Link>
          <Link href="#interest">
            <li>
              <Image src="/images/sun.svg" height={24} width={24} />
            </li>
          </Link>
          <Link href="#skills">
            <li>
              <Image src="/images/computer.svg" height={24} width={24} />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

// export default sideMenu
