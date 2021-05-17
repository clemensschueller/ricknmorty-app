import './Card.css'
import React, { useState } from 'react'

export default function Card({
  name,
  species,
  image,
  status,
  origin,
  location,
  gender,
}) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section className="Card">
      <h2 className="Card__heading">{name}</h2>
      <img className="Card__image" src={image} alt="" />
      <button
        className={isVisible ? 'btn' : 'btn active'}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide Infos' : 'Click 2 See Infos!'}
      </button>
      {isVisible && (
        <>
          <span>Species: {species}</span>
          <span>Gender: {gender}</span>
          <span>Status: {status}</span>
          <span>Origin: {origin}</span>
          <span>Location: {location}</span>
        </>
      )}
    </section>
  )
}

// <dl hidden={!isVisible}></dl>
