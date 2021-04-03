import React, { useState, useEffect, useEffectOnlyOnce } from "react"
import Link from "next/link"
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

  console.log(offset)

  return (
    <div className="header px-5 py-3">
      <nav className={`navbar fixed-top justify-content-start ${visibility}`}>
        <ul className="d-flex flex-inline">
          <Link href="#home">
            <li className={`nav-item px-3 py-0 ${uri === "#home" ? "active" : ""}`}>
              <Image src="/images/home.svg" height={36} width={36} />
            </li>
          </Link>

          <Link href="#about">
            <li className={`nav-item px-3 py-0 ${uri === "#about" ? "active" : ""}`}>
              <Image src="/images/user.svg" height={36} width={36} />
            </li>
          </Link>
          <Link href="#experiences">
            <li
              className={`nav-item px-3 py-0 ${
                uri === "#experiences" ? "active" : ""
              }`}
            >
              <Image src="/images/briefcase.svg" height={36} width={36} />
            </li>
          </Link>
          <Link href="#skills">
            <li
              className={`nav-item px-3 py-0 ${uri === "#skills" ? "active" : ""}`}
            >
              <Image src="/images/computer.svg" height={36} width={36} />
            </li>
          </Link>
        </ul>
      </nav>
      {offset < 300 ? (
        <div>
          <a href="/files/cv.pdf" download="curriculum.pdf">
            <button className="btn px-3 py-3 ">CURRÍCULO</button>
          </a>
        </div>
      ) : null}
    </div>
  )
}
