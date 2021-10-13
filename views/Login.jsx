const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Login extends React.Component {
  render() {
    const username = this.props.username;
    const password = this.props.password;

    return (
      <DefaultLayout>
        <div>
          <h1>Add Form</h1>
        </div>
      </DefaultLayout>
    )
  }
};

module.exports = Login;
