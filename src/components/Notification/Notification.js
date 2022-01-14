import React, { Component } from 'react';
import { NotificationText } from './Notification.styled';
import PropTypes from 'prop-types';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    return <NotificationText>{this.props.message}</NotificationText>;
  }
}
export default Notification;
