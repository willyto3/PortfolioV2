// Importacion de Styled del Styled-Components
// import styled from 'styled-components'
// // Importacion de Componentes
// import Presentacion from '../components/Presentacion'
import Image from 'mui-image'

const Home = () => {
  return (
    <div className='container'>
      <div className='box grid'>
        <div className='box__columna'>
          
        </div>
        <div className='box__columna'>
          {/* <Presentacion /> */}
          <Image
            src='WillyNegro.png'
            height='50vh'
            width='50%'
            fit='cover'
            duration={3000}
            easing='cubic-bezier(0.7, 0, 0.6, 1)'
            showLoading={false}
            errorIcon={true}
            distance='100px'
            shiftDuration={900}
            bgColor='inherit'
          />
        </div>
      </div>
    </div>
  )
}
export default Home

// const Wrapper = styled.section`
//   img {
//     width: 35rem;
//   }

//   .box {
//     grid-template-columns: 1fr 2fr;
//     align-items: center;
//     justify-items: center;

//     @media (max-width: ${({ theme }) => theme.media.tablet}),
//       (max-width: ${({ theme }) => theme.media.movil}) {
//       grid-template-columns: 1fr;
//     }
//   }
// `
