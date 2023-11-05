<<<<<<< HEAD
export default function Image({ image, onImgSelection }) {
  const {id, img, selected} = image;

  return (
    <div className='img-container relative cursor-pointer group'>
      <img src={img} alt={`img-${id}`} className={`${selected ? 'brightness-90' : 'group-hover:brightness-50'} ${selected ? 'bg-black/10' : 'group-hover:bg-black/50'}`} />{selected}
      <input
        type="checkbox"
        className={`input scale-150 cursor-pointer absolute top-1 left-0 z-2 m-6 ${selected ? 'visible' : 'invisible group-hover:visible'}`}
        checked={selected}
        onChange={() => onImgSelection(id)}
=======
import { useState } from 'react'

export default function Image({ image }) {
  const {id, img} = image;

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='img-container cursor-pointer group'>
      {/* class="mt-3 invisible peer-checked:visible" */}
      <img src={img} alt={`img-${id}`} className={`${isChecked ? 'brightness-90' :  'group-hover:brightness-50'} ${isChecked ? 'bg-black/10' :  'group-hover:bg-black/50'}`} />
      <input
        type="checkbox"
        className={`input absolute top-1 left-0 z-2 m-6 ${isChecked ? 'visible' : 'invisible group-hover:visible'}`}
        onChange={handleInputChange}
        
>>>>>>> 6fbe970e8b262e38529d9bc5430990efe45df9f4
      />
    </div>
  )
}