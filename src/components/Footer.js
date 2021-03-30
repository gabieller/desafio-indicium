import React from "react"
import Image from "next/image"

import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src="/images/github.svg" width={24} height={24} />
      <Image src="/images/linkedin.svg" width={24} height={24} />
      <Image src="/images/mail.svg" width={24} height={24} />
    </footer>
  )
}
