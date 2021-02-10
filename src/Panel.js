import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import downArrow from './images/down-chevron.svg';

const styles = {
  root: {
    '&:first-of-type h2': {
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #dedede',
    padding: '1.3em 1.5em',
    cursor: 'pointer',
    transition: '0.1s background-color linear',
    '&::after': {
      content: '""',
      width: '16px',
      height: '16px',
      background: `url(${downArrow})`,
      transition: '0.1s transform linear',
      transform: (props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'),
    },
  },
  body: {},
};

class Panel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(e) {
    const { isOpen, id, changeActivePanel } = this.props;
    if (!isOpen) {
      changeActivePanel(id);
    }
  }

  handleKeyDown(e) {
    const { isOpen, id, changeActivePanel } = this.props;
    if (!isOpen && e.key === 'Enter') {
      changeActivePanel(id);
    }
  }

  render() {
    const { title, children, isOpen, classes, id } = this.props;
    const headerId = `header-${id}`;
    const bodyId = `body-${id}`;
    return (
      <div className={classes.root}>
        <div
          className={classes.header}
          id={headerId}
          role="tab"
          aria-selected={isOpen}
          aria-expanded={isOpen}
          aria-controls={bodyId}
          tabIndex="0"
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
        >
          <h2>{title}</h2>
        </div>
        <div
          className={classes.body}
          id={bodyId}
          role="tabpanel"
          aria-labelledby={headerId}
          hidden={!isOpen}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Panel);
