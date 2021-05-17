import './App.css'
import { useEffect, useState } from 'react'
import Card from './Card'

export default App

function App() {
  const [characters, setCharacters] = useState([])
  const url = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [])

  console.log(characters)
  return (
    <div className="App">
      {characters.map(
        ({ name, species, image, id, gender, status, origin, location }) => (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            origin={origin.name}
            location={location.name}
          />
        )
      )}
    </div>
  )
}
