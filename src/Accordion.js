import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Panel from './Panel';

class Accordion extends Component {
  static defaultProps = {
    panels: [
      {
        heading: 'Accordion Panel 1',
        body: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            velit. Vel possimus eligendi iusto! Atque, aperiam nam dolore
            aliquam autem vel inventore magni at eaque distinctio deleniti
            excepturi ipsum itaque.
          </p>
        ),
        id: uuid(),
      },
      {
        heading: 'Accordion Panel 2',
        body: (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              velit. Vel possimus eligendi iusto! Atque, aperiam nam dolore
              aliquam autem vel inventore magni at eaque distinctio deleniti
              excepturi ipsum itaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              velit. Vel possimus eligendi iusto! Atque, aperiam nam dolore
              aliquam autem vel inventore magni at eaque distinctio deleniti
              excepturi ipsum itaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              velit. Vel possimus eligendi iusto! Atque, aperiam nam dolore
              aliquam autem vel inventore magni at eaque distinctio deleniti
              excepturi ipsum itaque.
            </p>
          </div>
        ),
        id: uuid(),
      },
      {
        heading: 'Accordion Panel 3',
        body: (
          <div>
            <img src="https://unsplash.it/200" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              velit. Vel possimus eligendi iusto! Atque, aperiam nam dolore
              aliquam autem vel inventore magni at eaque distinctio deleniti
              excepturi ipsum itaque.
            </p>
          </div>
        ),
        id: uuid(),
      },
    ],
  };

  constructor(props) {
    super(props);
    const { panels } = this.props;
    this.state = {
      activePanelId: panels[0].id,
    };
  }

  render() {
    const { panels } = this.props;
    return (
      <div className="Accordion">
        {panels.map((panel) => (
          <Panel heading={panel.heading}>{panel.body}</Panel>
        ))}
      </div>
    );
  }
}

export default Accordion;
