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
      />
    </div>
  )
}