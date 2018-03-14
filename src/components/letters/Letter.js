import React, { Component } from 'react';
import { connect } from 'react-redux';


class Letter extends Component {

  state = {
    selected: false
  };

  componentWillReceiveProps(nextProps) {
    const { letter } = this.props;
    // dictionary would be better data structure
    if(nextProps.guesses.includes(letter)) this.setState({ selected: true });
  }

  render() {

    const { letter, onSelect } = this.props;
    const { selected } = this.state;
    // can set 'selected' here in render method 
    return (
      <button className="letter" onClick={(event) => onSelect(event.target)} value={letter} disabled={selected ? true : false}>
        {letter}
      </button>

    );
  }
}

export default connect(
  state => ({ guesses: state.guesses }),
  null
)(Letter);
