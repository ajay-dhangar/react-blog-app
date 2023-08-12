import React from 'react';
import { ContextData } from '../../data/Data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Bollywood.css';
import ImageSlider from '../home/ImageSlider';
import Footer from '../../component/footer/Footer'

import image1 from './img/check.jpg'
import image2 from './img/wallpaper-10.jpg'
import image3 from './img/kala.jpg'
import image4 from './img/player.jpg'
import image5 from './img/War-.jpg'
import image6 from './img/brahmastra.jpg'
import image7 from './img/don2.jpg'
import image8 from './img/War-.jpg'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const Info = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div className='bollyComponent'>
        <h1 className="bolly-component-title">Hollywood</h1>
        <hr className="bolly-line" />
        <hr className="bolly-line2" />
        <div className="bollyContainer">
          <div className="bolly-Left-Data">
            {data
              .filter((value) => value.category === 'bollywood')
              .map((val) => {
                return (
                  <>
                    <div key={val.id} className="bolly-wrapper">
                      <div className="bolly-img-container">
                        <Link to={`/article/${val.id}`} className="bolly-left-data-link">
                          <img src={val.image} alt="" className="bolly-all-image" />
                        </Link>
                      </div>
                      <div className="holly-details">
                        <p className="holly-details-para holly-title"><span>{val.name}</span></p>
                        <p className="holly-desc">{val.desc}</p>
                        <div className="holly-data-contain">
                          <p className="holly-details-para IMdb"><b>IMdb:</b> {val.imdb} <b>,</b> </p>
                          <p className="holly-details-release-para release-left">
                            <b>Release:</b> {val.release}
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="bolly-bitween" />
                  </>
                )
              })}
          </div>

          <div className="bolly-right-data">
            <div className="bolly-top-post-heading-wrapper">
              <h2 className="bolly-top-post-title">Top Post</h2>
              <div className="top-bolly-post-underline"></div>
              <div className="top-bolly-post-underline2"></div>
              <div className='bolly-top-img'>
                <img src={image3} alt="top img" className='top-bolly-img' />
                {/* <ImageSlider images={images} /> */}
              </div>
            </div>
            <div className='bolly-main-right-container'>
              {data
                .filter((value) => value.category === 'bollywood').slice(4, 9)
                .map((val) => {
                  return (
                    <>
                      <div className='main-bolly-rigth-container'>
                        <div key={val.id} className="right-bolly-data-wrapper">
                          <div className='right-bolly-img-container'>
                            <Link to={`/article/${val.id}`} className="right-bolly-data-link">
                              <img src={val.image} alt="" className="top-bolly-post-image" />
                            </Link>
                          </div>
                          <div className="top-bolly-post-details-wrapper">
                            <p className="top-bolly-post-details top-bolly-post-title"><span>{val.name}</span></p>
                            <p className="top-bolly-post-details bolly-left-details"> {val.desc}</p>

                          </div>
                        </div>
                        {/* <hr className="top-post-divider" /> */}
                        <div className='bolly-ads-container'>
                          <div className="bolly-ads-box ads-1">Advertisement</div>
                        </div>
                      </div>
                    </>
                  )
                })}
            </div>            
          </div>

          <div className='bolly-ads-container2'>
              <div className="bolly-ads-box-2 bolly-ads-2">Advertisement</div>
            </div>
        </div>
      </div>
    </>
  );
};

const Bollywood = () => {
  return (
    <>
      <div className="main-bolly-Container">
        <ImageSlider images={images} />
        <div className="info-data">
          <Info />
        </div>
      </div>
      <Footer />
    </>
  )
};



export default Bollywood;
