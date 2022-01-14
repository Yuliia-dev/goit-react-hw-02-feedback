import React, { Component } from 'react';
import { SectionWrapper, SectionTitle } from './Section.styled';

class Section extends Component {
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
