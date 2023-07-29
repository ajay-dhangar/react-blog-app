import React from 'react';
import './Hollywood.css';
import { Link } from 'react-router-dom';
import { ContextData } from '../../data/Data';

import { useContext } from 'react';

const Hollywood = () => {
  const [data] = useContext(ContextData);

  return (
    <>
      <div className='HollywoodComponent'>
        <h2 className="post-title">Movies</h2>
        <div className="underline1"></div>

        <div className="wrapper">
          <div className="left-data">
            {data
              .filter((value) => value.category === 'hollywood')
              .map((val) => {
                return (
                  <>
                    <div key={val.id} className="bolly-wrapper">
                      <Link to={`/article/${val.id}`} className="left-data-link">
                        <img src={val.image} alt="" className="left-data-image" />
                      </Link>
                      <div className="movie-details">
                        <p className="movie-details-para">{val.name}</p>
                        <p className="movie-details-para">IMdb: {val.imdb}</p>

                        <br />
                        <p className="movie-details-desc-para">{val.desc}</p>
                        <p className="movie-details-release-para">
                          Release: {val.release}
                        </p>
                      </div>
                    </div>

                    <hr className="post-divider" />
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
              .filter((value) => value.category === 'hollywood')
              .map((val) => {
                return (
                  <>
                    <div key={val.id} className="right-data-wrapper">
                      <Link to={`/article/${val.id}`} className="right-data-link">
                        <img src={val.image} alt="" className="top-post-image" />
                      </Link>

                      <div className="top-post-details-wrapper">
                        <p className="top-post-details">{val.name}</p>
                        <p className="top-post-details">IMdb: {val.imdb}</p>

                        <br />
                        <p className="top-post-details">{val.release}</p>
                      </div>
                    </div>
                    <hr className="top-post-divider" />
                  </>
                )
              })}

            <div className="small-ad">Advertisement</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hollywood;
