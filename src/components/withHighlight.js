/* eslint react/prop-types: 0 */

import React from 'react';
import New from './New';
import Popular from './Popular';

export default function withHighlight(WrappedComponent) {
  return class extends React.PureComponent {
    render() {
      const { views } = this.props;

      if (views < 100) {
        return (
          <New>
            <WrappedComponent {...this.props} />
          </New>
        );
      }

      if (views > 1000) {
        return (
          <Popular>
            <WrappedComponent {...this.props} />
          </Popular>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}
