import React, { useEffect, useState } from 'react';
import './style.css';

export default function Newscontainer() {
  let [value, setValue] = useState([]);

  async function News() {
    try {
      const url = 'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw';
      const options = {
        method: 'GET',
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': 'cf4c716ee9msh124bbb1766cdfa7p1205f2jsn51342623f90d',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setValue(result.value);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    News();
  }, []);

  return (
    <div>
      <main>
        <div className='cardscontainer flex'>
          {value.map((item, index) => (
            <div className='card' key={index}>
              <div className='cardsimage'>
                <img src={item.image?.thumbnail?.contentUrl} alt='news'></img>
              </div>
              <div className='card-content'>
                <h3 id='title'>{item.name}</h3>
                <h6 id='new-source'>{item.datePublished}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
