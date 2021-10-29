import React from 'react';
import PropTypes from 'prop-types';

function Video({ url, views }) {
  return (
    <div className="item item-video">
      <iframe src={url} title={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
      <p className="views">
        Просмотров:
        {views}
      </p>
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Video;
