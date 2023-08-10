import React from 'react';
import { ContextData } from '../../data/Data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import './Bollywood.css';
import ImageSlider from '../home/ImageSlider';
import Footer from '../../component/footer/Footer'
import './Food.css'
import image1 from '../../data/images/food/Burgers.jpg'
import image2 from '../../data/images/food/Cheesecake.jpg'
import image3 from '../../data/images/food/Chocolate.jpg'
import image4 from '../../data/images/food/Curry.jpg'
import image5 from '../../data/images/food/Donuts.jpg'
import image6 from '../../data/images/food/Ice-cream.jpg'
import image7 from '../../data/images/food/Macarons.jpg'
import image8 from '../../data/images/food/Pasta.jpg'
import image9 from '../../data/images/food/Pizza.jpg'
import image10 from '../../data/images/food/Ramen.jpg'
import image11 from '../../data/images/food/Sushi.jpg'
import image12 from '../../data/images/food/Tacos.jpg'

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
  image10,
  image11,
  image12,
];

const Info = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div className='bollywoodComponent'>
        <h1 className="component-title">Food</h1>
        <hr className="line" />
        <hr className="line2" />
        <div className="BollywoodContainer">
          <div className="BollywoodData">
            <div className="left-data">
              {data
                .filter((value) => value.category === 'food')
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
                          <p className="movie-details-para bolly-title"><span style={{ color: 'orangered', fontSize:'28px' }}>{val.name}</span></p>
                          <p className="desc">{val.desc}</p>
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

            <div className="food-right-data">
              <div className="top-post-heading-wrapper">
                <h2 className="top-post-title">Top Post</h2>
                <div className="top-bolly-post-underline"></div>
                <div className="top-bolly-post-underline2"></div>
                <div className='food-top-img'>
                  {/* <img src={image3} alt="top img" /> */}
                  <ImageSlider images={images} />
                </div>
              </div>
              <div>
                <div className='main-right-container food-main-right-container'>
                  {data
                    .filter((value) => value.category === 'food').slice(4, 8)
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
                                <p className="top-post-details fits-details"> {val.dif}</p>

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

const Food = () => {
  return (
    <>
      <div className="MainContainer">
        {/* <ImageSlider images={images} /> */}
        <div className="info-data">
          <Info />
        </div>
      </div>
      <Footer />
    </>
  )
};



export default Food;
