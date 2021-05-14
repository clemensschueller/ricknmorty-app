import './App.css'
import { useEffect, useState } from 'react'

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
      {characters.map(character => (
        <section>
          <h2>{character.name}</h2>
          <span>{character.status}</span>
        </section>
      ))}
    </div>
  )
}
