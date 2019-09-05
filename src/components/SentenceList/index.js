import React, { Component } from 'react'
import uuidv4 from 'uuid/v4';

// style
import './index.scss';

class SentenceList extends Component {
  
  render () {

    const { data, parentId, onSentenceDelete } = this.props;
    
    return (
      <div>
        {data && data.length ? data.map((sentence, index) => {
          return <div 
          className="section-global-box section-global-box-border sentence-box"
            key={uuidv4()}
          >
            <h1 className="section-elm-title">
              Sentence 
              {parentId.feature}.
              {parentId.context}.
              {parentId.event}.
              {index + 1}
            </h1>
            <span 
              className='sentence-delete'
              onClick={() => onSentenceDelete(sentence.id)}
            > delete </span>
          </div>
        }) : null}
      </div>
    )
  }
}

export default SentenceList