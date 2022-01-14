import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackOptionsWrapper,
  FeedbackOptionsBtn,
} from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
  };

  render() {
    return (
      <FeedbackOptionsWrapper>
        {this.props.options.map(option => {
          return (
            <FeedbackOptionsBtn
              key={option}
              type="button"
              name={option}
              onClick={() => this.props.onLeaveFeedback(option)}
            >
              {option}
            </FeedbackOptionsBtn>
          );
        })}
      </FeedbackOptionsWrapper>
    );
  }
}
export default FeedbackOptions;
