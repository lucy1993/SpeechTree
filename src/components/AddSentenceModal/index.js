import React, { Component } from 'react'

// style
import './index.scss';

class AddSentenceModal extends Component {
  state = {
    value: ''
  };

  handleAddSentence = () => {
    const { onAddSentence } = this.props;
    const { value } = this.state;
    onAddSentence(value)
  }

  handleCancel = () => {
    const { onModalClose } = this.props;
    onModalClose(true)
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render () {
    const { value } = this.state;

    return (
      <div> 
        <div className='transparent-back'></div>
        <div className='add-sentence-modal'>
          <form>
            <h1 className='add-sentence-title'> New sentence  </h1>
            <textarea 
              type="text" 
              value={value} 
              onChange={this.handleChange}
              className='sentence-input'
            />
          </form>
          <div className='add-sentence-buttons'>
            <div 
                onClick={this.handleCancel}
                className='global-button'
              >
                Cancel
            </div>
            <div 
                onClick={this.handleAddSentence}
                className={`${value ? 'add-sentence-active' : 'add-sentence-disabled' } `} 
              >
                Add sentence +
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AddSentenceModal