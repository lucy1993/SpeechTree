import React, { Component } from 'react'
import uuidv4 from 'uuid/v4';

class EventList extends Component {
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
    const { data, parentId } = this.props;
    const { activeIndex } = this.state;

    return (
      <div>
        {data && data.length ? data.map((featureArr, index) => <div 
          key={uuidv4()}
          className={`${index === activeIndex ? 'active' : ''} section-global-box` }
          onClick={() => this.handleBoxClick(featureArr, index)}
        >
          <h1 className="section-elm-title"> 
            Event
            {parentId.feature}.
            {parentId.context}.
            {index + 1}
          </h1> 
          <p className="section-elm-sub-title"> has  {featureArr.event.length} context </p>
        </div>) : null}
      </div>
    )
  }
}

export default EventList