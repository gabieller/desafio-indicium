import React, { Component, useState } from "react"
import { HamburgerSpin } from "react-animated-burgers"
import SideMenu from "./SideMenu"
import Image from "next/image"
import styles from "../styles/Header.module.css"

class Header extends Component {
  state = [{ isActive: false }, { isSideMenuOpen: false }]

  toggleButton = () => {
    this.setState(() => {
      return {
        isActive: !this.state.isActive,
        isSideMenuOpen: !this.state.isSideMenuOpen,
      }
    })
  }

  render() {
    return (
      <>
        <nav className={styles.header}>
          <HamburgerSpin
            className={styles.hamburger}
            isActive={this.state.isSideMenuOpen}
            toggleButton={this.toggleButton}
          />
        </nav>
        <SideMenu
          visible={this.state.isSideMenuOpen}
          onClick={this.toggleButton}
        />
      </>
    )
  }
}

export default Header
