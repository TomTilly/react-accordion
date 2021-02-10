import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Accordion from './Accordion';
import './App.css';

class App extends Component {
  static defaultProps = {
    panels: [
      {
        title: 'Accordion Panel 1',
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
        title: 'Accordion Panel 2',
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
        title: 'Accordion Panel 3',
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

  render() {
    const { panels } = this.props;
    return (
      <div className="App">
        <Accordion panels={panels} />
      </div>
    );
  }
}

export default App;
