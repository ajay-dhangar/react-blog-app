import React from 'react';
import { ContextData } from '../../data/Data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../home/ImageSlider';
import Footer from '../../component/footer/Footer'
import './Fitness.css'
import image1 from '../../data/images/fitness/banner.jpg'
import image2 from '../../data/images/fitness/banner-1.jpg'
import image3 from '../../data/images/fitness/banner-2.jpg'
import image4 from '../../data/images/fitness/banner-3.jpg'
import image5 from '../../data/images/fitness/banner-4.jpg'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

const Info = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div className='fitComponent'>
        <h1 className="fit-component-title">Fitness</h1>
        <hr className="fit-line" />
        <hr className="fit-line2" />
        <div className="fitContainer">
          <div className="fit-Left-Data">
            {data
              .filter((value) => value.category === 'fitness')
              .map((val) => {
                return (
                  <>
                    <div key={val.id} className="fit-wrapper">
                      <div className="fit-img-container">
                        <Link to={`/article/${val.id}`} className="fit-left-data-link">
                          <img src={val.image} alt="" className="fit-all-image" />
                        </Link>
                      </div>
                      <div className="fit-details">
                        <p className="fit-details-para fit-title"><span>{val.name}</span></p>
                        <p className="fit-desc">{val.details}</p>
                        {/* <div className="movie-data-contain">
                            <p className="movie-details-para IMdb"><b>IMdb:</b> {val.imdb} <b>,</b> </p>
                            <p className="movie-details-release-para release-left">
                              <b>Release:</b> {val.release}
                            </p>
                          </div> */}
                      </div>
                    </div>
                    <hr className="fit-bitween" />
                  </>
                )
              })}
          </div>

          <div className="fit-right-data">
            <div className="fit-top-post-heading-wrapper">
              <h2 className="fit-top-post-title">Top Post</h2>
              <div className="top-fit-post-underline"></div>
              <div className="top-fit-post-underline2"></div>
              <div className='fit-top-img'>
                {/* <img src={image3} alt="top-fit-img" /> */}
              </div>
            </div>
            <div>
              <div className='fit-main-right-container'>
                {data
                  .filter((value) => value.category === 'fitness').slice(0, 5)
                  .map((val) => {
                    return (
                      <>
                        <div className='fit-main-right-container '>
                          <div key={val.id} className="right-fit-data-wrapper">
                            <div className='right-fit-img-container'>
                              <Link to={`/article/${val.id}`} className="right-fit-data-link">
                                <img src={val.image} alt="" className="top-fit-post-image" />
                              </Link>
                            </div>
                            <div className="top-fit-post-details-wrapper">
                              <p className="top-fit-post-title fit-title"><span>{val.name}</span></p>
                              <p className="top-fit-post-details fit-left-details"> {val.details}</p>
                            </div>
                          </div>
                          {/* <hr className="top-post-divider" /> */}
                          <div className='fit-ads-container'>
                            <div className="fit-ads-box ads-1">Advertisement</div>
                          </div>
                        </div>
                      </>
                    )
                  })}
              </div>
              
            </div>
          </div>
          <div className='fit-ads-container2'>
                <div className="fit-ads-box-2 ads-2">Advertisement</div>
              </div>
        </div>
      </div>
    </>
  );
};

const Fitness = () => {
  return (
    <>
      <div className="main-fit-Container">
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
