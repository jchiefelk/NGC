var Radium = require('radium');
var React = require('react');
var Bootstrap = require('react-bootstrap');
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var Modal = Bootstrap.Modal;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var Button = Bootstrap.Button;


const AboutModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Native Generational Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4> About </h4>
            <p>  
              NGC's goal is to help facilitate change in 
              local, state, and federal policies 
              that are important to American Indians. Our approach to change
              is through direct community involvement with an emphasis on preserving traditional Indian values and culture.  
              We are also interested in educating the youth with the programming skills necessary to get jobs in the 21st century.  
            </p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});


const ContactModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4> Phone </h4>
            <p> 406-493-5198 </p>
          <h4> email </h4>
            <p> admin@nativegenerationalchange.com </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const DonateModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Support the Cause</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4> Donate Money </h4>
            <p> PayPal Account </p>
          <h4> Donate Time </h4>
            <p> Contact Dustin Monroe </p>
          <h4> Donate your Programming Expertise and become a contributor to the Site </h4>
            <p> Contact the administrator</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const CalendarModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Calendar of Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});


var Menu = React.createClass({

    getInitialState: function(){
        return {
            value: 0,
            showAbout: false,
            showContact: false,
            showDonate: false,
            showCalendar: false
        };
    },

  render: function () {
    let Close = () => this.setState({ 
      showAbout: false,
      showContact: false,
      showDonate: false,
      showCalendar: false 
    });

    return (
      <div>


        <Navbar fixedTop toggleNavKey={0} style={{backgroundColor: 'white',borderColor:'black'}}  brand={<a> <img src='/components/img/ngclogo.png' style={{width: '45px',height:'45px',margin:'-13'}}/> </a>}>

          <Nav left eventKey={0}>  
              <NavItem eventKey={1} onClick={()=> this.setState({ showAbout: true })} > about </NavItem>
              <NavItem eventKey={2} onClick={()=> this.setState({ showContact: true })} > contact </NavItem>
              <NavItem eventKey={3} onClick={()=> this.setState({ showDonate: true })}> support the cause </NavItem>
              <NavItem eventKey={4} onClick={()=> this.setState({ showCalendar: true })}> events </NavItem>
          </Nav>
        </Navbar>

    
      <AboutModal show={this.state.showAbout} onHide={Close} />
      <ContactModal show={this.state.showContact} onHide={Close} />
      <DonateModal show={this.state.showDonate} onHide={Close} />
      <DonateModal show={this.state.showCalendar} onHide={Close} />

      </div>
    );
  }
});

module.exports = Radium(Menu);



