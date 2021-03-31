import React from "react"
import Image from "next/image"

import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social__logos}>
      <a href="https://github.com/gabieller" target="_blank">
        <Image src="/images/github.svg" width={24} height={24} />
      </a>
      <a href="https://www.linkedin.com/in/gabrielaeller/" target="_blank">
        <Image src="/images/linkedin.svg" width={24} height={24} />
      </a>
      <a href="mailto:gabieller@gmail.com?subject=Hello Gabriela" target="_blank">
        <Image src="/images/mail.svg" width={24} height={24} />
      </a>
      </div>
      <div className={styles.copyright}>
        <span>
          Design & Contrução por <br/> Gabriela Silva Eller
        </span>
      </div>
    </footer>
  )
}
