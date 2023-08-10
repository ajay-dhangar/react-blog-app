import React from 'react';
import { ContextData } from '../../data/Data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Fitness.css';
import ImageSlider from '../home/ImageSlider';
import Footer from '../../component/footer/Footer'
import './Fitness.css'
import image1 from './img/img-1.jpg'
import image2 from './img/img-2.jpg'
import image3 from '../../data/images/fitness/banner.jpg'
import image4 from './img/img-4.jpg'
import image5 from './img/img-3.jpg'

const images = [
  image1,
  image2,
  image4,
  image5,
];

const Info = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div className='bollywoodComponent'>
        <h1 className="component-title">Fitness</h1>
        <hr className="line" />
        <hr className="line2" />
        <div className="BollywoodContainer">
          <div className="BollywoodData">
            <div className="left-data">
              {data
                .filter((value) => value.category === 'fitness')
                .map((val) => {
                  return (
                    <>
                      <div key={val.id} className="bolly-wrapper">
                        <div className="img-container">
                          <Link to={`/article/${val.id}`} className="left-data-link">
                            <img src={val.image} alt="" className="food-all-image" />
                          </Link>
                        </div>
                        <div className="movie-details">
                          <p className="movie-details-para bolly-title"><span style={{ color: 'orangered', fontSize: '28px' }}>{val.name}</span></p>
                          <p className="desc">{val.details}</p>
                          {/* <div className="movie-data-contain">
                            <p className="movie-details-para IMdb"><b>IMdb:</b> {val.imdb} <b>,</b> </p>
                            <p className="movie-details-release-para release-left">
                              <b>Release:</b> {val.release}
                            </p>
                          </div> */}
                        </div>
                      </div>
                      <hr className="bitween" />
                    </>
                  )
                })}
            </div>

            <div className="right-data">
              <div className="top-post-heading-wrapper">
                <h2 className="top-post-title">Top Post</h2>
                <div className="top-bolly-post-underline"></div>
                <div className="top-bolly-post-underline2"></div>
                <div className='bolly-top-img'>
                  <img src={image3} alt="top img" />
                </div>
              </div>
              <div>
                <div className='main-right-container'>
                  {data
                    .filter((value) => value.category === 'fitness').slice(0, 4)
                    .map((val) => {
                      return (
                        <>
                          <div className='main-rigth-container'>
                            <div key={val.id} className="right-data-wrapper">
                              <div className='right-img-container'>
                                <Link to={`/article/${val.id}`} className="right-data-link">
                                  <img src={val.image} alt="" className="top-post-image" />
                                </Link>
                              </div>
                              <div className="top-post-details-wrapper">
                                <p className="top-post-details title"><span style={{ color: 'orangered' }}>{val.name}</span></p>
                                <p className="top-post-details fits-details"> {val.details}</p>
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
                <div className='bolly-ads-container'>
                  <div className="bolly-ads-box-2 ads-2">Advertisement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Fitness = () => {
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



export default Fitness;
