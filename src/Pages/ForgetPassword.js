import React from "react";

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="auth-form d-flex flex-col jc-center">
          <div className="mt-40">
            <h1>Find Your Twitter Account</h1>
          </div>
          <div className="auth-label mt-40">
            <label htmlFor="forget-password">
              Enter your email, phone number, or username
            </label>
            <input id="forget-password" type="text" />
          </div>
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    );
  }
}

export default ForgetPassword;
