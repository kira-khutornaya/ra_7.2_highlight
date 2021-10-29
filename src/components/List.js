import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Video from './Video';
import Article from './Article';
import withHighlight from './withHighlight';

const VideoWithHighlight = withHighlight(Video);
const ArticleWithHighlight = withHighlight(Article);

function List({ list }) {
  return list.map((item) => {
    switch (item.type) {
      case 'video':
        return (
          <VideoWithHighlight {...item} key={nanoid()} />
        );

      case 'article':
        return (
          <ArticleWithHighlight {...item} key={nanoid()} />
        );

      // no default
    }

    return null;
  });
}

List.defaultProps = {
  list: [],
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    views: PropTypes.number,
  })),
};

export default List;
