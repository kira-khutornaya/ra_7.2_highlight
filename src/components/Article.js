import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, views }) {
  return (
    <div className="item item-article">
      <h3><a href="#0">{title}</a></h3>
      <p className="views">
        Прочтений:
        {views}
      </p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Article;
