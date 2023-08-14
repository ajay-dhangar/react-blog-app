import React from 'react';
import { ContextData } from '../../data/Data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Technology.css';
import ImageSlider from '../home/ImageSlider';
import Footer from '../../component/footer/Footer'

import image1 from '../../data/images/technology/banner.jpg'
import image2 from '../../data/images/technology/banner-1.jpg'
import image3 from '../../data/images/technology/tech.jpg'
import image4 from '../../data/images/technology/banner-2.jpg'
import image6 from '../../data/images/technology/banner-4.jpg'
import image7 from '../../data/images/technology/banner-5.jpg'
import image8 from '../../data/images/technology/banner-6.jpg'
import image9 from '../../data/images/technology/banner-7.jpg'
import image10 from '../../data/images/technology/banner-8.jpg'
import image11 from '../../data/images/technology/banner-9.jpg'
import image12 from '../../data/images/technology/banner-10.jpg'

const images = [
  image1,
  image2,
  image4,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12
];

const Info = () => {
  const [data] = useContext(ContextData);
  return (
    <>
    <div className='techComponent'>
      <h1 className="tech-component-title">Technology</h1>
      <hr className="tech-line" />
      <hr className="tech-line2" />
      <div className="techContainer">
        <div className="tech-Left-Data">
          {data
            .filter((value) => value.category === 'technology')
            .map((val) => {
              return (
                <>
                  <div key={val.id} className="tech-wrapper">
                    <div className="tech-img-container">
                      <Link to={`/article/${val.id}`} className="tech-left-data-link">
                        <img src={val.image} alt="" className="tech-all-image" />
                      </Link>
                    </div>
                    <div className="tech-details">
                      <p className="tech-details-para tech-title"><span>{val.name}</span></p>
                      <p className="tech-desc">{val.details}</p>
                      {/* <div className="movie-data-contain">
                          <p className="movie-details-para IMdb"><b>IMdb:</b> {val.imdb} <b>,</b> </p>
                          <p className="movie-details-release-para release-left">
                            <b>Release:</b> {val.release}
                          </p>
                        </div> */}
                    </div>
                  </div>
                  <hr className="tech-bitween" />
                </>
              )
            })}
        </div>

        <div className="tech-right-data">
          <div className="tech-top-post-heading-wrapper">
            <h2 className="tech-top-post-title">Top Post</h2>
            <div className="top-tech-post-underline"></div>
            <div className="top-tech-post-underline2"></div>
            <div className='tech-top-img'>
              <img src={image3} alt="top img" className='top-tech-img' />
              {/* <ImageSlider images={images} /> */}
            </div>
          </div>
          <div className='tech-main-right-container'>
            {data
              .filter((value) => value.category === 'technology').slice(4, 8)
              .map((val) => {
                return (
                  <>
                    <div className='main-tech-rigth-container'>
                      <div key={val.id} className="right-tech-data-wrapper">
                        <div className='right-tech-img-container'>
                          <Link to={`/article/${val.id}`} className="right-tech-data-link">
                            <img src={val.image} alt="" className="top-tech-post-image" />
                          </Link>
                        </div>
                        <div className="top-tech-post-details-wrapper">
                          <p className="top-tech-post-details top-tech-post-title"><span>{val.name}</span></p>
                          <p className="top-tech-post-details tech-left-details"> {val.details}</p>

                        </div>
                      </div>
                      {/* <hr className="top-post-divider" /> */}
                      <div className='tech-ads-container'>
                        <div className="tech-ads-box ads-1">Advertisement</div>
                      </div>
                    </div>
                  </>
                )
              })}
          </div>
          
        </div>

        <div className='tech-ads-container2'>
            <div className="tech-ads-box-2 tech-ads-2">Advertisement</div>
          </div>
      </div>
    </div>
  </>
  );
};

const Technology = () => {
  return (
    <>
      <div className="MainContainer">
        <ImageSlider images={images} />
        <div className="info-data">
          <Info />
        </div>
      </div>
      <Footer />
    </>
  )
};



export default Technology;
