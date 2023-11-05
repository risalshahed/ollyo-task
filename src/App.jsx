import { createContext, useEffect, useState } from 'react'
import './App.css'
<<<<<<< HEAD
import Gallery from './components/Gallery';

export const DataContext = createContext();

function App() {
  const [images, setImages] = useState([]);
=======
import Home from './components/Home'
import Header from './components/Shared/Header'

export const DataContext = createContext([]);

function App() {
  const [images, setImages] = useState([]);
  // const [isChecked, setIsChecked] = useState([]);

>>>>>>> 6fbe970e8b262e38529d9bc5430990efe45df9f4

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setImages(data))
  }, [])

  return (
<<<<<<< HEAD
    <DataContext.Provider value={{ images, setImages }}>
      <div className='app'>
        <Gallery />
=======
    // <DataContext.Provider value={{value: [images, setImages]}}>
    <DataContext.Provider value={[images, setImages]}>
      <div className='app'>
        <Header />
        <Home />
>>>>>>> 6fbe970e8b262e38529d9bc5430990efe45df9f4
      </div>
    </DataContext.Provider>
  )
}

export default App