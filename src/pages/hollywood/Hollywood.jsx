import React from 'react';
import { ContextData } from '../../data/Data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Hollywood.css';
import ImageSlider from '../home/ImageSlider';
import Footer from '../../component/footer/Footer'

import img from '../home/img/home.jpg'
import image1 from '../../data/images/hollywood/wallpaper.jpg'
import image2 from '../../data/images/hollywood/wallpaper-1.jpg'
import image3 from '../../data/images/hollywood/Avengers-Endgame.jpg'
import image4 from '../../data/images/hollywood/wallpaper-2.jpg'
import image5 from '../../data/images/hollywood/The-Dark-Knight.jpg'
import image6 from '../../data/images/hollywood/wallpaper-3.jpg'
import image7 from '../../data/images/hollywood/wallpaper-4.jpg'
import image8 from '../../data/images/hollywood/wallpaper-5.jpg'

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
      <div className='hollyComponent'>
        <h1 className="holly-component-title">Hollywood</h1>
        <hr className="holly-line" />
        <hr className="holly-line2" />
        <div className="hollyContainer">
          <div className="holly-Left-Data">
            {data
              .filter((value) => value.category === 'hollywood')
              .map((val) => {
                return (
                  <>
                    <div key={val.id} className="holly-wrapper">
                      <div className="holly-img-container">
                        <Link to={`/article/${val.id}`} className="holly-left-data-link">
                          <img src={val.image} alt="" className="holly-all-image" />
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
                    <hr className="holly-bitween" />
                  </>
                )
              })}
          </div>

          <div className="holly-right-data">
            <div className="holly-top-post-heading-wrapper">
              <h2 className="holly-top-post-title">Top Post</h2>
              <div className="top-holly-post-underline"></div>
              <div className="top-holly-post-underline2"></div>
              <div className='holly-top-img'>
                <img src={img} alt="top img" className='top-holly-img' />
                {/* <ImageSlider images={images} /> */}
              </div>
            </div>
            <div className='holly-main-right-container'>
              {data
                .filter((value) => value.category === 'hollywood').slice(4, 8)
                .map((val) => {
                  return (
                    <>
                      <div className='main-holly-rigth-container'>
                        <div key={val.id} className="right-holly-data-wrapper">
                          <div className='right-holly-img-container'>
                            <Link to={`/article/${val.id}`} className="right-holly-data-link">
                              <img src={val.image} alt="" className="top-holly-post-image" />
                            </Link>
                          </div>
                          <div className="top-holly-post-details-wrapper">
                            <p className="top-holly-post-details top-holly-post-title"><span>{val.name}</span></p>
                            <p className="top-holly-post-details holly-left-details"> {val.desc}</p>
                          </div>
                        </div>
                        {/* <hr className="top-post-divider" /> */}
                        <div className='holly-ads-container'>
                          <div className="holly-ads-box ads-1">Advertisement</div>
                        </div>
                      </div>
                    </>
                  )
                })}
            </div>
            <div className='holly-ads-container2'>
              <div className="holly-ads-box-2 holly-ads-2">Advertisement</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hollywood = () => {
  return (
    <>
      <div className="main-holly-Container">
        <ImageSlider images={images} />
        <div className="info-data">
          <Info />
        </div>
      </div>
      <Footer />
    </>
  )
};



export default Hollywood;
