import React from 'react'
import { HashLink } from "react-router-dom-hash-link"

function A() {
  return (
    <div>
        <main>
            <HashLink to={"/#Home"}>Home</HashLink>
            <Link to={"/#contact"}>Contact</Link>
        </main>


    </div>
  )
}

export default A