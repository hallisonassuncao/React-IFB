import React from 'react';

export default class Button extends React.Component {
  render() {
    const { texto, onClick } = this.props;

    return (
      <button onClick={onClick} style={{ padding: '10px', marginTop: '10px' }}>
        {texto}
      </button>
    );
  }
}
