import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';

const Carosel = () => {

  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px'
  }
  const slideImages = [
    {
      img: banner1,
      caption: 'Slide 1'
    },
    {
      img: banner2,
      caption: 'Slide 2'
    },
  ];

  return (
    <>
      <div>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.img})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  )
}

export default Carosel
