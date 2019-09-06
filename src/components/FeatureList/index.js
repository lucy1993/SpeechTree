import React, { Component } from 'react';
import PropTypes from 'prop-types';

import uuidv4 from 'uuid/v4';

// style
import './index.scss';

class FeatureList extends Component {
  state = {
    activeIndex: null
  }

  handleBoxClick = (featureArr, index) => {
    const { onClickChange } = this.props;
    this.setState({
      activeIndex: index
    })
    onClickChange(featureArr, index + 1)
  }
  render () {
    const { data } = this.props;
    const { activeIndex } = this.state;

    return (
      <div>
        {data && data.length ? data.map((featureArr, index) => <div 
          key={uuidv4()}
          className={`${index === activeIndex ? 'active' : ''} feature-list section-global-box` }
          onClick={() => this.handleBoxClick(featureArr, index)}
        >
          <h1 className='section-elm-title'>
            Feature 
            {index + 1}
          </h1> 
          <p className='section-elm-sub-title'> has {featureArr.feature.length} context </p>
        </div>) : null}
      </div>
    )
  }
}

FeatureList.propTypes = {
  data: PropTypes.array,
  onClickChange: PropTypes.func,
}

export default FeatureList