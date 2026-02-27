
const Card = ({ titulo, imagen, parrafo, conocimiento }) => {
  return (
    <div>
      <div className='box'>
        <div className='box__circulo'></div>
        <img className='box__imagen' src={imagen} alt='Foto' />
        <div className='box__contenido'>
          <h2 className='box__titulo'>{titulo}</h2>
          <p className='box__parrafo'>
            {parrafo}
          </p>
          <h3 className='box__conocimiento'>{conocimiento}</h3>
        </div>
      </div>
    </div>
  )
}
export default Card

