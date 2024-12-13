import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { saveArticle, unsaveArticle } from '../redux/savedNews';

const NewsCard = ({ article }) => {
  const dispatch = useDispatch();
  const savedArticles = useSelector(state => state.saved);
  const isSaved = savedArticles.some(saved => saved.url === article.url);

  const handleSave = () => {
    if (isSaved) {
      dispatch(unsaveArticle(article));
    } else {
      dispatch(saveArticle(article));
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.abstract}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
          Baca
        </a>
        <button
          className={`btn ${isSaved ? 'btn-danger' : 'btn-success'}`}
          onClick={handleSave}
        >
          {isSaved ? 'Batalkan' : 'Simpan'}
        </button>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;