import React from "react";

const Login = props => {
  const { users } = props;
  return (
    <div className="">
      <select name="login" onClick={props.Login}>
        {users.map(user => {
          return (
            <option value={user.username} key={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Login;
