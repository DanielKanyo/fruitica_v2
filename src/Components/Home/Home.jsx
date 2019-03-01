import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { IMAGES } from './Images';

class Home extends Component {
  render() {
    return (
      <div className="Component">
        <div>
          <Gallery images={IMAGES} backdropClosesModal={true} />
        </div>
      </div>
    );
  }
}
export default Home;