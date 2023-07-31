import React from 'react';
import { ContextData } from '../../data/Data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Bollywood.css';

const Bollywood = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div className='bollywoodComponent'>
        <h2 className="post-title">Movies</h2>
        <hr className="line" />
        <hr className="line2" />
        <div className="BollywoodContainer">
        <div className="BollywoodData">
          <div className="left-data">
            {data
              .filter((value) => value.category === 'bollywood')
              .map((val) => {
                return (
                  <>
                    <div key={val.id} className="bolly-wrapper">
                      <Link to={`/article/${val.id}`} className="left-data-link">
                        <img src={val.image} alt="" className="left-bolly-image" />
                      </Link>
                      <div className="movie-details">
                        <p className="movie-details-para bolly-title">{val.name}</p>
                        <p className="movie-details-para IMdb">IMdb: {val.imdb}</p>
                        <p className="movie-details-desc-para desc">{val.desc}</p>
                        <p className="movie-details-release-para release-left">
                          Release: {val.release}
                        </p>
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
              <div className="top-post-underline"></div>
            </div>
            {data
              .filter((value) => value.category === 'bollywood').slice(4, 8)
              .map((val) => {
                return (
                  <>
                    <div key={val.id} className="right-data-wrapper">
                      <Link to={`/article/${val.id}`} className="right-data-link">
                        <img src={val.image} alt="" className="top-post-image" />
                      </Link>

                      <div className="top-post-details-wrapper">
                        <p className="top-post-details title">{val.name}</p>
                        <p className="top-post-details IMdb"><span style={{fontWeight:'600'}}>IMdb:</span> {val.imdb}</p>

                        <p className="top-post-details release"><span style={{fontWeight:'600'}}>Release:</span>{val.release}</p>
                      </div>
                    </div>
                    {/* <hr className="top-post-divider" /> */}
                  </>
                )
              })}
            {/* <div className="small-ad">Advertisement</div> */}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Bollywood;
