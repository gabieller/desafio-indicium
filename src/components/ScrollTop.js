import React, { Component } from "react"


class ScrollTop extends Component () {
  state = [
    {showScroll: false}
  ]

useEffectOnlyOnce(() => {
const checkScrollTop = () => {
  if (!showScroll && window.pageYOffset > 40) {
      this.setState( {showScrol:true} )

  } else {
    this.setState( {showScrol: false} )
  }
}
window.addEventListener("scroll", checkScrollTop)
return () => {
  window.removeEventListener("scroll", checkScrollTop)
}

  })


  render () {
    return (
      <div></div>
    )
  }
}

export default ScrollTop