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
import image1 from './img/home-1.jpg'
import image2 from './img/home-2.jpg'
import image3 from './img/home-3.jpg'
import image4 from './img/home-4.jpg'
import image5 from './img/home-5.jpg'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
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
        <div className="movie-container">
          {data
            .filter((value) => value.category === 'bollywood').slice(0, 4).map((val) => (
              <>
                <div key={val.id} className="bolly-wrapper">
                  <Link to={`/article/${val.id}`} className="bolly-image-wrapper">
                    <img src={val.image} alt="" className="bolly-image" />
                  </Link>
                  <div className="movie-details">
                    <p className="movie-details-para bolly-title">Movie Name: <span style={{ color: 'orangered' }}>{val.name}</span></p>
                    <p className="desc">{val.desc}</p>
                    <div className="movie-data-contain">
                      <p className="movie-details-para IMdb"><b>IMdb:</b> {val.imdb} <b>,</b> </p>
                      <p className="movie-details-release-para release-left">
                        <b>Release:</b> {val.release}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="bitween" />
              </>
            ))}

        </div>

        <div className='ads-container'>
          <div className="ads-box ads-1">Advertisement</div>
        </div>
      </div>
    </>
  );
};

// const Hollystories = () => {
//   const [data] = useContext(ContextData);

//   return (
//     <>
//       <div className="HollyConatainer">
//         <h2 className="home-latest-hollywood-stories-title">
//           Latest Hollywood Stories
//         </h2>
//         <hr className="underline" />
//         <div className="bolly-stories">
//           <div className="movie-container">
//             {data
//               .filter((value) => value.category === 'hollywood').slice(0, 4)
//               .map((val) => (
//                 <>
//                   <div key={val.id} className="bolly-wrapper">
//                     <div className='movie-img-containe'>
//                       <Link
//                         to={`/article/${val.id}`}
//                         className="bolly-image-wrapper"
//                       >
//                         <img src={val.image} alt="" className="bolly-image" />
//                       </Link>
//                     </div>
//                     <div className="movie-details">
//                       <p className="movie-details-para bolly-title">Movie Name: <span style={{ color: 'orangered' }}>{val.name}</span></p>
//                       <p className="desc">{val.desc}</p>
//                       <div className="movie-data-contain">
//                         <p className="movie-details-para IMdb"><b>IMdb:</b> {val.imdb} <b>,</b> </p>
//                         <p className="movie-details-release-para release-left">
//                           <b>Release:</b> {val.release}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <hr className="bitween" />
//                 </>

//               ))}
//           </div>

//           <div className='ads-container'>
//             <div className="ads-box ads-1">Advertisement</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const Foodstories = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div className='foodContainer'>
        <h2 className="home-latest-food-stories-title">Latest Food Stories</h2>
        <hr className="home-latest-fitness-underline underline" />
        <div className="dataContainer">
          {data
            .filter((value) => value.category === 'food').slice(0, 4)
            .map((val) => (
              <div key={val.id} className="sports">
                <Link
                  to={`/article/${val.id}`}
                  style={{ position: 'relative', width: '5rem' }}
                >
                  <img src={val.image} alt="" className="sports-img" />
                </Link>

                <h3>{val.desc}</h3>
                <p className="texts">{val.name}</p>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: 'black',
                    top: '0.5rem',
                    position: 'relative',
                  }}
                >
                  Date:
                </span>
                <span
                  style={{
                    color: 'grey',
                    fontSize: '0.6rem',
                    marginLeft: '10px',
                    top: '0.5rem',
                    position: 'relative',
                  }}
                >
                  TODAY
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

const Fitstories = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div className="fitContainer">
        <h2 className="home-latest-fitness-stories-title">
          Latest Fitness Stories
        </h2>
        <hr className="home-latest-fitness-underline underline" />
        <div className="dataContainer">
          {data
            .filter((value) => value.category === 'fitness').slice(0, 4)
            .map((val) => (
              <div key={val.id} className="sports">
                <Link
                  to={`/article/${val.id}`}
                  style={{ position: 'relative', width: '5rem' }}
                >
                  <img className="sports-img" src={val.image} alt="" />
                </Link>
                <h3>{val.details}</h3>
                <p className="texts">{val.name}</p>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: 'black',
                    top: '0.5rem',
                    position: 'relative',
                  }}
                >
                  Date:
                </span>
                <span
                  style={{
                    color: 'grey',
                    fontSize: '0.6rem',
                    marginLeft: '10px',
                    top: '0.5rem',
                    position: 'relative',
                  }}
                >
                  TODAY
                </span>
              </div>
            ))}
        </div>
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
        {/* <Hollystories /> */}
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