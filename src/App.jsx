import { createContext, useEffect, useState } from 'react'
import './App.css'
import Gallery from './components/Gallery';

export const DataContext = createContext();

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setImages(data))
  }, [])

  return (
    <DataContext.Provider value={{ images, setImages }}>
      <div className='app'>
        <Gallery />
      </div>
    </DataContext.Provider>
  )
}

export default App