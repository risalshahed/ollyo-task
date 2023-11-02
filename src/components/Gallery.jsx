import { useContext } from 'react'
import { DataContext } from '../App'
import Image from './Image';

export default function Gallery() {
  const images = useContext(DataContext);
  // console.log(images);

  return (
    <div>
      {/* <h2>Gallery</h2> */}
      <div className="gallery">
        {
          images?.map(image => 
            <Image key={image.id} image={image} />
          )
        }
      </div>
    </div>
  )
}