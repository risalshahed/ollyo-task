import { useContext } from 'react'
import { DataContext } from '../App'
import Image from './Image';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

export default function Gallery() {
  // use data context
  const {images, setImages} = useContext(DataContext);

  const theImages = images?.map(image =>
    <Image key={image.id} image={image} />
  )

  // handle the images' selection
  const handleImgSelection = imgId => {
    setImages(prevImg =>
      prevImg.map(img =>
        img.id === imgId
        ?
        { ...img, selected: !img.selected }
        :
        img
      )
    );
  };

  // remove selected images' grid-item
  const deleteImgHandler = () => {
    setImages(prevImg =>
      prevImg.filter(img => !img.selected)
    );
  }

  // Sortable with dnd by react-sortable-hoc
  const SortableItem = SortableElement(({ value, index }) => (
    <Image key={value.id} image={value} index={index} onImgSelection={handleImgSelection}/>
  ))

  // conditional rendering of title & selected files
  let title;
  const fileLength = images.filter(item => item.selected).length;

  if(fileLength) {
    if (fileLength === 1) {
      title = `${fileLength} File Selected`
    } else {
      title = `${fileLength} Files Selected`
    }
  } else {
    title = 'Gallery'
  }

  const SortableImages = SortableContainer(({ items }) => {
    return (
      <div>
        <header className='flex justify-between'>
          <h2 className='font-bold text-xl'>{title}</h2>
          <button className={`${fileLength ? 'visible' : 'invisible'} text-red-600 font-semibold`} onClick={deleteImgHandler}>Delete {`${fileLength === 1 ? 'file' : 'files'}`}</button>
        </header>

        <hr />

        <div className="gallery">
          {items?.sort((a, b) => a.position - b.position)
            .map((image, index) =>
              <SortableItem
                key={image.id}
                value={image}
                index={index}
              />
            )
          }
        </div>
      </div>
    )
  })

  const handleSort = ({ oldIndex, newIndex }) => {
    let arr = arrayMove(images, oldIndex, newIndex);    
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      arr[i].position = i;
    }
    setImages(arr);
  }
  
  return (
    <SortableImages items={images} onSortEnd={handleSort} axis='xy' />
  )
}