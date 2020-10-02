import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <div>
          <label>Phone, email or username</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button type="submit">log in</button>
      </form>
      <div>
        <a href="/signup">Forgot password? · Sign up for Twitter</a>
      </div>
    </div>
  );
}
