import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

const Indonesia = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesian&api-key=ROKD5rvLAFG0ylF7d0lpAy3ZnvgAiAAz'
        );
        setArticles(
          response.data.response.docs.map((article) => ({
            title: article.headline.main,
            abstract: article.abstract,
            url: article.web_url,
            imageUrl: article.multimedia.length
              ? article.multimedia[0].url
              : null,
          }))
        );
      } catch (error) {
        console.error(
          'Error fetching data:',
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Berita Indonesia</h1>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indonesia;