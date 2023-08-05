import React from 'react';
import { useContext } from 'react';
import { ContextData } from '../../data/Data';
import { useParams, Link } from 'react-router-dom';
import './Article.css';
import Footer from '../footer/Footer'

const writter = [
  { name: "Ajay Dhangar", date: "28th July, 2023", img: 'https://avatars.githubusercontent.com/u/99037494?v=4', },
  { name: "Jane Smith", date: "1st August, 2023", img: 'https://avatars.githubusercontent.com/u/99037494?v=4' },
  { name: "Shivay", date: "30th July, 2023", img: 'https://avatars.githubusercontent.com/u/99037494?v=4' },
];

const Article = () => {
  const [data] = useContext(ContextData);
  let { path } = useParams();
  path = +path;
  let categories;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === path) {
      categories = data[i].category;
      break;
    }
  }

  // Randomly select a writer's information for this article
  const randomWriterIndex = Math.floor(Math.random() * writter.length);
  const writerInfo = writter[randomWriterIndex];

  return (
    <>
     <div className='ArticleContainer'>
     <div className='extra-Content'> <span>Like</span> <span>Share</span> </div>
      <div>
        {data
          .filter((value) => value.id === path)
          .map((val) => {
            return (
              <>
                <div className="article-container">
                  <h2 className='article-title'>{val.name}</h2>
                  <img src={val.image} alt="" className="article-img" />
                  <div className="writter-container">
                    <div className='writter-info-container'>
                      <img src={writerInfo.img} alt="" className="writerInfo-img" />
                      <div className='render-text-info'>
                        <p className="writer-name">Written By: <span className='name-info'>{writerInfo.name}</span></p>
                        <p className="written-date">Date: {writerInfo.date}</p>
                      </div>
                    </div>
                  </div>
                  <p className='article-content'>
                    {val.content}
                  </p>
                  <hr
                    style={{ marginTop: '2rem', position: 'relative', width: '100%' }}
                  />
                </div>
              </>
            )
          })}

        <div className="article-bottom-info">
          {data
            .filter((value) => value.id !== path && value.category === categories).slice(0, 4)
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
                <span className='extra-main-info'>
                  Date:
                </span>
                <span className='extra-info'>
                  TODAY
                </span>
              </div>
            ))}
        </div>
      </div>
     </div>

      <div>
        <Footer />
      </div>
    </>
  );
};


export default Article;
