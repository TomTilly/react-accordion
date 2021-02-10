import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Panel from './Panel';

const styles = {
  root: {
    background: 'white',
    borderRadius: '5px',
    border: '1px solid #dfdfdf',
    boxShadow: '0 0 5px #dfdfdf',
  },
};

class Accordion extends Component {
  constructor(props) {
    super(props);
    const { panels } = this.props;
    this.state = {
      activePanelId: panels[0].id,
      isAnimating: false,
    };

    this.changeActivePanel = this.changeActivePanel.bind(this);
  }

  changeActivePanel(id) {
    this.setState({
      isAnimating: true,
      activePanelId: id,
    });
  }

  render() {
    const { panels, classes } = this.props;
    const { activePanelId } = this.state;
    return (
      <div className={classes.root}>
        {panels.map((panel) => (
          <Panel
            key={panel.id}
            id={panel.id}
            title={panel.title}
            isOpen={activePanelId === panel.id}
            changeActivePanel={this.changeActivePanel}
          >
            {panel.body}
          </Panel>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Accordion);
