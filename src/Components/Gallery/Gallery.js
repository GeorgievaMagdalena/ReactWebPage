import React from 'react'
import Pictures from './Pictures'
import './gallery.css'

const Gallery = () => {

  return (
    <>
      <br />
      <h3 style={{ textAlign: "center" }}>Some of my favourite pictures</h3>
      <br />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px", textAlign: "center" }}>
        <Pictures />
      </div>
      <br />

    </>
  )
  
}

export default Gallery