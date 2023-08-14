import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextData } from '../../data/Data';
import Footer from '../../component/footer/Footer'

import ImageSlider from './ImageSlider';

// All Styles importing
import './css/Home.css';
import './css/slide.css';
import './css/HomeSport.css';
import './css/HomeTech.css';
import './css/HomeBolly.css';
import './css/HomeHolly.css';
import './css/HomeFit.css';
import './css/HomeFood.css';


// All Images importing

import image1 from './img/banner-1.jpg'
import image2 from './img/banner-2.jpg'
import image3 from './img/banner-3.jpg'
import image4 from './img/banner-4.jpg'
import image5 from './img/banner-5.jpg'
import image6 from './img/banner-6.jpg'
import image7 from './img/banner-8.jpg'
import image8 from './img/banner-9.jpg'
import image9 from './img/banner.jpg'
import image10 from './img/banner-10.jpg'
import image11 from '../../data/images/hollywood/Avengers-Endgame.jpg'
import image12 from '../../data/images/bollywood/Bahubali2.jpg'
import image13 from '../../data/images/technology/Internet of Things (IoT).jpg'
import image14 from '../../data/images/technology/Cybersecurity and Data Privacy.jpg'
import image15 from '../../data/images/hollywood/The-Dark-Knight.jpg'

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
  image13,
  image14,
  image15
];

const Sportstories = () => {
  const [data] = useContext(ContextData);

  const sport = [];

  for (let i = 0; i < data.length; i++) {
    let keys;
    keys = data[i].category;

    switch (keys) {
      case 'sports':
        sport.push(data[i]);
        break;
      default:
        console.log('no data here...');
    }
  }

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the date every second (you can adjust this interval as needed)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <h2 className="home-latest-sport-stories-title">Latest Sports Stories</h2>
      <hr className="home-latest-fitness-underline underline" />
      <div className="Home-Sport-Container">
        {sport.map((value) => (
          <div key={value.id} className="sports">
            <div className="all-sport-content">
              <Link
                to={`/article/${value.id}`}
                style={{ position: 'relative', width: '5rem' }}
              >
                <img src={value.image} alt="" className="sports-img" />
              </Link>
              <h3>{value.details}</h3>
              <p className="sport-texts">{value.name}</p>
              <span
                style={{
                  fontSize: '1rem',
                  color: 'black',
                  marginTop: '2vh',
                  position: 'relative',
                }}
              >
                Date:
              </span>
              <span
                style={{
                  color: '#262626',
                  fontSize: '0.8rem',
                  marginLeft: '10px',
                  marginTop: '2vh',
                  position: 'relative',
                }}
              >
                {formatDate(currentDate)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Techstories = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <h2 className="home-latest-tech-stories-title">
        Latest Technology Stories
      </h2>
      <hr className="home-latest-tech-underline underline" />

      <div className="Home-Tech-Container">
        {data
          .filter((value) => value.category === 'technology').slice(0, 4).map((val) => (
            <div key={val.id} className="tech">
              <Link
                to={`/article/${val.id}`}
                style={{ position: 'relative', width: '5rem' }}
              >
                <img src={val.image} alt="" className="tech-img" />
              </Link>

              <h3>{val.details}</h3>
              <p className="tech-texts">{val.name}</p>
              <span
                style={{
                  fontSize: '1rem',
                  color: 'black',
                  top: '1vh',
                  position: 'relative',
                }}
              >
                Date:
              </span>
              <span
                style={{
                  color: 'grey',
                  fontSize: '0.8rem',
                  marginLeft: '10px',
                  top: '1vh',
                  position: 'relative',
                }}
              >
                TODAY
              </span>
            </div>
          ))}
      </div>

    </>
  );
};

const Bollystories = () => {
  const [data] = useContext(ContextData);

  return (
    <>
      <h2 className="home-latest-bollywood-stories-title">
        Latest Bollywood Stories
      </h2>
      <hr className="underline" />
      <div className="bolly-stories">
        <div className="bolly-Left-Data">
          {data
            .filter((value) => value.category === 'bollywood').slice(0, 4)
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

        <div className='ads-container'>
          <div className="ads-box ads-1">Advertisement</div>
        </div>
      </div>
    </>
  );
};

const Hollystories = () => {
  const [data] = useContext(ContextData);

  return (
    <>
      <div className="HollyConatainer">
        <h2 className="home-latest-hollywood-stories-title">
          Latest Hollywood Stories
        </h2>
        <hr className="underline" />
        <div className="bolly-stories">
          <div className="holly-Left-Data">
            {data
              .filter((value) => value.category === 'hollywood').slice(0, 4)
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
          <div className='ads-container'>
            <div className="ads-box ads-1">Advertisement</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Foodstories = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <h2 className="home-latest-food-stories-title">
        Latest Food Stories
      </h2>
      <hr className="home-latest-food-underline underline" />

      <div className="Home-food-Container">
        {data
          .filter((value) => value.category === 'food').slice(0, 4).map((val) => (
            <div key={val.id} className="food">
              <Link
                to={`/article/${val.id}`}
                style={{ position: 'relative', width: '5rem' }}
              >
                <img src={val.image} alt="" className="food-img" />
              </Link>

              <h3>{val.desc}</h3>
              <p className="food-texts">{val.name}</p>
              <span
                style={{
                  fontSize: '1rem',
                  color: 'black',
                  top: '1vh',
                  position: 'relative',
                }}
              >
                Date:
              </span>
              <span
                style={{
                  color: 'grey',
                  fontSize: '0.8rem',
                  marginLeft: '10px',
                  top: '1vh',
                  position: 'relative',
                }}
              >
                TODAY
              </span>
            </div>
          ))}
      </div>

    </>
  );
};

const Fitstories = () => {
  const [data] = useContext(ContextData);
  return (
    <>

      <h2 className="home-latest-fit-stories-title">
        Latest Fitness Stories
      </h2>
      <hr className="home-latest-fit-underline underline" />
      <div className="Home-fit-Container">
        {data
          .filter((value) => value.category === 'fitness').slice(0, 4).map((val) => (
            <div key={val.id} className="fit">
              <Link
                to={`/article/${val.id}`}
                style={{ position: 'relative', width: '5rem' }}
              >
                <img src={val.image} alt="" className="fit-img" />
              </Link>

              <h3>{val.details}</h3>
              <p className="fit-texts">{val.name}</p>
              <span
                style={{
                  fontSize: '1rem',
                  color: 'black',
                  top: '1vh',
                  position: 'relative',
                }}
              >
                Date:
              </span>
              <span
                style={{
                  color: 'grey',
                  fontSize: '0.8rem',
                  marginLeft: '10px',
                  top: '1vh',
                  position: 'relative',
                }}
              >
                TODAY
              </span>
            </div>
          ))}
      </div>

    </>
  );
};


const Home = () => {
  const [data] = useContext(ContextData);
  const item1 = [];
  const item2 = [];

  for (let i = 0; i < data.length; i++) {
    var keys = data[i].id;
    console.log(keys);
    switch (keys) {
      case 1:
        item1.push(data[i]);
        break;
      case 2:
        item2.push(data[i]);
        break;

      default:
        console.log('no data here...');
    }
  }

  return (
    <>
      <div className="HomeContainer">
        <ImageSlider images={images} />

        <Sportstories />
        <br />
        <Techstories />
        <br />
        <Bollystories />
        <br />
        <Hollystories />
        <br />
        <Foodstories />
        <br />
        <Fitstories />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
