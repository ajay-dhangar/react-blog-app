import React from 'react';
import { ContextData } from '../../data/Data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import './Bollywood.css';
import ImageSlider from '../home/ImageSlider';
import Footer from '../../component/footer/Footer'
import './Food.css'
import image1 from '../../data/images/food/img-1.jpg'
import image2 from '../../data/images/food/img-2.jpg'
import image3 from '../../data/images/food/banner.jpg'
import image4 from '../../data/images/food/img-3.jpg'
import image5 from '../../data/images/food/ing-4.jpg'
import image6 from '../../data/images/food/img-5.jpg'
import image7 from '../../data/images/food/img-6.jpg'
import image8 from '../../data/images/food/img-7.jpg'
import image9 from '../../data/images/food/img-8.jpg'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const Info = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div className='FoodComponent'>
        <h1 className="Food-component-title">Food</h1>
        <hr className="Food-line" />
        <hr className="Food-line2" />
        <div className="FoodContainer">
          <div className="Food-Left-Data">
            {data
              .filter((value) => value.category === 'food')
              .map((val) => {
                return (
                  <>
                    <div key={val.id} className="food-wrapper">
                      <div className="food-img-container">
                        <Link to={`/article/${val.id}`} className="food-left-data-link">
                          <img src={val.image} alt="" className="food-all-image" />
                        </Link>
                      </div>
                      <div className="food-details">
                        <p className="food-details-para food-title"><span>{val.name}</span></p>
                        <p className="food-desc">{val.desc}</p>
                        {/* <div className="movie-data-contain">
                            <p className="movie-details-para IMdb"><b>IMdb:</b> {val.imdb} <b>,</b> </p>
                            <p className="movie-details-release-para release-left">
                              <b>Release:</b> {val.release}
                            </p>
                          </div> */}
                      </div>
                    </div>
                    <hr className="food-bitween" />
                  </>
                )
              })}
          </div>

          <div className="food-right-data">
            <div className="food-top-post-heading-wrapper">
              <h2 className="food-top-post-title">Top Post</h2>
              <div className="top-food-post-underline"></div>
              <div className="top-food-post-underline2"></div>
              <div className='food-top-img'>
                <img src={image3} alt="top img" className='top-food-img' />
                {/* <ImageSlider images={images} /> */}
              </div>
            </div>
            <div className='food-main-right-container'>
              {data
                .filter((value) => value.category === 'food').slice(4, 8)
                .map((val) => {
                  return (
                    <>
                      <div className='main-food-rigth-container'>
                        <div key={val.id} className="right-food-data-wrapper">
                          <div className='right-food-img-container'>
                            <Link to={`/article/${val.id}`} className="right-food-data-link">
                              <img src={val.image} alt="" className="top-food-post-image" />
                            </Link>
                          </div>
                          <div className="top-food-post-details-wrapper">
                            <p className="top-food-post-details top-food-post-title"><span>{val.name}</span></p>
                            <p className="top-food-post-details food-left-details"> {val.dif}</p>

                          </div>
                        </div>
                        {/* <hr className="top-post-divider" /> */}
                        <div className='food-ads-container'>
                          <div className="food-ads-box ads-1">Advertisement</div>
                        </div>
                      </div>
                    </>
                  )
                })}
            </div>            
          </div>
          <div className='food-ads-container2'>
              <div className="food-ads-box-2 food-ads-2">Advertisement</div>
            </div>
        </div>
      </div>
    </>
  );
};

const Food = () => {
  return (
    <>
      <div className="Food-Main-Container">
        <ImageSlider images={images} />
        <div className="food-info-data">
          <Info />
        </div>
      </div>
      <Footer />
    </>
  )
};



export default Food;
