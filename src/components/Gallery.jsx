import { useContext } from 'react'
import { DataContext } from '../App'
import Image from './Image';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

export default function Gallery() {
  const [images, setImages] = useContext(DataContext);
  // const {value} = useContext(DataContext);
  // const [images, setImages] = value;
  console.log(images);

  const theImages = images?.map(image => <Image key={image.id} image={image} />)

  // console.log(theImages);

  const SortableItem = SortableElement(({ image, index }) => (
    <Image key={image.id} image={image} index={index} />
  ))

  // console.log(SortableItem);

  const SortableImages = SortableContainer(({ images }) => {
    // console.log(images);

    return (
      <div className="gallery">
        {images?.sort((a, b) => a.position - b.position)
          .map((image, index) => (
            <SortableItem
              key={image.id}
              value={image}
              index={index}
            />
          ))
        }
      </div>
    )
  })

  // setImages(1);
  // console.log(images);

  console.log(SortableImages);

  const handleSort = ({ oldIndex, newIndex }) => {
    let arr = arrayMove(theImages, oldIndex, newIndex);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i].position = i;
    }
    setImages(arr);
  }
  
  return (
    <>
      {/* <div className="gallery">
        {theImages}
      </div> */}
      <SortableImages items={theImages} onSortEnd={handleSort} axis='xy' />
    </>
  )
}