import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { ContextData } from '../../data/Data';
import './slide.css';
import ImageSlider from './ImageSlider';
import { useContext } from 'react';
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

const Fitstories = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <h2 className="home-latest-fitness-stories-title">
        Latest Fitness Stories
      </h2>
      <hr className="underline" />
      <div className="article-wrapper">
        {data
          .filter((value) => value.category === 'fitness').slice(0, 4)
          .map((val) => (
            <div key={val.id} className="sports">
              <Link
                to={`/article/${val.id}`}
                style={{ position: 'relative', width: '5rem' }}
              >
                <img src={val.image} alt="" className="sports-img" />
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
    </>
  );
};

const Foodstories = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <h2 className="home-latest-food-stories-title">Latest Food Stories</h2>
      <hr className="underline" />
      <div className="article-wrapper">
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
    </>
  );
};

const Hollystories = () => {
  const [data] = useContext(ContextData);

  return (
    <>
      <h2 className="home-latest-hollywood-stories-title">
        Latest Hollywood Stories
      </h2>
      <hr className="underline" />
      <div className="bolly-stories">
        <div className="movie-container">
          {data
            .filter((value) => value.category === 'hollywood').slice(0, 4)
            .map((val) => (
              <div key={val.id} className="bolly-wrapper">
                <Link
                  to={`/article/${val.id}`}
                  className="bolly-image-wrapper"
                >
                  <img src={val.image} alt="" className="bolly-image" />
                </Link>
                <div className="movie-details">
                  <p className="movie-details-para">{val.name}</p>
                  <p className="movie-details-para">IMdb: {val.imdb}</p>
                  <br />
                  <p className="movie-details-para">Release: {val.release}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="advertisement">Advertisement</div>
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
              <div key={val.id} className="bolly-wrapper">
                <Link to={`/article/${val.id}`} className="bolly-image-wrapper">
                  <img src={val.image} alt="" className="bolly-image" />
                </Link>
                <div className="movie-details">
                  <p className="movie-details-para">{val.name}</p>
                  <p className="movie-details-para">IMdb: {val.imdb}</p>
                  <br />
                  <p className="movie-details-para">Release: {val.release}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="advertisement">
          
        </div>
      </div>
    </>
  );
};

const Sportstories = () => {
  const [data] = useContext(ContextData);

  const sport = [];

  for (var i = 0; i < data.length; i++) {
    var keys;
    keys = data[i].category;

    switch (keys) {
      case 'sports':
        sport.push(data[i]);
        break;
      default:
        console.log('no data found');
    }
  }

  console.log(sport);
  return (
    <>
      <h2 className="home-latest-sport-stories-title">Latest Sports Stories</h2>
      <hr className="underline" />
      <div className="article-wrapper">
        {sport.map((value) => (
          <div key={value.id} className="sports">
            <Link
              to={`/article/${value.id}`}
              style={{ position: 'relative', width: '5rem' }}
            >
              <img src={value.image} alt="" className="sports-img" />
            </Link>
            <h3>{value.details}</h3>
            <p className="texts"></p>
            <span
              style={{
                fontSize: '0.8rem',
                color: 'black',
                marginTop: '2vh',
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
                marginTop: '2vh',
                position: 'relative',
              }}
            >
              23/7/2021
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
      <div className="techContainer">
        <h2 className="home-latest-tech-stories-title">
          Latest Technology Stories
        </h2>
        <hr className="underline" />
        <div className="article-wrapper">
          {data
            .filter((value) => value.category === 'technology').slice(0, 4).map((val) => (
              <div key={val.id} className="sports">
                <Link
                  to={`/article/${val.id}`}
                  style={{ position: 'relative', width: '5rem' }}
                >
                  <img src={val.image} alt="" className="sports-img" />
                </Link>

                <h3>{val.details}</h3>
                <p className="texts">{val.name}</p>
                <span
                  style={{
                    fontSize: '0.8rem',
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
                    fontSize: '0.6rem',
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
      </div>
    </>
  );
};

const Home = () => {
  const [data] = useContext(ContextData);

  console.log(data);

  const item1 = [];
  const item2 = [];

  for (var i = 0; i < data.length; i++) {
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
        console.log('no data found');
    }
  }

  // console.log(item1);
  // console.log(item2);

  return (
    <>
      <div className="HomeContainer">
        <ImageSlider images={images} />
        <div className="mountain-wrapper">
          {item1.map((value) => {
            return (
              <img
                key={value.id}
                src={value.image}
                alt=""
                className="mountain-big"
              />
            );
          })}
          {/* <div className="mountain-small-wrapper">
          {item2.map((value) => (
            <>
              <img
                key={value.id}
                src={value.image}
                className="mountain-small"
                alt=""
              />
              <img
                key={value.id + 1}
                src={value.image}
                className="mountain-small"
                alt=""
              />
            </>
          ))}
        </div> */}
        </div>
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
    </>
  );
};

export default Home;
