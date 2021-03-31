import React from "react"
import Head from "next/head"
// import Header from "../components/Header"
import Footer from "../components/Footer"

import styles from "../styles/Layout.module.css"

//HEADER
//CONTENT
//FOOTER

export default function Layout(props) {
  return (
    <>
          <Head>
          <title>Gabriela Silva Eller</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      {/* <Header /> */}
      <div className={styles.main}>{props.children}</div>
      <Footer />
    </>
  )
}
