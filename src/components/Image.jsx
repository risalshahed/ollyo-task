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
        
      />
    </div>
  )
}