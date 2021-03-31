import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

import styles from "../styles/NavBar.module.css"

export default function NavBar() {
  const [uri, setUri] = useState("")

  useEffect(() => {
    setUri(window.location.hash)
  })

  // const uri = window.location.hash

  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <Link href="#home">
            <li className={`nav-item ${uri === "#home" ? "active" : ""}`}>
              <Image src="/images/home.svg" height={36} width={36} />
            </li>
          </Link>
          <Link href="#about">
            <li className={`nav-item ${uri === "#about" ? "active" : ""}`}>
              <Image src="/images/user.svg" height={36} width={36} />
            </li>
          </Link>
          <Link href="#interest">
            <li className={`nav-item ${uri === "#interest" ? "active" : ""}`}>
              <Image src="/images/sun.svg" height={36} width={36} />
            </li>
          </Link>
          <Link href="#skills">
            <li className={`nav-item ${uri === "#skills" ? "active" : ""}`}>
              <Image src="/images/computer.svg" height={36} width={36} />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

// export default sideMenu
