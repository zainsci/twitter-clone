import React from "react";

let days = [];
for (let i = 1; i < 32; i++) {
  days.push(<option>{i}</option>);
}
let years = [];
for (let i = 1900; i < 2021; i++) {
  years.push(<option>{i}</option>);
}

export default function Signup() {
  return (
    <div className="signup">
      <svg
        viewBox="0 0 24 24"
        className="twitter-svg-logo"
        fill="#1da1f2"
        width="24px"
        height="24px"
      >
        <g>
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
        </g>
      </svg>
      <button className="btn">Next</button>
      <form>
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
        <strong>Date Of Birth</strong>
        <small>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or somthing else.
        </small>
        <div className="date-of-birth">
          <div className="auth-label">
            <label>Month</label>
            <select>
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
          <div className="auth-label">
            <label>Day</label>
            <select>{days}</select>
          </div>
          <div className="auth-label">
            <label>Year</label>
            <select>{years.reverse()}</select>
          </div>
        </div>
      </form>
    </div>
  );
}
