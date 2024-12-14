import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

const Search = () => {
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
          params: {
            'api-key': 'ROKD5rvLAFG0ylF7d0lpAy3ZnvgAiAAz',
            q: query,
            'fq': 'section_name:("World" OR "Technology" OR "Health" OR "Sports" OR "Indonesia")',
            'sort': 'newest'
          }
        });

        const articlesWithImages = response.data.response.docs.map((article) => ({
          title: article.headline.main,
          abstract: article.abstract,
          url: article.web_url,
          imageUrl: article.multimedia.length > 0 ? article.multimedia[0].url : null,
        }));

        setArticles(articlesWithImages);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchArticles();
  }, [query]);

  return (
    <div className="container mt-4">
      <h2>Search Results for {query}</h2>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;