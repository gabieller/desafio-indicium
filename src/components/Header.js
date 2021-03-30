import React, { Component, useState } from "react"
import { HamburgerSpin } from "react-animated-burgers"
import Image from "next/image"
import styles from "../styles/Header.module.css"

class Header extends Component {
  state = [{ isActive: false }]

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    return (
      <>
        <nav className={`${styles.header}`}>
          <div>
            {/* <Image
              src="/images/menu.svg"
              width={36}
              height={36}
              alt="Hamburger Menu"
            /> */}
          </div>
          ISSO é UMA NAVBAR
        </nav>
        <HamburgerSpin
          isActive={this.state.isActive}
          toggleButton={this.toggleButton}
        />
      </>
    )
  }
}

export default Header
