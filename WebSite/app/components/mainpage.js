var React = require('react');
var Bootstrap = require('react-bootstrap');
var InlineCss = require('react-inline-css');
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

            <InlineCss stylesheet={`
                & .card { 
                   text-align: center;

                }
                `}>


                <div className="card">

                    <h1> Native Generational Change </h1>
                
                </div>


            </InlineCss>



        </Jumbotron>

              <p style={{fontStyle:'Arial',fontSize: 18}}>
                  The Native Generational Change (NGC) is an organization focused on social issues important
                  to American Indians.  We are involved in mutliple projects which you can find in our news section, but the homepage 
                  is here exclusively to provide educational resources for anyone of any age, trying to learn programming.  
                  There is a high-demand for skilled programmers in the America job market, and NGC 
                  wants to increase the amount of American Indians in Technology companies.  
              </p>


              <p style={{fontStyle:'Arial',fontSize: 18}}>
                  Programming skills give you the potential to start a business using little to no 
                  resources, except for Time.  The NGC website is here to educate American Indians with the 
                  necessary skills and knowledge to start their own companies, with the hope that these business
                  then employ both the Urban and Reservation communities.   
              </p>


            <InlineCss stylesheet={`
                & .card { 
                   text-align: center;

                }
                `}>
                <div className="card">

                    <h2>  Tutorials    </h2>
                
                </div>
            </InlineCss>



            <InlineCss stylesheet={`
                & .card { 
                   text-align: left;

                }
                `}>



                <div className="card">

              <a href="https://github.com/jchiefelk/NGC">   
                    <p style={{margin:15, fontStyle:'Arial',fontSize: 18}}>  1) Getting started   </p>
              </a>


                    <p style={{margin:15,fontStyle:'Arial',fontSize: 18}}>   2) Building your first website with React.js  </p>  
                    
                    <p style={{margin:15, fontStyle:'Arial',fontSize: 18}}>  3) Deploying your website on Heroku  </p> 
           
                    <p style={{margin:15, fontStyle:'Arial',fontSize: 18}}>  4) Web Scrapping with Python  </p>

                    <p style={{margin:15, fontStyle:'Arial',fontSize: 18, color:'red'}}>  5) Building your first Database with Node.js  </p> 

                    <p style={{margin:15, fontStyle:'Arial',fontSize: 18, color:'red'}}>  6) White-Hat Hacking with Python  </p>

                    <p style={{margin:15, fontStyle:'Arial',fontSize: 18, color:'red'}}>  7) Building your first Video Game with openFrameworks  </p>

                    <p style={{margin:15, fontStyle:'Arial',fontSize: 18, color:'red'}}>  8) Breaking Encryption Algorithms  </p>

                </div>
            </InlineCss>




      <Grid style={{marginTop:100}}>
              <Row>
                  <Col xs={3}>
                    <h2 style={{width:150}}> Find us @ </h2>
                
                 <a href="https://www.facebook.com/groups/nativegenerationalchange/">   
                        <img style={{marginTop:10}} width={70} height={70} src="https://s3.amazonaws.com/nativegenchange/icons/facebook.png"/>
                </a>
                  </Col>

                  <Col xs={3} >
                <a href="https://twitter.com/Native_G_Change">
                    <img style={{marginTop:75}} width={70} height={60} src="https://s3.amazonaws.com/nativegenchange/icons/twitter.png"/>
                </a>
                  </Col>

                  <Col xs={3}>
                  
                  <a href="https://github.com/jchiefelk/NGC">
                    <img style={{marginTop:75}} width={70} height={60} src="https://s3.amazonaws.com/nativegenchange/icons/github.png"/>
                  </a>
                  </Col>
            </Row>
       </Grid>
      


      </div>
    )
  }
});

module.exports = MainPage;


