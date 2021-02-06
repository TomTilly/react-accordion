import React, { Component } from 'react';

class Panel extends Component {
  render() {
    const { heading, children } = this.props;
    return (
      <div className="Panel">
        <header className="Panel-header">
          <h2 className="Panel-title">{heading}</h2>
        </header>
        <div className="Panel-body">{children}</div>
      </div>
    );
  }
}

export default Panel;
