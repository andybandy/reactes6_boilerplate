import React from 'react';
import ReactDom from 'react-dom';

class Boiler extends React.Component {
  render() {
    return (
      <div>
        yeaaaaah!
      </div>
    )
  }
}

ReactDom.render(
  <Boiler />,
  document.getElementById('boiler_container')
);
