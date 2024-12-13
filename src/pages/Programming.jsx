import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

const Programming = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=ROKD5rvLAFG0ylF7d0lpAy3ZnvgAiAAz');
        setArticles(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Berita Programming</h1>
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

export default Programming;