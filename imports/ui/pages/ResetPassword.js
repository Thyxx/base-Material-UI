import React from 'react';
import Formsy from 'formsy-react';
import { Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';
import { FormsyText } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import handleResetPassword from '../../modules/reset-password';

export default class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      canSubmit: false,
    };
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  handleSubmit() {
    handleResetPassword({ token: this.props.params.token });
  }

  render() {
    const errorMessages = {
      minlengthError: 'Please provide at least 6 characters.',
      matchError: 'Password don\'t match.',
    };
    const style = {
      height: 'auto',
      width: '400 px',
      padding: 20,
      display: 'inline-block',
    };
    return (
      <Col xs={12} md={4} mdOffset={4}>
        <Paper className="ResetPassword" style={style} zDepth={1}>
          <h4 className="page-header">Reset Password</h4>
          <p>
            To reset your password, enter a new one below. You will be logged in
            with your new password.
          </p>
          <Formsy.Form
            onValid={this.enableButton.bind(this)}
            onInvalid={this.disableButton.bind(this)}
            onValidSubmit={this.handleSubmit.bind(this)}
          >
            <FormsyText
              type="password"
              ref="newPassword"
              name="newPassword"
              floatingLabelText="New password"
              hintText="6 characters minimum"
              validations={{ minLength: 6 }}
              validationError={errorMessages.minlengthError}
              required
            /><br/>
            <FormsyText
              type="password"
              ref="repeatNewPassword"
              name="repeatNewPassword"
              floatingLabelText="Repeat New Password"
              hintText="Repeat New Password"
              validations="equalsField:newPassword"
              validationError={errorMessages.matchError}
              required
            /><br/><br/>
            <RaisedButton
              type="submit"
              label="Submit"
              primary={true}
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </Col>
    );
  }
}

ResetPassword.propTypes = {
  params: React.PropTypes.object,
};
