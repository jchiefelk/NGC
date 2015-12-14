var Radium = require('radium');
var React = require('react');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;
var Router = require('react-router-component');
var Location = Router.Location;
var Link = Router.Link;
var Jumbotron = Bootstrap.Jumbotron;
var Carousel = Bootstrap.Carousel;
var CarouselItem = Bootstrap.CarouselItem;
var Modal = Bootstrap.Modal;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var Button = Bootstrap.Button;
//
// MAIN APP
//
var MainPage = React.createClass({

    getInitialState: function(){
        return {
            value: 0
        };
    },

    handleChange: function(value) {
        this.setState({
            value: value,
        });
    },


  render: function () {


    return (

      <div>

        <Jumbotron>
       <h1> Native Generational Change </h1>
        </Jumbotron>

<div style={{alignItems:'center'}}>
       
      <Grid>
     
        <Row>
            <Col xs={1}>
              <Carousel style={{width:400,alignItems:'center'}}>
                <CarouselItem>
                  <img width={450} height={300}  src="/components/img/carouselpic1.png"/>
                  <div className="carousel-caption">
                    <p>Youth Outreach Project</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <img width={450} height={300}  src="/components/img/carouselpic2.png"/>
                  <div className="carousel-caption">
                    <p>Language Preservation</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <img width={450} height={300} src="/components/img/carousel3.png"/>
                  <div className="carousel-caption">
                    <p> Anti-Racism Protest</p>
                  </div>
                </CarouselItem>
              </Carousel>


          </Col>


      <Row>
          <Col xs={1} xsPush={5}>
            <h2 style={{width:150}}> Find us @ </h2>
            <img style={{marginTop:10}} width={90} height={90} src="/components/img/facebook.png"/>

          </Col>

          <Col xs={1} xsPush={6}>
       
            <img style={{marginTop:75}} width={90} height={80} src="/components/img/twitter.png"/>
          </Col>

          <Col xs={1} xsPush={7}>
       
            <img style={{marginTop:75}} width={90} height={80} src="/components/img/github.png"/>
          </Col>
    </Row>


        </Row>

       </Grid>

</div>
   
      </div>
    )
  }
});

module.exports = Radium(MainPage);


