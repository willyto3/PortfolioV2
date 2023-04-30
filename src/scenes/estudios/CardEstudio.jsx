

const CardEstudio = ({ institucion, estudio, fecha, fondo, grado }) => {
  return (
    <div>
      <div className='card'>
        <div className='card__text'>
          <div
            className='card__portada'
            style={{ backgroundImage: `url(${fondo})` }}
          ></div>
          <div className='card__title-total'>
            <div className='card__institucion'>{institucion}</div>
            <h2 className='card__estudio'>{estudio}</h2>
            <h4 className='card__grado'>{grado}</h4>
            <div className='card__fecha'>{fecha}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardEstudio


