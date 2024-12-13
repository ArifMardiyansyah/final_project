import { useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';

const Saved = () => {
  const savedArticles = useSelector(state => state.saved);

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Berita Tersimpan</h1>
      <div className="row">
        {savedArticles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
