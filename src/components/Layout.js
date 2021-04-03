import React from "react"
import Head from "next/head"
// import GoogleAnalytics from "../components/GoogleAnalytics"
import Header from "../components/Header"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

// import "../styles/layout.css"

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Gabriela Silva Eller</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WB61H6RT3L"
        />
      </Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-WB61H6RT3L');
`,
        }}
      />
      <div>
        <Header />
        {/* <NavBar /> */}
        {props.children}
      </div>
      <Footer />
    </>
  )
}
