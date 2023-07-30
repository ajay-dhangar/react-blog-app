import React from 'react';
import { useContext } from 'react';
import { ContextData } from '../../data/Data';
import { useParams, Link } from 'react-router-dom';
import './Article.css';

const Article = () => {
  const [data] = useContext(ContextData);
  var { path } = useParams();
  path = +path;
  var categor;
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === path) {
      categor = data[i].category;
      break;
    }
  }
  // console.log(typeof path);
  // console.log(categor);

  return (
    <div>
      {data
        .filter((value) => value.id === path)
        .map((val) => {
          return (
            <>
              <div className="article-content-wrapper">
                <h2 className='article-title'>{val.name}</h2>
                <img src={val.image} alt="" className="article-img" />
                <p className='article-content'>
                  {val.content}
                </p>
                <hr
                  style={{ marginTop: '2rem', position: 'relative', width: '100%' }}
                />
                {/* <div className="avatar-wrapper">
              <img src={val.avatar} alt="" className="avatar-icon" />

              <div>
                <p style={{ fontSize: "0.7rem", color: "grey" }}>WRITTEN BY:</p>
                <p style={{ fontSize: "0.7rem", color: "black" }}>
                  Shivay
                </p>
                <p style={{ fontSize: "0.7rem", color: "grey" }}>
                  28th February,2022
                </p>
              </div>
            </div> */}
              </div>
            </>
          )
        })}

      <div
        style={{
          fontFamily: 'sans-serif',
          textAlign: 'center',
          margin: 'auto',
          marginTop: '2rem',
        }}
      >
        <h2>More From The Siren</h2>
      </div>
      <div
        className="underline"
        style={{ margin: 'auto', marginTop: '0.5rem' }}
      ></div>

      <div className="article-wrapper">
        {data
          .filter((value) => value.id !== path && value.category === categor).slice(0, 4)
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
    </div>
  );
};

export default Article;
