import React, { useState, useEffect } from "react"

export default function Header() {
  const [uri, setUri] = useState(0)

  useEffect(() => {
    setUri(window.pageYOffset)
  })


  return (
    <div className="header">
      {uri > 30 ? (
        <div></div>
      ) : (
        <a href="/files/cv.pdf" download="curriculum.pdf">
          <button className="btn">CURRÍCULO</button>
        </a>
      )}
    </div>
  )
}
