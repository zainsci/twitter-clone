import React from "react";

let days = [];
for (let i = 1; i < 32; i++) {
  days.push(<option>{i}</option>);
}
let years = [];
for (let i = 1900; i < 2021; i++) {
  years.push(<option>{i}</option>);
}

function Signup() {
  return (
    <div className="signup-popup">
      <div className="auth-page">
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
        <button className="btn btn-primary signup-next">Next</button>
        <div className="form-container">
          <form className="auth-form">
            <h2 className="ca-heading">Create your account</h2>
            <div className="auth-label">
              <label for="signup-name">Name</label>
              <input type="text" id="signup-name" />
            </div>
            <div className="word-counter">0/50</div>
            <div className="auth-label">
              <label for="signup-phone">Phone</label>
              <input type="text" id="signup-phone" />
            </div>
            <a href="/change-to-email">Use email instead</a>
            <div className="dob-info">
              <strong>Date of birth</strong>
              <p>
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or somthing else.
              </p>
            </div>
            <div className="date-of-birth">
              <div className="auth-label dob-c1">
                <label>Month</label>
                <select>
                  <option></option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="auth-label dob-c2">
                <label>Day</label>
                <select>
                  <option></option>
                  {days}
                </select>
              </div>
              <div className="auth-label dob-c3">
                <label>Year</label>
                <select>
                  <option></option>
                  {years.reverse()}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Signup02() {
  return (
    <div className="signup-popup">
      <div className="auth-page">
        <svg
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          className="btn btn-link signup-back"
          fill="#1da1f2"
        >
          <g>
            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
          </g>
        </svg>
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
        <button className="btn btn-primary signup-next">Next</button>
        <div className="signup-ce02">
          <h2 className="ca-heading">Customize your experience</h2>

          <div className="tos-text">
            <h3>
              <strong>
                Track where you see Twitter content accross the web
              </strong>
            </h3>
            <div className="signup-ced">
              <p>
                Twitter uses this data to personalize your experience. This web
                browsing history will never be stored with your name, email, or
                phone number.
              </p>
              <input type="checkbox" />
              <div>
                For more details about these settings, visit the{" "}
                <a href="https://help.twitter.com/managing-your-account/new-account-settings">
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Signup03() {
  return (
    <div className="signup-popup">
      <div className="auth-page">
        <strong>Step 3 / 5</strong>
        <button className="btn btn-primary signup-next">Next</button>
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
            <button className="btn btn-primary sbtn03">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
