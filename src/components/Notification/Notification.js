import React, { Component } from 'react';
import { NotificationText } from './Notification.styled';

class Notification extends Component {
  render() {
    return <NotificationText>{this.props.message}</NotificationText>;
  }
}
export default Notification;
