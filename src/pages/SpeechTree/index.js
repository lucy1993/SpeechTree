import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
// action
import { fetchFeatures } from 'store/actions/fetchFeatures';
// components
import FeatureList from 'components/FeatureList';
import ContextList from 'components/ContextList';
import EventList from 'components/EventList';
import SentenceList from 'components/SentenceList';
import AddSentenceModal from 'components/AddSentenceModal';

// style 
import './index.scss'

class SpeechTree extends Component {

  state = {
    idPath: {
      feature: 1,
      context: 1,
      event: 1,
      activeAddButton: false
    },
    addSentenceModal: false,
    activeContextList: [],
    activeEventList: [],
    activeSentenceList: []
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFeatures())
  }

  handleFeatureListClick = (data, id) => {
    this.setState({
      activeContextList: data.feature,
      activeEventList: [],
      activeSentenceList: [],
      activeAddButton: false,
      idPath : {
        ...this.state.idPath,
        feature : id
      }
    })
  }

  handleContextListClick = (data, id) => {
    this.setState({
      activeEventList: data.context,
      activeSentenceList: [],
      activeAddButton: false,
      idPath : {
        ...this.state.idPath,
        context : id
      }
    })
  }

  handleEventListClick = (data, id) => {
    this.setState({
      activeSentenceList: data.event,
      activeAddButton: true,
      idPath : {
        ...this.state.idPath,
        event : id
      }
    })
  }

  handleAddSentence = () => {
    this.setState({
      addSentenceModal: true
    })
  }

  handleSentenceDelete = (id) => {
    const { activeSentenceList } = this.state;
    const modifiedActiveSentenceList = []
    activeSentenceList.forEach(s => {
      if(s.id !== id) {
        modifiedActiveSentenceList.push(s)
      }
    })

    this.setState({
      activeSentenceList: modifiedActiveSentenceList
    })
  }

  handleModalClose = () => {
    this.setState({
      addSentenceModal: false
    })
  }

  handleAddSentenceValue = (val) => {
    const { activeSentenceList } = this.state;

    this.setState({
      activeSentenceList: [
        ...activeSentenceList,
        {
          id: uuidv4(),
          text: val
        }
      ],
      addSentenceModal: false
    })
  }

  

  render () {
    const { features } = this.props;
    const { 
      activeContextList, 
      activeEventList, 
      activeSentenceList, 
      idPath, 
      addSentenceModal,
      activeAddButton
    } = this.state;
    return (
      <div className='speech-tree-wrap'>
        {addSentenceModal ? <AddSentenceModal 
          onModalClose={this.handleModalClose}
          onAddSentence={this.handleAddSentenceValue}
        /> : null}
        <section className='speech-section'>
          <div className='section-global-box section-box-title'>
            <h1 className='section-title'>Features</h1>
            <p className='section-sub-title'>There are {features && features.length ? features.length : 0} features in total</p>
          </div>
          <FeatureList
            data={features}
            onClickChange={this.handleFeatureListClick}
          />
        </section>
        <section className='speech-section'>
          <div className='section-global-box section-box-title'>
            <h1 className='section-title'>Contexts</h1>
            <p className='section-sub-title'>There are {activeContextList.length} contexts in total</p>
          </div>
          <ContextList 
            data={activeContextList}
            parentId={idPath}
            onClickChange={this.handleContextListClick}
          />
        </section>
        <section className='speech-section'>
          <div className='section-global-box section-box-title'>
            <h1 className='section-title'>Events</h1>
            <p className='section-sub-title'>There are {activeEventList.length} events in total</p>
          </div>
          <EventList
            data={activeEventList}
            parentId={idPath}
            onClickChange={this.handleEventListClick}
          />
        </section>
        <section className='sentences-section'>
          <div className='section-global-box section-box-title sentences-section-title-box'>
            <h1 className='section-title'>Sentences</h1>
            <p className='section-sub-title'>There are {activeSentenceList.length} sentences in total</p>
            <div 
              onClick={activeAddButton ? this.handleAddSentence : null}
              className={`${activeAddButton ? 'add-sentence-active' : 'add-sentence-disabled' } add-sentence-modified`} 
            >
              Add sentence +
            </div>
          </div>
          <SentenceList 
            data={activeSentenceList}
            parentId={idPath}
            onSentenceDelete={this.handleSentenceDelete}
          />
        </section>
      </div>
    )
  }
}

SpeechTree.propTypes = {
  features: PropTypes.array
}

const mapStateToProps = function(state) {
  return {
    features: state.features.data,
  }
}

export default connect(mapStateToProps)(SpeechTree);