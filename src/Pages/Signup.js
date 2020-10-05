import React, { useState, useEffect } from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStep01: true,
      isStep02: false,
      isStep03: false,
      formValid: false,
      signupData: {},
    };
  }

  getData = (data) => {
    this.setState({ signupData: data });
    if (
      data.name !== "" &&
      data.phone !== "" &&
      data.month !== "" &&
      data.day !== "" &&
      data.year !== ""
    ) {
      this.state.formValid = true;
    }
  };

  render() {
    let step;
    if (this.state.isStep01 === true) {
      step = <Step01 signupData={this.getData} />;
    } else if (this.state.isStep02 === true) {
      step = <Step02 />;
    } else if (this.state.isStep03 === true) {
      step = <Step03 signupData={this.state.signupData} />;
    } else {
      step = <h1>Someting Went Wrong.</h1>;
    }
    return (
      <div className="signup-page">
        <div className="signup-popup">
          <div className="auth-page">
            <div className="svg-logo">
              <svg
                viewBox="0 0 24 24"
                className="twitter-svg-logo"
                fill="#1da1f2"
                width="26px"
                height="26px"
              >
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
            </div>
            <button
              className={
                this.state.formValid
                  ? "btn btn-primary signup-next"
                  : "btn btn-primary signup-next disabled"
              }
            >
              Next
            </button>
            {step}
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;

// Step One Of SignUp
class Step01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useEmail: false,
      name: "",
      phone: "",
      day: "",
      month: "",
      year: "",
    };
  }

  sendData = () => {
    let data = {};
    this.setState({ name: document.getElementById("signup-name").value });
    this.setState({ phone: document.getElementById("signup-phone").value });
    this.setState({ day: document.getElementById("signup-day").value });
    this.setState({ year: document.getElementById("signup-year").value });
    this.setState({ month: document.getElementById("signup-month").value });
    data.name = document.getElementById("signup-name").value;
    data.phone = document.getElementById("signup-phone").value;
    data.month = document.getElementById("signup-month").value;
    data.day = document.getElementById("signup-day").value;
    data.year = document.getElementById("signup-year").value;
    this.props.signupData(data);
  };

  countWords(e) {
    this.setState({ name: e.target.value });
  }
  changeInput(e) {
    e.preventDefault();
    !this.state.useEmail
      ? this.setState({ useEmail: true })
      : this.setState({ useEmail: false });
  }
  render() {
    return (
      <div className="form-container">
        <form className="auth-form">
          <h2 className="ca-heading">Create your account</h2>
          <div className="auth-label">
            <label htmlFor="signup-name">Name</label>
            <input
              type="text"
              id="signup-name"
              maxLength="50"
              value={this.state.name}
              onChange={this.sendData}
            />
          </div>
          <div className="word-counter">{this.state.name.length}/50</div>
          <div className="auth-label">
            <label htmlFor="signup-phone">
              {this.state.useEmail ? "Email" : "Phone"}
            </label>
            <input
              type={this.state.useEmail ? "email" : "text"}
              id="signup-phone"
              value={this.state.phone}
              onChange={this.sendData}
            />
          </div>
          <a href="/change-to-email" onClick={this.changeInput}>
            Use {this.state.useEmail ? "phone" : "email"} instead
          </a>
          <div className="dob-info">
            <strong>Date of birth</strong>
            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or somthing else.
            </p>
          </div>
          <div className="date-of-birth">
            <div className="auth-label dob-c1">
              <label htmlFor="signup-month">Month</label>
              <select
                value={this.state.month}
                onChange={this.sendData}
                id="signup-month"
              >
                <option></option>
                {pMonths()}
              </select>
            </div>
            <div className="auth-label dob-c2">
              <label htmlFor="signup-day">Day</label>
              <select
                value={this.state.day}
                onChange={this.sendData}
                id="signup-day"
              >
                <option></option>
                {pDays()}
              </select>
            </div>
            <div className="auth-label dob-c3">
              <label htmlFor="signup-year">Year</label>
              <select
                value={this.state.year}
                onChange={this.sendData}
                id="signup-year"
              >
                <option></option>
                {pYears().reverse()}
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// Step Two Of SignUp
function Step02(props) {
  return (
    <div className="d-flex flex-col">
      <h2 className="ca-heading">Customize your experience</h2>

      <div className="mt-40 mb-20">
        <h3 className="mb-20">
          <strong>Track where you see Twitter content accross the web</strong>
        </h3>
        <div className="d-flex ">
          <p className="mr-20">
            Twitter uses this data to personalize your experience. This web
            browsing history will never be stored with your name, email, or
            phone number.
          </p>
          <input type="checkbox" className="mr-20" />
        </div>
        <div className="mt-20">
          For more details about these settings, visit the{" "}
          <a href="https://help.twitter.com/managing-your-account/new-account-settings">
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
}

// Step Three Of SignUp
function Step03(props) {
  return (
    <div className="form-container">
      <form className="auth-form">
        <h2 className="ca-heading">Create your account</h2>
        <div className="auth-label">
          <input type="text" id="signup-name" />
        </div>
        <div className="auth-label">
          <input type="text" id="signup-phone" />
        </div>
        <div className="auth-label">
          <input type="text" id="signup-dob" />
        </div>
        <div className="tos-text">
          <div>
            <span>By signing up, you agree to the </span>
            <a href="https://twitter.com/tos#new">Terms of Service </a>
            and <a href="https://twitter.com/privacy">Privacy Policy</a>,
            including{" "}
            <a href="https://support.twitter.com/articles/20170514">
              Cookie Use{" "}
            </a>
            . Others will be able to find you by email or phone number when
            provided · <a href="/privacy-policy">Privacy Options</a>
          </div>
        </div>
        <button className="btn btn-primary w-100 mt-20 py-20">Sign up</button>
      </form>
    </div>
  );
}

// Printing Months in Select Input
function pMonths() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months.map((x) => <option key={x}>{x}</option>);
}
// Printing Days in Select Input
function pDays() {
  let days = [];
  for (let i = 1; i < 32; i++) {
    days.push(<option key={i}>{i}</option>);
  }
  return days;
}
// Printing Years in Select Input
function pYears() {
  let years = [];
  for (let i = 1900; i < 2021; i++) {
    years.push(<option key={i}>{i}</option>);
  }
  return years;
}
