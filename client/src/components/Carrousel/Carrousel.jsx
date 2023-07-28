import React from 'react'
import bannerPC from '../assets/bannerPC.jpg'
import bannerPink from '../assets/bannerPink.jpg'
import bannerLav from '../assets/bannerLav.jpg'

export const Carrousel = () => {

  return (
    <div
      style={{ maxHeight: '400px' }}
      id='carouselExampleIndicators'
      className='carousel slide overflow-hidden'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to='0'
          className='active'
        ></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src={bannerPC}
            className='d-block w-100'
            style={{ maxHeight: '400px' }}
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src={bannerPink}
            className='d-block w-100'
            style={{ maxHeight: '400px' }}
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src={bannerLav}
            className='d-block w-100'
            style={{ maxHeight: '400px' }}
            alt='...'
          />
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  )
}
