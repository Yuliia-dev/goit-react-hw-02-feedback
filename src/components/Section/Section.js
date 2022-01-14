import React, { Component } from 'react';
import { SectionWrapper, SectionTitle } from './Section.styled';
import PropTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
  };
  render() {
    return (
      <SectionWrapper>
        <SectionTitle>{this.props.title}</SectionTitle>
        {this.props.children}
      </SectionWrapper>
    );
  }
}
export default Section;
