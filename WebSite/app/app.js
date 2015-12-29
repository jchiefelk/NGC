var React = require('react');
var Router = require('react-router-component');
var Location = Router.Location;
var Link = Router.Link;
var Locations = Router.Locations;
var ReactDOM = require('react-dom');
var MainPage = require('./components/mainpage');
var Menu = require('./components/menu');
//
//
//
var App = React.createClass({

render: function()	{
    return (
		      <div> 
			     <Locations>
			        <Location path="/" handler={MainPage} />
			      </Locations>
		      </div>
    )
}

});

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<App />,document.getElementById('app'));

