import React from 'react';
var MainPage = require('./components/mainpage');
var Menu = require('./components/menu');

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
            <Menu/>
            <MainPage/>
      </div>
    )
  }
}
