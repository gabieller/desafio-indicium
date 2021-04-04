import React, { useState, useEffect } from "react"
import Link from "next/link"
import Router from "next/router"
import Image from "next/image"

export default function Header() {
  const [uri, setUri] = useState("")
  const [offset, setOffset] = useState("0")
  const [visibility, setVisibility] = useState("")

  useEffect(() => {
    setUri(window.location.hash)
  })

  const handleScroll = () => {
    setOffset(window.pageYOffset)
    setVisibility(
      window.pageYOffset > 300 ? "scrolled-nav" : "null"
    )
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  Router.onRouteChangeComplete = () => {
    setTimeout(() => {
      if (location.hash) location = location
    }, 0)
  };

  return (
    <div className="header px-0 px-md-5">

      <nav className={`navbar fixed-top justify-content-start ${visibility}`}>
        <ul className="d-flex flex-inline px-0 px-md-3">
          <Link href="#home">
            <li className={`nav-item px-2 py-2 px-md-3  py-0 ${uri === "#home" ? "active" : ""}`}>
              <Image src="/images/home.svg" height={36} width={36} />
            </li>
          </Link>

          <Link href="#about">
            <li className={`nav-item px-2 py-2 px-md-3 py-0 ${uri === "#about" ? "active" : ""}`}>
              <Image src="/images/user.svg" height={36} width={36} />
            </li>
          </Link>
          <Link href="#experiences">
            <li
              className={`nav-item px-2 py-2 px-md-3 py-0 ${
                uri === "#experiences" ? "active" : ""
              }`}
            >
              <Image src="/images/briefcase.svg" height={36} width={36} />
            </li>
          </Link>
          <Link href="#skills">
            <li
              className={`nav-item px-2 py-2 px-md-3 py-0 ${uri === "#skills" ? "active" : ""}`}
            >
              <Image src="/images/computer.svg" height={36} width={36} />
            </li>
          </Link>
        </ul>
      </nav>
      {offset < 300 ? (
        <div className="p-2">
          <a href="/files/cv.pdf" download="curriculum.pdf">
            <button className="btn px-3 py-3 ">CURRÍCULO</button>
          </a>
        </div>
      ) : null}
    </div>
  )
}
