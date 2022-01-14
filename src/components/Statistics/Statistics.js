import React, { Component } from 'react';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

class Statistics extends Component {
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
