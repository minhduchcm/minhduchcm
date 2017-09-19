import React from "react";

const UserInfo = ({ auth, firebase }) => {
  return (
    <div>
      {auth.displayName}{" "}
      <button
        onClick={() => {
          firebase.logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

const LoginWidgets = ({ auth, firebase }) => {
  return (
    <div className="card">
      {auth ? (
        <UserInfo auth={auth} firebase={firebase} />
      ) : (
        <button
          onClick={() => {
            firebase.login({
              provider: "google",
              type: "popup"
            });
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LoginWidgets;
