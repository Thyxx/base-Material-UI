import React from 'react';
import { browserHistory } from 'react-router';
import { Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Login from '../components/Login.js';

export default class LoginPage extends React.Component {
  nextPathname() {
    if (this.props.location.state && this.props.location.state.nextPathname) {
      return this.props.location.state.nextPathname;
    }
    return null;
  }

  render() {
    const style = {
      height: 'auto',
      width: '400px',
      padding: 20,
      display: 'inline-block',
    };
    return (
      <Col xs={12} md={4} mdOffset={4}>
        <Paper style={style} zDepth={1}>
          <Login
            nextPathname={this.nextPathname()}
            handleClose={() => (0)}
            displayLogin={() => (browserHistory.push('/signup'))}
          />
        </Paper>
      </Col>
    );
  }
}

LoginPage.propTypes = {
  'location.state.nextPathname': React.PropTypes.string,
  'location.state.': React.PropTypes.object,
  location: React.PropTypes.object,
};
