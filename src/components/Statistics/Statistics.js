import React, { Component } from 'react';
import { StatisticsList, StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

  render() {
    return (
      <StatisticsList>
        <StatisticsItem>Good: {this.props.good}</StatisticsItem>
        <StatisticsItem>Neutral: {this.props.neutral}</StatisticsItem>
        <StatisticsItem>Bad: {this.props.bad}</StatisticsItem>
        <StatisticsItem>Total: {this.props.total}</StatisticsItem>
        <StatisticsItem>
          Positive feedback: {this.props.positivePercentage}
        </StatisticsItem>
      </StatisticsList>
    );
  }
}
export default Statistics;
