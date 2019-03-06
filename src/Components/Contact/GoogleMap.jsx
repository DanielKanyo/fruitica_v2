import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '100%',
  height: '300px'
}

class GoogleMap extends Component {

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 45.915969,
            lng: 19.768924
          }}
          zoom={15}
        >
          <Marker title={'Trg Republike 7 | Čantavir'} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("")
})(GoogleMap);